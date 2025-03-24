import './slider';
import modal from './modules/modal';
import { openModal } from './modules/modal';
import tabs from './modules/tabs'

document.addEventListener('DOMContentLoaded', () => {
    modal('.popup_engineer_btn', '.popup_engineer');
    modal('.contact_us_wrap', '.popup');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})

// contact_us_wrap popup