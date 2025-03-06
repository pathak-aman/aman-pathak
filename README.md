# Aman Pathak - Portfolio

Welcome to my personal portfolio website, showcasing my work, skills, and experience as a Machine Learning Engineer. This portfolio is built using React and deployed on GitHub Pages.

## 🚀 Live Demo
Check out my portfolio live at: [GitHub Pages Link](https://pathak-aman.github.io/)

## 📌 Features
- **Splash Screen Animation** - Dynamic introduction animation.
- **Personalized Greeting Section** - Overview of my experience and expertise.
- **Skills Section** - Showcasing my proficiency in NLP, ML, MLOps, and Full-Stack AI solutions.
- **Education & Work Experience** - Highlights of my academic and professional journey.
- **Social Media Links** - Connect with me on LinkedIn, GitHub, and Kaggle.
- **Projects & Open Source Contributions** - Featured projects and GitHub repositories.

## 🛠️ Technologies Used
- **Frontend:** React, SCSS
- **Animations:** Lottie
- **Backend (for APIs, if needed):** Flask
- **Deployment:** GitHub Pages

## 📂 Project Structure
```
portfolio
│── src
│   ├── assets (Images, Icons, Animations)
│   ├── components (UI Components)
│   ├── containers (Sections like About, Skills, etc.)
│   ├── data (Configuration files)
│   ├── App.js (Main Component)
│   ├── index.js (Entry Point)
│── public
│── _globalColor.scss (Global Theme Colors)
│── package.json
│── README.md
```

## 🎯 How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/pathak-aman/portfolio.git
   ```
2. Navigate into the directory:
   ```sh
   cd portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000` in your browser.

## 🚀 Deployment on GitHub Pages
To deploy your portfolio on GitHub Pages:
1. Install `gh-pages` package:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add deployment scripts in `package.json`:
   ```json
   "homepage": "https://your-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy the project:
   ```sh
   npm run deploy
   ```
4. Your portfolio will be live at `https://your-username.github.io/portfolio`.

## 📬 Connect with Me
- **GitHub:** [pathak-aman](https://github.com/pathak-aman)
- **LinkedIn:** [Aman Pathak](https://www.linkedin.com/in/amanpathak2997/)
- **Email:** pathakaman2909@gmail.com

Inspired by https://github.com/saadpasta/developerFolio.git
Feel free to fork, modify, and use this portfolio template for your own projects! 😊