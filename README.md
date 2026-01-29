# 🔗 MISSINGLINK

### AI-Assisted Missing Persons Coordination Platform

---

## 🧩 The Problem (Why this matters)

In India, missing person cases often fail **not due to lack of people**, but due to **lack of coordination**.

* Families have no centralized way to collect leads
* Citizens may see missing persons but don’t know where to report
* Leads are scattered across WhatsApp, posters, and social media
* The **first 24–48 hours**, which are critical, are often lost

---

## 💡 Our Solution

**MISSINGLINK** is a full-stack web platform that connects:

* **Families** → who report missing persons
* **Citizens** → who submit sightings anonymously
* **Administrators** → who verify and act on leads

The system uses **AI assistance** to prioritize the most relevant sightings, ensuring urgent leads are not missed.

---

## 🎯 What Makes This Project Different

* Addresses a **real, recurring problem** in Indian cities
* Focuses on **coordination and prioritization**, not just reporting
* AI is used **practically**, not as a buzzword
* Designed to be **feasible, deployable, and scalable**

---

## 🚀 Core Features (Implemented Scope)

### Family Module

* Register missing person (photo, description, last seen location)
* View all reported sightings
* Track case status (Active / Found / Closed)

### Citizen Module

* Anonymous sighting submission
* Location-based reporting using maps
* Optional photo upload
* No login required

### Admin Module

* View all active cases and sightings
* AI-assisted match priority (Low / Medium / High)
* Update case status and validate reports

---

## 🤖 Role of AI (Clearly Defined)

AI is used to **analyze and compare text descriptions**.

* Compares missing person details with citizen sighting descriptions
* Assigns a **match priority level**
* Helps administrators focus on **high-probability leads first**

> AI supports decision-making; final actions remain human-verified.

---

## 🛠 Technical Architecture

**Frontend**

* React.js
* Tailwind CSS
* Mapbox / Leaflet for location visualization

**Backend**

* Node.js
* Express.js (REST APIs)

**Database & Authentication**

* Firebase Firestore
* Firebase Authentication

**AI Integration**

* OpenAI GPT API for text similarity and prioritization

**Deployment**

* Frontend: Vercel
* Backend: Render

---

## 🧭 System Workflow (End-to-End)

1. Family registers a missing person
2. Case becomes visible on the platform
3. Citizens submit sightings anonymously
4. AI evaluates similarity and assigns priority
5. Admin reviews and validates sightings
6. Family receives relevant updates
7. Case is closed when resolved

---

## 👥 Team & Execution

* **Team Size:** 3 members
* **Development Duration:** 25 days
* **Approach:** Incremental development with real-world constraints

Each member handled one major responsibility:

* Frontend & UX
* Backend & Database
* AI integration & logic

---

## 🌍 Impact & Relevance

* Improves response time during critical hours
* Enables structured citizen participation
* Reduces information loss and confusion
* Highly relevant to urban India and Karnataka

---

## 🧠 Design Philosophy

We intentionally avoided:

* Over-complex AI models
* Unrealistic claims
* Features that could not be completed reliably

Our focus was:

> **Solving a real problem with a working, honest system.**

---

**MISSINGLINK** is not just a technical project —
it is a **coordination tool built for real people, real emergencies, and real impact**.

