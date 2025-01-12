// Form validation function
function validateForm() {
    let valid = true; // Flag to track form validity

    // Validate Full Name
    let name = document.getElementById('name').value;
    if (name === '') {
        alert('Name is required.'); // Show alert if name is empty
        valid = false;
    }

    // Validate Email
    let email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.'); // Show alert for invalid email
        valid = false;
    }

    // Validate Phone Number
    let phone = document.getElementById('phone').value;
    if (phone === '') {
        alert('Phone number is required.'); // Show alert if phone is empty
        valid = false;
    }

    // Validate Course Selection
    let course = document.getElementById('course-dropdown').value;
    if (course === '') {
        alert('Please select a course.'); // Show alert if no course is selected
        valid = false;
    }

    // Validate Gender Selection
    let gender = document.getElementById('gender').value;
    if (gender === '') {
        alert('Please select gender.'); // Show alert if gender is not selected
        valid = false;
    }

    // Validate Address
    let address = document.getElementById('address').value;
    if (address === '') {
        alert('Address is required.'); // Show alert if address is empty
        valid = false;
    }

    return valid; // If validation fails, return false to prevent form submission
}
