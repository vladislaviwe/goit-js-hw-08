import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

initForm();


formRef.addEventListener('input', throttle((evt) => {
    let enteredData = localStorage.getItem('feedback-form-state');
    enteredData = enteredData ? JSON.parse(enteredData) : {};
    enteredData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(enteredData));
}, 500));

formRef.addEventListener('submit', evt => {
    evt.preventDefault();

    if (localStorage.getItem('feedback-form-state')) {
        console.log(localStorage.getItem('feedback-form-state'));
    };

    formRef.reset();
    localStorage.removeItem('feedback-form-state');
});

function initForm() {
    let enteredDataFromLocalStorage = localStorage.getItem('feedback-form-state');
    if (enteredDataFromLocalStorage) {
        enteredDataFromLocalStorage = JSON.parse(enteredDataFromLocalStorage);
        Object.entries(enteredDataFromLocalStorage).forEach(([name, value]) => {
            formRef.elements[name].value = value;    
        }); 
    };
};


