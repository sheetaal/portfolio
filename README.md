# Sheetal Sinha Portfolio

A modern, professional, and responsive personal portfolio website for Sheetal Sinha.

## Features
- Sticky navbar with smooth scroll and section highlighting
- Hero, Skills, Experience, Projects, Resume, and Contact sections
- Fully responsive, clean Tailwind CSS design
- Contact form posts to backend API (Express.js)
- Accessible, semantic HTML

## Tech Stack
- Frontend: HTML, Tailwind CSS, JavaScript
- Backend: Node.js, Express.js, Nodemailer (for contact form email)

## Getting Started

### 1. Clone the repository
```
git clone <repo-url>
cd Sheetal-Portfolio
```

### 2. Install backend dependencies
```
npm install
```

### 3. Configure SMTP for Nodemailer
Edit `server.js` and replace the SMTP config with your real credentials:
```js
let transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your@email.com',
    pass: 'yourpassword',
  },
});
```

### 4. Add your resume PDF
Place your resume file as `Sheetal_Sinha_Resume_For_MIT_Manipal.pdf` in the project root.

### 5. Run the server
```
npm start
```
The site will be available at [http://localhost:3000](http://localhost:3000)

## Contact
For any issues, contact Sheetal at [sheetal.mitblr2022@learner.manipal.edu](mailto:sheetal.mitblr2022@learner.manipal.edu) 