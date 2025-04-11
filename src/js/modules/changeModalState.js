import checkNumInputs from "./CheckNumInputs";

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidht = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
                console.log(state);
            })
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidht, 'widht');
};

export default changeModalState;