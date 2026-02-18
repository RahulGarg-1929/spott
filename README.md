# Spott – Event Discovery & Management Platform

Spott is a full-stack web application designed to simplify event discovery, creation, and management. The platform connects event organizers and attendees through a centralized system that supports secure authentication, personalized event discovery, real-time data handling, and subscription-based feature access.

The project is developed as part of a Project-Based Learning (PBL) initiative and demonstrates the use of modern web technologies and serverless backend architecture.

---

## 🚀 Features

- Secure user authentication and session management  
- User onboarding with interests and location personalization  
- Event creation and management for organizers  
- Real-time event search and discovery  
- Ticket registration and attendee management  
- Subscription-based feature control (Free & Pro plans)  
- Responsive and modern user interface  

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui components

### Backend
- Convex (serverless real-time backend)
- Convex Database & Search Indexes

### Authentication & Subscriptions
- Clerk Authentication
- Clerk Pricing & Subscription Management

---

## 🧩 System Architecture

Spott follows a modular architecture where the frontend, authentication service, and backend are tightly integrated:

- Clerk handles authentication, user identity, and subscriptions  
- Convex manages database storage, queries, mutations, and real-time updates  
- Next.js handles routing, UI rendering, and client-side logic  

This architecture ensures scalability, security, and real-time synchronization across the application.

---

## 📂 Database Schema Overview

- **Users**: Stores authentication details, onboarding data, and subscription status  
- **Events**: Stores event details such as category, date, location, and organizer  
- **Registrations**: Stores ticket and attendee information  

---

## 🔍 Event Discovery & Search

Spott provides real-time event search using backend search indexing. Users can discover upcoming events based on search queries, location, and interests, ensuring fast and relevant results.

---

## 💳 Subscription Model

The platform implements a Free and Pro subscription model:
- Free users have limited access to event creation  
- Pro users can unlock premium features and unlimited event creation  

Subscriptions are managed securely using Clerk.

---

## 📈 Future Scope

- AI-based event recommendations  
- Online payment gateway integration for paid events  
- Organizer analytics dashboard  
- Mobile application support  
- Admin moderation and management tools  

---

## 👨‍🎓 Academic Details

**Project Type:** Project-Based Learning (PBL)  
**Course:** Computer Science & Engineering  
**Institution:** Manipal University Jaipur  

### Team
- **Rahul Garg** (23FE10CSE00065)

### Project Guide
- **Mrs. Soni Gupta**

---

## 📄 License

This project is developed for academic purposes.
