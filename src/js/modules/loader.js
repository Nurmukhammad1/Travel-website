'use strict'

function loader() {
    const loader = document.querySelector('#loawder');

    window.addEventListener('load', ()=> {
        setTimeout(() => {
            loader.classList.add('loader-wrapper--hidden');
        }, 1000);
    });
}

export default loader;