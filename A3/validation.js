// validation.js - External JavaScript for Form Validation

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get form and input elements using different DOM access methods
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const messageBox = document.getElementById('messageBox');

    // Get all error spans by ID
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Form submission event listener
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous validations
        clearErrors();
        
        // Validate all fields
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        
        // Check if all validations passed
        if (isUsernameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            showMessage('Registration successful! All validations passed.', 'success');
            // You can submit the form here or send data to server
            setTimeout(() => {
                form.reset();
                clearErrors();
                messageBox.style.display = 'none';
            }, 3000);
        } else {
            showMessage('Please fix all errors before submitting.', 'error');
        }
    });

    // Real-time validation on input
    username.addEventListener('blur', validateUsername);
    email.addEventListener('blur', validateEmail);
    phone.addEventListener('blur', validatePhone);
    phone.addEventListener('input', enforceNumericPhone);
    password.addEventListener('blur', validatePassword);
    confirmPassword.addEventListener('blur', validateConfirmPassword);

    // Validation Functions

    function validateUsername() {
        const value = username.value;
        
        // Check if empty or only contains spaces
        if (value.trim() === '') {
            setError(username, usernameError, 'Username cannot be empty or contain only spaces');
            return false;
        }
        
        if (value.length < 3) {
            setError(username, usernameError, 'Username must be at least 3 characters long');
            return false;
        }
        
        setSuccess(username, usernameError);
        return true;
    }

    function validateEmail() {
        const value = email.value;
        
        // Check if empty or only contains spaces
        if (value.trim() === '') {
            setError(email, emailError, 'Email cannot be empty or contain only spaces');
            return false;
        }
        
        // Regular expression for email validation
        // Pattern: text (letters/numbers/dots before @), exactly 3 letters between @ and ., exactly 2 or 3 letters after .
        // Breaking down: ^[a-zA-Z0-9._-]+ = one or more letters, numbers, dots, underscores, hyphens before @
        //                @ = must have @ symbol
        //                [a-zA-Z]{3} = exactly 3 letters (no numbers or special chars)
        //                \. = must have a dot
        //                [a-zA-Z]{2,3}$ = exactly 2 or 3 letters at the end
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
        
        if (!emailRegex.test(value)) {
            setError(email, emailError, 'Email format: text@xxx.xx or text@xxx.xxx (exactly 3 letters between @ and ., 2-3 letters after .)');
            return false;
        }
        
        setSuccess(email, emailError);
        return true;
    }

    function validatePhone() {
        const value = phone.value;
        
        // Check if empty or only contains spaces
        if (value.trim() === '') {
            setError(phone, phoneError, 'Phone number cannot be empty');
            return false;
        }
        
        // Regular expression for exactly 10 digits
        const phoneRegex = /^\d{10}$/;
        
        if (!phoneRegex.test(value)) {
            setError(phone, phoneError, 'Phone number must be exactly 10 digits');
            return false;
        }
        
        setSuccess(phone, phoneError);
        return true;
    }

    function validatePassword() {
        const value = password.value;
        
        // Check if empty or only contains spaces
        if (value.trim() === '') {
            setError(password, passwordError, 'Password cannot be empty or contain only spaces');
            return false;
        }
        
        // Check minimum length of 7
        if (value.length < 7) {
            setError(password, passwordError, 'Password must be at least 7 characters long');
            return false;
        }
        
        // Regular expression for password validation
        // Must contain: at least one capital letter, one digit, one special character from (&,$,#,@)
        const hasCapital = /[A-Z]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasSpecial = /[&$#@]/.test(value);
        
        if (!hasCapital) {
            setError(password, passwordError, 'Password must contain at least one capital letter');
            return false;
        }
        
        if (!hasDigit) {
            setError(password, passwordError, 'Password must contain at least one digit');
            return false;
        }
        
        if (!hasSpecial) {
            setError(password, passwordError, 'Password must contain at least one special character (&, $, #, @)');
            return false;
        }
        
        setSuccess(password, passwordError);
        return true;
    }

    function validateConfirmPassword() {
        const value = confirmPassword.value;
        const passwordValue = password.value;
        
        // Check if empty or only contains spaces
        if (value.trim() === '') {
            setError(confirmPassword, confirmPasswordError, 'Please confirm your password');
            return false;
        }
        
        // Check if passwords match
        if (value !== passwordValue) {
            setError(confirmPassword, confirmPasswordError, 'Passwords do not match');
            return false;
        }
        
        setSuccess(confirmPassword, confirmPasswordError);
        return true;
    }

    // Enforce numeric input only for phone
    function enforceNumericPhone(e) {
        const value = e.target.value;
        // Remove any non-numeric characters
        e.target.value = value.replace(/\D/g, '');
    }

    // Helper function to set error state
    function setError(input, errorElement, message) {
        input.classList.add('error-input');
        input.classList.remove('success-input');
        errorElement.textContent = message;
    }

    // Helper function to set success state
    function setSuccess(input, errorElement) {
        input.classList.remove('error-input');
        input.classList.add('success-input');
        errorElement.textContent = '';
    }

    // Clear all errors
    function clearErrors() {
        const inputs = form.getElementsByClassName('form-control');
        const errors = form.getElementsByClassName('error');
        
        for (let input of inputs) {
            input.classList.remove('error-input', 'success-input');
        }
        
        for (let error of errors) {
            error.textContent = '';
        }
    }

    // Show message to user
    function showMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = 'message-box ' + type;
        messageBox.style.display = 'block';
    }

    // Reset button functionality
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        clearErrors();
        messageBox.style.display = 'none';
    });
});
