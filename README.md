AI Cover Letter Generator

Overview

AI Cover Letter Generator is a web application designed to help users create professional and ATS-friendly cover letters based on their personal information, target job role, company, and key skills. The project integrates Google's Gemini AI to generate personalized cover letter content through a simple and responsive user interface.

---

Features

- Generate personalized cover letters using AI
- ATS-friendly cover letter format
- Simple and responsive user interface
- Input fields for candidate details, job role, company, and skills
- Copy generated content to the clipboard
- Download generated cover letter
- Secure API key management using environment variables

---

Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Vite

AI Integration

- Google Gemini API
- Gemini 2.5 Flash
- @google/genai SDK

---

Project Structure

AI-Cover-Letter-Generator/
│
├── public/
│
├── src/
│   ├── gemini.js
│   ├── main.js
│   ├── style.css
│   └── ...
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

---

Working

1. Enter candidate details.
2. Provide the target job role and company name.
3. Add relevant skills.
4. Click Generate Cover Letter.
5. The application sends the prompt to the Gemini AI model.
6. The generated cover letter is displayed for the user.

---

Future Scope

- Support for multiple cover letter templates
- Resume upload and analysis
- PDF export functionality
- User authentication
- Cover letter history
- Dark mode support

---

Author

Shreya Pandey

---
