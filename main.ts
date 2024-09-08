// Function to toggle visibility of a section
function toggleVisibility(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Function to handle profile picture upload
function uploadProfilePicture(): void {
    const input = document.getElementById("profilePictureInput") as HTMLInputElement;
    const displayPicture = document.getElementById("displayPicture") as HTMLImageElement;

    if (input && displayPicture && input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                displayPicture.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}


// Hide the chosen file text by setting the input display to none
document.getElementById('profilePictureInput')?.setAttribute('style', 'display: none;');
// Function to update resume content based on form inputs
function updateResume(): void {
    const name = (document.getElementById("nameInput") as HTMLInputElement).value;
    const title = (document.getElementById("titleInput") as HTMLInputElement).value;
    const about = (document.getElementById("aboutInput") as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById("workExperienceInput") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projectsInput") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skillsInput") as HTMLTextAreaElement).value;
    const education = (document.getElementById("educationInput") as HTMLTextAreaElement).value;
    const hobbiesLanguages = (document.getElementById("hobbiesLanguagesInput") as HTMLTextAreaElement).value;
    const expertise = (document.getElementById("expertiseInput") as HTMLTextAreaElement).value;
    const email = (document.getElementById("emailInput") as HTMLInputElement).value;
    const contactNumber = (document.getElementById("contactNumberInput") as HTMLInputElement).value;

    (document.getElementById('name') as HTMLHeadingElement).textContent = name;
    (document.getElementById('title') as HTMLParagraphElement).textContent = title;
    (document.getElementById('resume-about') as HTMLParagraphElement).textContent = about;
    (document.getElementById('resume-work-experience') as HTMLParagraphElement).textContent = workExperience;
    (document.getElementById('resume-projects') as HTMLParagraphElement).textContent = projects;
    (document.getElementById('resume-skills') as HTMLParagraphElement).textContent = skills;
    (document.getElementById('resume-education') as HTMLParagraphElement).textContent = education;
    (document.getElementById('resume-hobbies-languages') as HTMLParagraphElement).textContent = hobbiesLanguages;
    (document.getElementById('resume-expertise') as HTMLParagraphElement).textContent = expertise;
    (document.getElementById('resume-email') as HTMLParagraphElement).innerHTML = `Email: ${email}`;
    (document.getElementById('resume-phone') as HTMLParagraphElement).innerHTML = `Phone: ${contactNumber}`;
}


// Adding event listeners to form elements
document.addEventListener("DOMContentLoaded", () => {
    const formElements = document.querySelectorAll('#resume-form input, #resume-form textarea');
    formElements.forEach(element => {
        element.addEventListener('input', updateResume);
    });

    const profilePictureInput = document.getElementById('profilePictureInput') as HTMLInputElement;
    profilePictureInput?.addEventListener('change', uploadProfilePicture);

    const skillsButton = document.querySelector("button[onclick*='toggleVisibility(\"resume-skills\")']");
    const expertiseButton = document.querySelector("button[onclick*='toggleVisibility(\"resume-expertise\")']");

    skillsButton?.addEventListener("click", () => toggleVisibility("resume-skills"));
    expertiseButton?.addEventListener("click", () => toggleVisibility("resume-expertise"));
});