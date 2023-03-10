const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    switch (form.elements['form-type'].value) {
      case 'login':

        const identifier = loginForm.elements['identifier'].value;
        const passwordlog = loginForm.elements['password'].value;
        const remember = loginForm.elements['remember'].value;

        fetch('https://db.furchat.de/include/register.php', {
          method: 'POST',
          body: new URLSearchParams({
            identifier: identifier,
            password: passwordlog
          })
        })

          .then(response => response.text())
          .then(data => {
            if (data === 'success') {
              // User logged in successfully
            } else if (data === 'invalid') {
              // Invalid credentials, show error message to user
            }
          })
          .catch(error => {
            console.error(error);
          });


        break;
      case 'register':

        const username = registerForm.elements['usernamereg'].value;
        const password = registerForm.elements['passwordreg'].value;
        const email = registerForm.elements['emailreg'].value;
        const age = registerForm.elements['age'].value;
        const passregrep = form.elements['passregrep'].value;

        fetch('https://db.furchat.de/include/register.php', {
          method: 'POST',
          body: new URLSearchParams({
            username: username,
            password: password,
            email: email,
            age: age,
            passregrep: passregrep,
          })
        })

          .then(response => response.text())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });

        break;
      case 'passres':

        break;
      default:
        console.error('Formtype not found.')
    }

  })

})
