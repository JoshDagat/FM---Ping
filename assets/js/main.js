const form = document.querySelector('.form');
const errorMsg = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
    const emailValue = document.querySelector('#email');

    e.preventDefault();

    if(emailValue.value === '' || emailValue.value == null) {
        errorMsg.textContent = "Whoops! It looks like you forgot to add your email.";
        showError();
        console.log(errorMsg.textContent);
    } else if (!checkEmail(emailValue.value)){
        errorMsg.textContent = "Please provide a valid email address."
        showError();
        console.log(errorMsg.textContent);
    } else {
        console.log("Submitted")
        removeError();
        document.email.submit();
    }


    function checkEmail(input){
        let regexMail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return regexMail.test(input)
    }

    function showError(){
        form.classList = "form error"
    }

    function removeError(){
        form.classList = "form"
    }
});