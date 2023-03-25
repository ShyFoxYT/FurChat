const forms = document.querySelectorAll('form');
forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (form.elements['formType'].value == "login") {
        const identifier = document.loginForm.elements['identifier'].value;
        const logpassword = document.loginForm.elements['logpassword'].value;
        const formType = document.loginForm.elements['formType'].value;
        const remember = document.loginForm.elements['remMe'].value;

        var logxhr = new XMLHttpRequest();

        logxhr.open('POST', 'https://db.furchat.de/include/loginHandler.php', true);

        logxhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        logxhr.onreadystatechange = function () {
          if (logxhr.readyState === 4 && logxhr.status === 200) {
            var logresponse = logxhr.responseText
            console.log(logresponse);
          }
        };

        logxhr.send('identifier=' + identifier + '&password=' + logpassword + '&formType=' + formType);

      }
      if (form.elements['formType'].value == "register"){

        const regusername = document.registerForm.elements['regusername'].value;
        const regpassword = document.registerForm.elements['regpassword'].value;
        const regemail = document.registerForm.elements['regemail'].value;
        const dob = document.registerForm.elements['regdob'].value;
        const passregrep = document.registerForm.elements['passregrep'].value;
        const formType = document.registerForm.elements['formType'].value;

        var regxhr = new XMLHttpRequest();

        regxhr.open('POST', 'https://db.furchat.de/include/loginHandler.php', true);

        regxhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        regxhr.onreadystatechange = function() {
          if (regxhr.readyState === 4 && regxhr.status === 200) {
            var regresponse = regxhr.responseText;
            console.log(regresponse);
          }
        }

        regxhr.send('regusername=' + regusername + '&regpassword=' + regpassword + '&regemail=' + regemail + '&dob=' + dob + '&passregrep=' + passregrep + '&formType=' + formType);

      }

    });
  })