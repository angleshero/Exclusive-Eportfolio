function contact(event) {

    event.preventDefault();



    const loading = document.querySelector(".modal__overlay--loading");

    const success = document.querySelector(".modal__overlay--success");



    // Show loading

    loading.classList.add("modal__overlay--visible");



    emailjs

      .sendForm(

        "service_oomf36u", 

        "template_trn1jkn",

        event.target,       

        "I2MhMNPK4zmqBk9ul"  

      )

      .then((response) => {

        console.log("SUCCESS!", response.status, response.text);

        loading.classList.remove("modal__overlay--visible");

        success.classList.add("modal__overlay--visible");

      })

      .catch((error) => {

        console.error("FAILED...", error);

        loading.classList.remove("modal__overlay--visible");

        alert(

          "The email service is temporarily unavailable. Please contact me directly on tommylcowart@gmail.com"

        );

      });

  }


  let isModalOpen = false;
    function toggleModal() {
      if (isModalOpen) {
        return  document.body.classList.remove("modal--open");
      }
      isModalOpen = true;
    document.body.classList += " modal--open";
  }