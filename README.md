🌦️ Real-Time Weather Dashboard
===============================

A full-stack weather dashboard built using the **MERN** stack (MongoDB, Express.js, React, Node.js) for the **Afford Medical Online Coding Contest**.

🚀 Features
-----------

*   🔍 Search any city to get current weather
    
*   🌡️ Displays temperature, humidity, wind speed, and weather condition
    
*   📦 Backend API built with Express.js using OpenWeatherMap API
    
*   ⚛️ Frontend built with React and Axios
    
*   🎯 Real-time data with loading and error states
    
*   📱 Responsive and clean UI
    

🧩 Tech Stack
-------------

*   **Frontend**: React, Axios
    
*   **Backend**: Node.js, Express, Axios, dotenv
    
*   **API**: [OpenWeatherMap](https://openweathermap.org/)
    
*   **Optional Deployment**: Vercel (frontend) + Render/Heroku (backend)
    

📁 Folder Structure
-------------------

``` plane txt
weather-dashboard/
├── client/ # React frontend
│ └── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ └── WeatherCard.jsx
│ ├── App.css
│ ├── App.js
│ └── index.js
│ └── package.json
├── server/ # Express backend
│ ├── routes/
│ │ └── weather.js
│ ├── server.js
│ ├── .env
│ └── package.json
├── .gitignore
└── README.md

```

🛠️ Setup Instructions
----------------------

### 🔙 Backend Setup

1.  Navigate to the server/ folder
    
2.  Install dependencies using npm install
    
3.  Create a .env file with your OpenWeatherMap API key
    
4.  Run the server using node server.js
    

### 🎨 Frontend Setup

1.  Navigate to the client/ folder
    
2.  Run npm install to install dependencies
    
3.  Start the app with npm start
    

🧪 Testing
----------

*   Enter valid and invalid city names
    
*   Check for proper loading and error messages
    
*   Confirm correct weather info is displayed
    

