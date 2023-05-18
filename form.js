        // Obtener elementos de la lista de pasos
        const stepList = document.querySelectorAll('.step-list .step-item');

        // Variables globales
        let currentStep = 0;
        const steps = document.getElementsByClassName("step");

        // Función para mostrar un paso específico
        function showStep(stepIndex) {
          for (let i = 0; i < steps.length; i++) {
            steps[i].classList.remove("active");
          }
          steps[stepIndex].classList.add("active");

          // Activar el elemento correspondiente de la lista de pasos
          for (let i = 0; i < stepList.length; i++) {
            stepList[i].classList.remove("active");
          }
          stepList[stepIndex].classList.add("active");
        }

        // Función para cambiar al siguiente paso
        function nextStep() {
          if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
          }
        }

        // Función para cambiar al paso anterior
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

function showPaymentDetails() {
      const metodoPago = document.getElementById("metodoPago");
      const detalleMetodoPago = document.getElementById("detalleMetodoPago");
      
      if (metodoPago.value === "tarjeta") {
        detalleMetodoPago.style.display = "block";
      } else {
        detalleMetodoPago.style.display = "none";
      }
    }
    
    // Agrega un evento al cambio de selección del método de pago
    const metodoPagoSelect = document.getElementById("metodoPago");
    metodoPagoSelect.addEventListener("change", showPaymentDetails);
    