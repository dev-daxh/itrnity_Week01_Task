Certainly! Here's an expanded version with more detailed information about each task:

---

## Project Overview

The registration form will collect the following essential student details:

- **Name** (Full Name of the student)
- **Email** (Student's email address)
- **Phone Number** (Student's contact number)
- **Course Selection** (Choose a course from a predefined list)
- **Gender** (Select from Male, Female, or Other)
- **Address** (Full residential address)

Each contributor has a task to implement one feature of the form. After completing the task, please raise a pull request (PR) so your changes can be reviewed and merged into the main branch.

---

## Task Assignments

Here’s a detailed description of each task to help guide your work:

### 1. **Rachit**: Create an Input Field for **Name**
   - **Objective**: Implement an input field where the user can type in their full name.
   - **Task Breakdown**:
     - Add an `<input>` tag of type `text` to collect the name.
     - The field should have a label associated with it (e.g., "Full Name").
     - Make sure the input is properly aligned and styled.

---

### 2. **Yamini**: Create an Input Field for **Email**
   - **Objective**: Implement an email input field.
   - **Task Breakdown**:
     - Use an `<input>` tag of type `email` for email validation.
     - Add a corresponding label, e.g., "Email Address".
     - Ensure the input allows the user to type a valid email (use HTML5's built-in email validation).

---

### 3. **Aman**: Create an Input Field for **Phone Number**
   - **Objective**: Implement an input field to collect the student's phone number.
   - **Task Breakdown**:
     - Use an `<input>` tag of type `tel` for phone number input.
     - Add a corresponding label, e.g., "Phone Number".
     - Consider using a pattern attribute to validate the phone number format (e.g., "xxx-xxx-xxxx").

---

### 4. **Tejas**: Create a Dropdown or Input for **Course Selection**
   - **Objective**: Implement a dropdown or radio buttons for selecting the course the student wants to register for.
   - **Task Breakdown**:
     - Use a `<select>` dropdown with a list of course options or radio buttons for each course.
     - Label the selection as "Select Course".
     - Make sure that the options are meaningful and relevant (e.g., "Computer Science", "Mathematics").

---

### 5. **Sujal**: Create Radio Buttons for **Gender** Selection
   - **Objective**: Implement gender selection using radio buttons.
   - **Task Breakdown**:
     - Use `<input type="radio">` for "Male", "Female", and "Other" options.
     - Label each radio button appropriately (e.g., "Male", "Female", "Other").
     - Group the radio buttons under a common `name` attribute so only one can be selected.

---

### 6. **Shreyash**: Create a Textarea for **Address**
   - **Objective**: Implement a textarea field to collect the student's address.
   - **Task Breakdown**:
     - Use a `<textarea>` tag for the address input.
     - Label the field as "Address".
     - Ensure the field is large enough to accommodate a typical address.

---

### 7. **Somya**: Add a **Submit Button** to the Form
   - **Objective**: Add a button that will submit the registration form.
   - **Task Breakdown**:
     - Add a `<button>` element with the type `submit`.
     - Ensure the button has a meaningful label (e.g., "Submit" or "Register").
     - Ensure the button is styled to fit with the rest of the form.

---

### 8. **Nandani**: Implement **Form Validation** for Required Fields
   - **Objective**: Ensure that all required fields are validated before submission.
   - **Task Breakdown**:
     - Use the `required` attribute on essential input fields.
     - Provide user-friendly validation messages for each field.
     - Implement logic to check if the fields are filled out correctly before submission.

---

### 9. **Shruti**: Style the Form with **CSS**
   - **Objective**: Style the registration form to make it visually appealing and user-friendly.
   - **Task Breakdown**:
     - Use CSS to add padding, margins, and font styling.
     - Style form elements like input fields, buttons, and labels for a clean and modern look.
     - Ensure the form is responsive and adjusts to different screen sizes.

---

### 10. **Daksh**: Implement **Form Submission Logic** Using JavaScript
   - **Objective**: Add functionality to handle form submission using JavaScript.
   - **Task Breakdown**:
     - Implement a function to capture the form data when the user clicks "Submit".
     - Prevent the default form submission behavior and instead display the submitted data in a user-friendly way (e.g., an alert or a success message).
     - Optionally, store the form data (like in localStorage or display it dynamically on the page).

### 11. **Vaishnavi**: Implement **Form Reset Functionality**
   - **Objective**: Add a functionality to reset the form fields back to their default values.
   - **Task Breakdown**:
     - Implement a button or link to reset all form fields.
     - The button should be clearly labeled (e.g., "Reset Form").
     - Ensure that all fields (text inputs, radio buttons, dropdown, etc.) are reset to their initial state when clicked.
     - Make sure that the reset button doesn’t submit the form, but only clears the input fields.

---

## Getting Started

### 1. Fork the Repository

To start working on your task, you need to fork this repository to your own GitHub account.

- Go to the repository’s GitHub page.
- Click the **Fork** button (top-right of the page) to fork the repository into your account.

### 2. Clone the Repository to Your Local Machine

After forking the repository, clone it to your local machine to start working on your task.

```bash
# Clone the repository
git clone https://github.com/<your-username>/student-registration-form.git

# Navigate to the project folder
cd student-registration-form
```

### 3. Create a New Branch for Your Task

Before making any changes, create a new branch for your specific task.

```bash
# Create a new branch for your task (replace <task-name> with your assigned task)
git checkout -b <task-name>
```

### 4. Implement Your Task

- Work on the task assigned to you.
- Make sure your code is clean, well-commented, and adheres to the project's coding standards.

### 5. Commit Your Changes

Once you’ve completed your task, commit the changes to your branch:

```bash
git add .
git commit -m "Added feature for <task-name>"
```

### 6. Push Your Changes to GitHub

Push your changes to your forked repository:

```bash
git push origin <task-name>
```

### 7. Create a Pull Request

- Go to your forked repository on GitHub.
- Create a pull request (PR) from your task branch to the main repository’s main branch.
- Provide a brief description of what changes you made and reference any issues if applicable.

---

