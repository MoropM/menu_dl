( ()=> {
    'use strict'

    const aside = document.querySelector(`.aside`);
    const mainContent = document.querySelector(`.maincontent`);
    
    const removeActiveCls = options => {
        options.forEach( option => option.classList.remove('active') );
    }
    window.addEventListener("load", (event) => {
        const asideOption = aside.querySelectorAll(`.aside-option`);
        asideOption.forEach( option => {
            const link = option.querySelector(`a`);
            if( link !== null ) {
                link.addEventListener('click', e => {
                    e.preventDefault();
                    console.log( link );
                    removeActiveCls(asideOption)
                    const parentOptionLink = link.parentElement;
                    parentOptionLink.classList.add('active');
                })
            }
        });

        const asideMenu = document.querySelector(`#asideMenu`);
        asideMenu.addEventListener('click', () => {
            if( screen.width < 769 ) {
                if( aside.className == 'aside' ) {
                    aside.classList.add('show');
                    // aside.classList.remove('hidden');
                }
                else {
                    // aside.classList.add('hidden');
                    aside.classList.remove('show');
                }
            }
            if( screen.width > 768 ) {
                if( aside.className == 'aside' ) {
                    aside.classList.add('hidden');
                    mainContent.classList.add('asideh');
                }
                else {
                    aside.classList.remove('hidden');
                    mainContent.classList.remove('asideh');
                }
            }
        })

    });

})()