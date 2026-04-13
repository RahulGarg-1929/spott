"use client";

import { useState, useEffect, useRef } from "react";
import { QrCode, Loader2 } from "lucide-react";
import { useConvexMutation } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function QRScannerModal({ isOpen, onClose }) {
  const [scannerReady, setScannerReady] = useState(false);
  const [error, setError] = useState(null);
  const scannerRef = useRef(null);
  const isRunningRef = useRef(false);

  const { mutate: checkInAttendee } = useConvexMutation(
    api.registrations.checkInAttendee
  );

  const handleCheckIn = async (qrCode) => {
    try {
      const result = await checkInAttendee({ qrCode });
      if (result.success) {
        toast.success("✅ Check-in successful!");
        onClose();
      } else {
        toast.error(result.message || "Check-in failed");
      }
    } catch (err) {
      toast.error(err.message || "Invalid QR code");
    }
  };

  useEffect(() => {
    let cancelled = false;

    const startScanner = async () => {
      if (!isOpen) return;

      setError(null);
      setScannerReady(false);

      // Wait for the Dialog to fully render its portal
      await new Promise((r) => setTimeout(r, 300));
      if (cancelled) return;

      try {
        const { Html5Qrcode } = await import("html5-qrcode");
        if (cancelled) return;

        // Enumerate cameras instead of relying on facingMode
        let cameras = [];
        try {
          cameras = await Html5Qrcode.getCameras();
        } catch (err) {
          throw new Error("Camera access denied. Please allow camera permissions.");
        }

        if (!cameras || cameras.length === 0) {
          throw new Error("No camera found on this device.");
        }

        if (cancelled) return;

        // Prefer back camera on mobile, else use first available
        const camera =
          cameras.find((c) =>
            c.label.toLowerCase().includes("back") ||
            c.label.toLowerCase().includes("rear") ||
            c.label.toLowerCase().includes("environment")
          ) || cameras[0];

        const qr = new Html5Qrcode("qr-scanner-container");
        scannerRef.current = qr;

        await qr.start(
          camera.id,
          {
            fps: 10,
            qrbox: { width: 230, height: 230 },
          },
          (decodedText) => {
            if (isRunningRef.current) {
              isRunningRef.current = false;
              qr.stop().catch(() => { });
            }
            handleCheckIn(decodedText);
          },
          () => { } // suppress per-frame scan errors
        );

        if (!cancelled) {
          isRunningRef.current = true;
          setScannerReady(true);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("QR Scanner error:", err);
          setError(err.message || "Failed to start the camera.");
        }
      }
    };

    startScanner();

    return () => {
      cancelled = true;
      if (scannerRef.current && isRunningRef.current) {
        isRunningRef.current = false;
        scannerRef.current.stop().catch(() => { });
        scannerRef.current = null;
      }
      setScannerReady(false);
      setError(null);
    };
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <QrCode className="w-5 h-5 text-purple-500" />
            Check-In Attendee
          </DialogTitle>
          <DialogDescription>
            Scan the attendee&apos;s QR code to check them in
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-3 py-2">
          {/* 
            This div MUST have the id that Html5Qrcode targets.
            It must be rendered before the scanner init runs. 
          */}
          <div
            id="qr-scanner-container"
            style={{
              width: "100%",
              minHeight: "300px",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#111",
              position: "relative",
            }}
          />

          {!scannerReady && !error && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin text-purple-500" />
              Starting camera…
            </div>
          )}

          {error && (
            <p className="text-sm text-red-500 text-center px-2">{error}</p>
          )}

          {scannerReady && (
            <p className="text-sm text-muted-foreground text-center">
              Position the QR code within the frame
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
