const icons = new Array("./assets/img/icons/eye.svg");

export function viewText(id) {
  let objInput = document.getElementById(id);
  let typeInput = "password";
  let iconsInput = icons[1];
  if (objInput.type == "password") {
    typeInput = "text";
    iconsInput = icons[0];
  } else {
    typeInput = "password";
    iconsInput = icons[1];
  }
  objInput.type = typeInput;
  objInput.nextElementSibling.childNodes[0].src = iconsInput;
}

export function sendData(idForm) {
  let objForm = document.getElementById(idForm);
  return getDataForm(objForm);
}

export function getDataForm(objForm) {
  try {
    var elementsForm = objForm.querySelectorAll('input');
    let arrayPasswords = [];
    let json = {};
    let key;
    let value;
    for (let i = 0; i < elementsForm.length; i++) {
      var elem = elementsForm[i];
      if (elem.value == "" || elem.length == 0) {
        alert("Validate the data entered");
        return false;
      }
      if (elem.dataset.type == "password") {
        if (arrayPasswords.length == 0) {
          arrayPasswords[0] = elem;
        } else {
          arrayPasswords[1] = elem;
        }
        if (arrayPasswords.length == 2) {
          if (!(arrayPasswords[0].value == arrayPasswords[1].value)) {
            alert("Passwords are not valid");
            cleanInputPassword(objForm,arrayPasswords);
            arrayPasswords = [];
            
            return false;
          } else {
            key = arrayPasswords[0].id;
            value = arrayPasswords[0].value;
            arrayPasswords = [];
            json[key] = value;
          }
        } else {
          key = elem.id;
          value = elem.value;
          json[key] = value;
        }
      } else {
        key = elem.id;
        value = elem.value;
        json[key] = value;
      }
    }
    return json;
  } catch (error) {
    console.error(error);
  }
}

export function cleanForm(objForm) {
  objForm.reset();
}

export function cleanInputPassword(objForm,ArrayInputs) {
  for(let input of ArrayInputs){
    input.type="password";
    input.nextElementSibling.childNodes[0].src = icons[1];
  }
  objForm.reset();
}