const contactForm = document.getElementById('contact_form');
const contactMassage = document.getElementById('contact_message');

const sendEmail = (e) =>{
    e.preventDefault()

    // service id - template id - #form - publickey
    emailjs.sendForm('service_p2eatai','template_hb0py9d','#contact_form','6mAZw3ZXcfSk1dlC3')
    .then(() =>{
        // show sent message
        contactMassage.textContent = 'Message sent successfully ✅'
        // remove message aftar 5 second
        setTimeout(() =>{
            contactMassage.textContent = ''
        },5000)

        // clear input fields
        contactForm.reset()
    }, () => {
        // show error message
        contactMassage.textContent = 'Massage not sent (services error) ❌'
    });
}
contactForm.addEventListener('submit', sendEmail);


// scroll reveal animation
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset: true, // animation repeat
})

sr.reveal(`.home_1, .form_contact`)
sr.reveal(`.home_2`, {origin:'left', delay:800})
sr.reveal(`.home_info`, {origin:'right', delay:1000})
sr.reveal(`.home_skill`, {origin:'left', delay:1200})
sr.reveal(`.project, .certificate`, {interval:100})


