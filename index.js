// template_trn1jkn
// service_oomf36u
//I2MhMNPK4zmqBk9ul

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
      const success = document.querySelector('.modal__overlay--sucess')
    emailjs
       .sendForm(
             'service_00mf36u',
             'template_trn1jkn',
              event.target,
              'I2MhMNPK4zmqBk9ul'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
            
       }).catch(() => {
        loading.classList.remove("modal__overflow--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on tommylcowart@gmail.com"
        );
       })
      
          }