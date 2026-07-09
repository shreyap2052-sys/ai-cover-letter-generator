import './style.css'


document.querySelector('#app').innerHTML = `
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
            placeholder="Enter your full name"
          >
        </div>

        <div class="input-group">
          <label for="jobRole">Job Role</label>
          <input
            type="text"
            id="jobRole"
            placeholder="e.g. Frontend Developer"
          >
        </div>

        <div class="input-group">
          <label for="companyName">Target Company</label>
          <input
            type="text"
            id="companyName"
            placeholder="Enter company name"
          >
        </div>

        <div class="input-group">
          <label for="skills">Key Skills</label>
          <textarea
            id="skills"
            rows="5"
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
          Your generated cover letter will appear here.
        </div>

      </section>

    </main>

  </div>



`;


