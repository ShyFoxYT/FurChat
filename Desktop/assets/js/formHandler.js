const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    switch (formType) {
      case 'login':


        break;
      case 'register':

        const username = registerForm.elements['usernamereg'].value;
        const password = registerForm.elements['passwordreg'].value;
        const email = registerForm.elements['emailreg'].value;
        const age = registerForm.elements['age'].value;
        const formType = registerForm.elements['form-type'].value
        const passregrep = form.elements['passregrep'].value;

        fetch('/assets/include/register.php', {
          method: 'POST',
          body: new URLSearchParams({
            username: username,
            password: password,
            email: email,
            age: age,
            passregrep: passregrep,
            formType:formType
          })
        })

          .then(response => response.text())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          })

        break;
      case 'passres':

        break;
      default:
        console.error('Formtype not found.')
    }

  })

})