import { createContext } from 'react';

class SelectFieldJs {
    constructor() {
        this.selectId = 'fff';
    }

    selectFieldLogic(selectInputClass, selectOptionsClass, selectId, changeSelectId) {
        var selectInput = document.querySelector(`.${selectInputClass}`),
              selectOptions = document.querySelector(`.${selectOptionsClass}`),
              option = selectOptions.childNodes;

        const showOptions = `
            display: block;
        `;
        const hiddenOptions = `
            display: none;
        `;

        //on click opened dropdown-content
        selectInput.addEventListener("click", (e) => {
            selectOptions.style.cssText = showOptions
        });

        //on click closed dropdown-content
        window.addEventListener("click", (e) => {
            let target = e.target;

            if(target !== selectOptions &&  target !== selectInput) {
                selectOptions.style.cssText = hiddenOptions
            }
        });

        [].forEach.call(option, item => {
            item.addEventListener('click', () => {
                //remove the class "selected" from all items
                [].forEach.call(option, item => {
                    item.classList.remove('selected')
                });
                item.classList.add('selected');
                //hidden dropdown-content
                selectOptions.style.cssText = hiddenOptions;
                selectInput.value = item.firstChild.textContent;
                changeSelectId(item.id);
            })
        });
    }
}

export const selectFieldJs = new SelectFieldJs();
export const selectFieldJsCtx = createContext(selectFieldJs);
