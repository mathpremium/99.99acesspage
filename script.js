// The password using a combination of special characters, numbers, and mixed case
const correctPassword = "M4th3m@t1cs2024!";

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '😑';  // Closed eye
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';  // Open eye
    }
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMessage');
    
    if (input === correctPassword) {
        // Redirect to the main website
        window.location.href = 'https://mathpremium.github.io/mathpremium-/';
    } else {
        errorMsg.style.display = 'block';
        // Clear the input field
        document.getElementById('passwordInput').value = '';
    }
}

// Allow form submission with Enter key
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
