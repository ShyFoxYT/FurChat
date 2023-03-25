const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    switch (form.elements['form-type'].value) {
      case 'login':

        const identifier = loginForm.elements['identifier'].value;
        const passwordlog = loginForm.elements['password'].value;
        const remember = loginForm.elements['remember'].value;

        fetch('https://db.furchat.de/include/login.php', {
          method: 'POST',
          body: new URLSearchParams({
            identifier: identifier,
            password: passwordlog
          })
        })

          .then(response => response.text())
          .then(data => {
            if (data === 'success') {

            } else if (data === 'invalid') {

            }
          })
          .catch(error => {
            console.error(error);
          });


        break;
      case 'register':

        const username = registerForm.elements['unamereg'].value;
        const password = registerForm.elements['passreg'].value;
        const email = registerForm.elements['emailreg'].value;
        const age = registerForm.elements['agereg'].value;
        const passregrep = form.elements['passregrep'].value;

        var xhr = new XMLHttpRequest();

        xhr.open('POST', 'https://db.furchat.de/include/register.php', true);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);
          }
        };

        xhr.send('username=' + username + '&password=' + password + '&email=' + email + '&age=' + age + '&passregrep=' + passregrep);


        break;
      case 'passres':

        break;
      default:
        console.error('Formtype not found.')
    }

  })

})
