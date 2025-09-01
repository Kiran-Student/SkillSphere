// Simple interactivity for portfolio

// Popup on submit
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.id = "submitBtn";
  
  // Append to main
  document.querySelector("main").appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    alert("✅ Thanks for visiting my portfolio!");
  });
});

// Highlight input fields when typing
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#64ffda";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#ccc";
  });
});
