
document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate-button');
    const resumeOutput = document.getElementById('resume-output');

    generateButton.addEventListener('click', function () {
        const personalInfo = document.getElementById('personal-info').innerHTML;
        const education = document.getElementById('education').innerHTML;
        const experience = document.getElementById('experience').innerHTML;


        const resumeHTML = `
            <h2>Generated Resume</h2>
            <div>${personalInfo}</div>
            <div>${education}</div>
            <div>${experience}</div>
            <!-- Add more sections as needed -->
        `;

        resumeOutput.innerHTML = resumeHTML;
    });
});