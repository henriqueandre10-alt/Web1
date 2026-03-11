const select = document.getElementById('gra');
const select2 = document.getElementById('in');


const rst = document.getElementById('rsto');


select.addEventListener('change', () => {
    rst.textContent = select.value;
})

select2.addEventListener('change', () => {
    rst.textContent = select2.value;
})

const mrc = document.getElementById('marca');

mrc.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        const envText = mrc.value;

        rst.innerText = envText;

        mrc.value = "";
    }
})