var _a;
// Function to toggle visibility of a section
function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
// Function to handle profile picture upload
function uploadProfilePicture() {
    var input = document.getElementById("profilePictureInput");
    var displayPicture = document.getElementById("displayPicture");
    if (input && displayPicture && input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && e.target.result) {
                displayPicture.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Hide the chosen file text by setting the input display to none
(_a = document.getElementById('profilePictureInput')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'display: none;');
// Function to update resume content based on form inputs
function updateResume() {
    var name = document.getElementById("nameInput").value;
    var title = document.getElementById("titleInput").value;
    var about = document.getElementById("aboutInput").value;
    var workExperience = document.getElementById("workExperienceInput").value;
    var projects = document.getElementById("projectsInput").value;
    var skills = document.getElementById("skillsInput").value;
    var education = document.getElementById("educationInput").value;
    var hobbiesLanguages = document.getElementById("hobbiesLanguagesInput").value;
    var expertise = document.getElementById("expertiseInput").value;
    var email = document.getElementById("emailInput").value;
    var contactNumber = document.getElementById("contactNumberInput").value;
    document.getElementById('name').textContent = name;
    document.getElementById('title').textContent = title;
    document.getElementById('resume-about').textContent = about;
    document.getElementById('resume-work-experience').textContent = workExperience;
    document.getElementById('resume-projects').textContent = projects;
    document.getElementById('resume-skills').textContent = skills;
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-hobbies-languages').textContent = hobbiesLanguages;
    document.getElementById('resume-expertise').textContent = expertise;
    document.getElementById('resume-email').innerHTML = "Email: ".concat(email);
    document.getElementById('resume-phone').innerHTML = "Phone: ".concat(contactNumber);
}
// Adding event listeners to form elements
document.addEventListener("DOMContentLoaded", function () {
    var formElements = document.querySelectorAll('#resume-form input, #resume-form textarea');
    formElements.forEach(function (element) {
        element.addEventListener('input', updateResume);
    });
    var profilePictureInput = document.getElementById('profilePictureInput');
    profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.addEventListener('change', uploadProfilePicture);
    var skillsButton = document.querySelector("button[onclick*='toggleVisibility(\"resume-skills\")']");
    var expertiseButton = document.querySelector("button[onclick*='toggleVisibility(\"resume-expertise\")']");
    skillsButton === null || skillsButton === void 0 ? void 0 : skillsButton.addEventListener("click", function () { return toggleVisibility("resume-skills"); });
    expertiseButton === null || expertiseButton === void 0 ? void 0 : expertiseButton.addEventListener("click", function () { return toggleVisibility("resume-expertise"); });
});
