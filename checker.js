function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("password").value = password;
    checkStrength(password);
}

function checkStrength(password) {
    let strengthText = "";
    let strengthColor = "red";

    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) &&
        /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strengthText = "Strong Password 💪";
        strengthColor = "green";
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
        strengthText = "Moderate Password ⚠️";
        strengthColor = "orange";
    } else {
        strengthText = "Weak Password ❌";
    }

    const strengthElement = document.getElementById("strength");
    strengthElement.textContent = strengthText;
    strengthElement.style.color = strengthColor;
}

// Listen for manual password input
document.getElementById("password").addEventListener("input", function () {
    checkStrength(this.value);
});