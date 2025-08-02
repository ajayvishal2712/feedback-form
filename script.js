document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("firstname").value.trim();
  const email = document.getElementById("email").value.trim();
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value.trim();

  // Simple validation checks
  if (!name || !email || !rating || !message) {
    alert("❗ Please fill in all fields.");
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("❗ Please enter a valid email address.");
    return;
  }

  // Name validation (at least 3 characters)
  if (name.length < 3) {
    alert("❗ Name should be at least 3 characters long.");
    return;
  }

  // Message length check
  if (message.length < 10) {
    alert("❗ Message should be at least 10 characters long.");
    return;
  }

  // All validations passed
  alert("✅ Feedback validated successfully!");

  // Optional: Clear the form after validation
  document.getElementById("feedbackform").reset();
});
