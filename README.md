# Spott — Delightful Events Start Here

Spott is a modern full-stack event management platform that allows users to **discover, create, and manage events seamlessly**.
It provides a complete event lifecycle — from creation to registration, QR check-in, and analytics dashboard.

Built with **Next.js, Convex, Clerk, and Tailwind**, Spott delivers a fast, scalable, and user-friendly experience.

---

#  Features

##  Event Management

* Create and manage events
* Free & Paid events support
* Event categories and tags
* Custom themes (Pro feature)
* Event capacity management

##  Smart Event Discovery

* Search events instantly
* Location-based filtering (State + City)
* Category-based browsing
* Upcoming event recommendations

##  User Authentication

* Secure authentication using Clerk
* Automatic user onboarding
* Personalized event recommendations

##  Ticketing System

* One-click event registration
* Unique QR code generation
* Ticket management dashboard
* Cancel registrations

##  Organizer Dashboard

* Registration analytics
* Check-in tracking
* Revenue tracking (Paid events)
* Attendance statistics

##  QR Code Check-In

* Scan attendee tickets
* Real-time check-in updates
* Prevent duplicate entry

##  Pro Features

* Unlimited event creation
* Custom theme colors
* Premium badge
* Advanced event customization

---

#  Tech Stack

## Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* ShadCN UI
* Lucide Icons

## Backend

* Convex (Database + Server Functions)

## Authentication

* Clerk

## Utilities

* Date-Fns
* Country-State-City
* Sonner (Toasts)

---

#  Architecture

```
Next.js App Router
│
├── Clerk Authentication
├── Convex Backend
├── Event Management System
├── Ticketing System
├── QR Check-In System
└── Analytics Dashboard
```

---

#  Project Structure

```
app/
components/
convex/
hooks/
lib/
public/
```

---

#  Getting Started

## 1. Clone the repository

```
git clone https://github.com/yourusername/spott.git
cd spott
```

## 2. Install dependencies

```
npm install
```

## 3. Setup environment variables

Create `.env.local`

```
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## 4. Run development server

```
npm run dev
```

Visit:

```
http://localhost:3000
```

---

#  Environment Variables

| Variable                          | Description        |
| --------------------------------- | ------------------ |
| NEXT_PUBLIC_CONVEX_URL            | Convex backend URL |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | Clerk public key   |
| CLERK_SECRET_KEY                  | Clerk secret key   |

---



#  Use Cases

* College Events
* Tech Meetups
* Workshops
* Hackathons
* Community Events
* Conferences

---

#  Key Highlights

* Full-stack production-ready project
* Clean architecture
* Real-time backend (Convex)
* Modern UI
* Scalable design

---

#  Author

Rahul Garg

Built with ❤️ using Next.js and Convex

---

# 📄 License

MIT License
