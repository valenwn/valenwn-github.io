"use strict";

((document, window) => {
    const checkRef = document.getElementById('navi-toggle');
    const anchorRefArray = Array.from(document.getElementsByClassName('link'));

    for (let anchorRef of anchorRefArray) {
        anchorRef.addEventListener('click', () => {
            checkRef.click();
        })
    }

})(document, window)
