// Funkcja sprawdzająca poprawność wprowadzonych danych w polu input
function validateInput(inputElement, labelElement) {
  var inputValue = inputElement.value;

  if (inputElement.checkValidity()) {
    labelElement.classList.remove('error');
    labelElement.classList.add('correct');
  } else {
    labelElement.classList.remove('correct');
    labelElement.classList.add('error');
  }
}

// Pobranie elementów label i input z pierwszego okna modalnego
var nameLabel = document.getElementById('nameLabel');
var nameInput = document.getElementById('user_name');

nameInput.addEventListener('input', function () {
  validateInput(nameInput, nameLabel);
});
var emailLabel = document.getElementById('emailLabel');
var emailInput = document.getElementById('user_email');

emailInput.addEventListener('input', function () {
  validateInput(emailInput, emailLabel);
});

// Pobranie elementów label i input z drugiego okna modalnego
var emailLabelModal1 = document.getElementById('emailLabelModal1');
var emailInputModal1 = document.getElementById('user_emailModal1');

emailInputModal1.addEventListener('input', function () {
  validateInput(emailInputModal1, emailLabelModal1);
});
