const formRef = document.querySelector('.feedback-form');

initForm();

formRef.addEventListener('submit', evt => {
    evt.preventDefault();
    const formData = new FormData(formRef);
    formData.forEach((email, message) => console.log(email, message));
});

formRef.addEventListener('change', evt => {
    let enteredData = localStorage.getItem('feedback-form-state');
    enteredData = enteredData ? JSON.parse(enteredData) : {};
    enteredData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(enteredData));
});

formRef.addEventListener('submit', evt => {
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


