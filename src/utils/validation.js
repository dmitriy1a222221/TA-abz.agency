export const validationLogic = () => {
    const form = document.querySelector('contact-form'),
        formElement = document.querySelectorAll('[data-id]');

    let types = {
        'name': /^[_a-zA-Z0-9а-яА-ЯёЁ ]+$/,
        'email': /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
        'phoneNumber': /[\+]{0,1}380([0-9]{9})$/
    };

    //wale all inputs
    formElement.forEach(item => {
        //get outside container of input
        let parentOfItem = item.parentNode.parentNode;

        item.addEventListener('focus', () => {
            parentOfItem.classList.add('text-field-block_active');
            let regEx;

            //check equality rexExp with input data
            const valid = () => {
                if(!(regEx.test(item.value))){
                    parentOfItem.classList.add('text-field-block_error');
                } else {
                    parentOfItem.classList.remove('text-field-block_error');
                }
            };

            //check which input is selected
            switch (item.dataset.id){
                case 'name':
                    regEx = types.name;
                    item.addEventListener('blur', valid);
                    break;
                case 'email':
                    regEx = types.email;
                    item.addEventListener('blur', valid);
                    break;
                case 'phoneNumber':
                    regEx = types.phoneNumber;
                    item.addEventListener('blur', valid);
                    break;
                default :
                    return
            }
        });
        item.addEventListener('input', () => {
            parentOfItem.classList.remove('text-field-block_error');
        });

        item.addEventListener('blur', () => {
            parentOfItem.classList.remove('text-field-block_active');
        })
    });
};
