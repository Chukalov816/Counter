

function count() {
    const text = document.getElementById('text');
    text.textContent = 0;
    const hours = document.getElementById('hours');
    const countBtn = document.getElementById('count');
    countBtn.addEventListener('click', onClick);
    const clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', onClear);
    const input = document.getElementById('input');
    const inputBtn = document.getElementById('inputBtn');
    inputBtn.addEventListener('click', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        text.textContent = input.value;
        input.value='';
    }

    function onClick(e) {
        e.preventDefault();
        let currentCount = Number(text.textContent);
        text.textContent = currentCount + 1;
        currentCount


        if (currentCount >= 56) {
            let count = Math.floor(currentCount / 56)
            hours.textContent = count;
        }


    }
    
    function onClear(e) {
        e.preventDefault();
        text.textContent = 0;
        hours.textContent = 0;
    }


}


count();
