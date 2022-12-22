
// DOM Ready Function
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


// DOM Ready Called
ready(function () {
    Sakana.setMute(false);

    const takina = Sakana.init({
        el: '.bocchi',
        character: 'bocchi',
        inertia: 0.001,
        decay: 1,
        scale: 0.90,
    });

    const chisato = Sakana.init({
        el: '.nijika',
        character: 'nijika',
        inertia: 0.01,
        decay: 1,
        scale: 0.90,
    });

    const switchButton = document.getElementById('switch-button')
    const switchChar = document.getElementsByClassName('switch-char');
    const switchColor = document.getElementsByClassName('switch-color');

    // Tabs Admin Event
    function fireTabsAdmin() {
        switchButton.addEventListener('click', () => {
            for (let index = 0; index < switchChar.length; index++) {
                if (switchChar[index].classList.contains('hidden')) {
                    switchChar[index].classList.remove('hidden');
                    switchChar[index].classList.add('block');
                    switchButton.textContent = 'Nijika'
                }else{
                    switchChar[index].classList.remove('block');
                    switchChar[index].classList.add('hidden');
                    switchButton.textContent = 'Bocchi'
                }
            }

            for (let index = 0; index < switchColor.length; index++) {
                if (switchColor[index].classList.contains('bg-pink-100')) {
                    switchColor[index].classList.remove('bg-pink-100');
                    switchColor[index].classList.add('bg-yellow-100');

                }else{
                    switchColor[index].classList.remove('bg-yellow-100');
                    switchColor[index].classList.add('bg-pink-100');

                }
            }
        })
    }
    fireTabsAdmin();
});