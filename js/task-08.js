const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSub)

function onFormSub(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value; 

    if (email === '' || password === '') {
     return   alert( 'Всі поля повинні бути заповнені')
    };

    const formData = {
        email,
        password
    };
    console.log(formData);

    form.reset();
}