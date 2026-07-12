import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="container">

    <header>
        <h1>AI Cover Letter Generator</h1>
        <p>Create professional cover letters tailored to your job application.</p>
    </header>

    <main>

        <section class="form-section">

            <div class="input-group">
                <label for="candidateName">Candidate Name</label>
                <input
                    type="text"
                    id="candidateName"
                    placeholder="Enter your full name">
            </div>

            <div class="input-group">
                <label for="jobRole">Job Role</label>
                <input
                    type="text"
                    id="jobRole"
                    placeholder="e.g. Frontend Developer">
            </div>

            <div class="input-group">
                <label for="companyName">Target Company</label>
                <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name">
            </div>

            <div class="input-group">
                <label for="skills">Key Skills</label>
                <textarea
                    id="skills"
                    placeholder="HTML, CSS, JavaScript..."
                ></textarea>
            </div>

            <div class="button-group">
                <button id="generateBtn">
                    Generate Cover Letter
                </button>

                <button id="copyBtn">
                    Copy
                </button>
            </div>

        </section>

        <section class="output-section">

            <h2>Generated Cover Letter</h2>

            <div id="coverLetterOutput">
                <p>Your generated cover letter will appear here.</p>
            </div>

        </section>

    </main>

</div>
`;

const candidateName = document.getElementById("candidateName");
const jobRole = document.getElementById("jobRole");
const companyName = document.getElementById("companyName");
const skills = document.getElementById("skills");

const generateBtn = document.getElementById("generateBtn");
const coverLetterOutput = document.getElementById("coverLetterOutput");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {

    const name = candidateName.value.trim();
    const role = jobRole.value.trim();
    const company = companyName.value.trim();
    const skillSet = skills.value.trim();

    if (!name || !role || !company || !skillSet) {
        alert("Please fill in all the fields.");
        return;
    }

    const coverLetter = `Dear Hiring Manager,

I am writing to express my interest in the ${role} position at ${company}.

My name is ${name}, and I have experience with ${skillSet}. I am eager to contribute my skills while continuing to learn and grow as a professional.

Thank you for taking the time to review my application. I look forward to the opportunity to discuss how I can contribute to your team.

Sincerely,

${name}`;

    coverLetterOutput.innerHTML = `
    <p>${coverLetter.replace(/\n/g, "<br><br>")}</p>
     `;

});

copyBtn.addEventListener("click", async () => {

    const coverLetter = coverLetterOutput.innerText.trim();

    if (
        !coverLetter ||
        coverLetter === "Your generated cover letter will appear here."
    ) {
        alert("Generate a cover letter first.");
        return;
    }

    try {

        await navigator.clipboard.writeText(coverLetter);

        copyBtn.textContent = "Copied!";

        setTimeout(() => {

            copyBtn.textContent = "Copy";

        }, 2000);

    } catch (error) {

        alert("Failed to copy the cover letter.");

    }

});