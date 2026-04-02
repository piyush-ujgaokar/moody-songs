
# 🎵 Moody Songs – AI Mood-Based Music Recommender

<p align="center">
  Detect your mood. Play your vibe. 🎧
</p>

<p align="center">
  <a href="https://moody-songs.onrender.com">
    <img src="https://img.shields.io/badge/Live-Demo-green?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Face%20Detection-orange?style=for-the-badge" />
</p>

---

## 🚀 About The Project

**Moody Songs** is an AI-powered web application that detects a user's facial expression using their camera and recommends songs based on their mood in real time.

It combines **face expression recognition** with an interactive **music player experience**, making music discovery more personalized and engaging.

---

## 🌐 Live Demo

👉 https://moody-songs.onrender.com

---

## ✨ Features

- 🔐 **Authentication System**
  - User Registration & Login  
  - Secure Logout  

- 🎥 **Real-Time Face Detection**
  - Captures facial expressions using camera  
  - Detects emotions:
    - 😊 Happy  
    - 😢 Sad  
    - 😲 Surprised  

- 🎶 **Mood-Based Song Recommendation**
  - Dynamically suggests songs based on detected emotion  

- 🎧 **Music Player**
  - Play / Pause  
  - Forward / Rewind  
  - Volume Control  

- 🌙 **Modern UI**
  - Clean and minimal design  
  - Smooth user experience  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- SCSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### AI / Detection
- MediaPipe / Custom Face Detection Utilities  

---



## 🧠 How It Works

```text
User Login 
   ↓
Camera Access 
   ↓
Face Expression Detection 
   ↓
Mood Classification 
   ↓
Song Recommendation 
   ↓
Music Playback



## 📂 Folder Structure

```bash
moody-songs/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   │
│   └── public/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── config/
│   │
│   └── server.js
│
└── README.md
