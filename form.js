let currentStep = 0;
const steps = document.getElementsByClassName("step");

function showStep(stepIndex) {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("active");
  }
  steps[stepIndex].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
      currentStep++;
showStep(currentStep);
}
}

function previousStep() {
if (currentStep > 0) {
currentStep--;
showStep(currentStep);
}
}

function submitForm() {
const form = document.getElementById("myForm");
const formData = new FormData(form);
const formValues = Object.fromEntries(formData.entries());
console.log(formValues);
// Aquí puedes hacer lo que desees con los datos del formulario, como enviarlos al servidor
}