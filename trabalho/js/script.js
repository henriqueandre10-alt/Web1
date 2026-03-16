const select = document.getElementById('gra');
const select2 = document.getElementById('in');
const mrc = document.getElementById('marca');
 


const rst = document.getElementById('rsto');

/*mrc.addEventListener('keydown', function(event) {
    if (event.key === 'Enter'){
        const envText = mrc.value;

        rst.innerText = envText;

        mrc.value = "";
    }
})*/


function atualizar(){
    const regiao = select.value;
    const categoria = select2.value;
    const mrrc = mrc.value;


    rst.textContent = `${regiao} - ${categoria} - ${mrrc}`;
}
select.addEventListener('change', atualizar);
select2.addEventListener('change', atualizar);
mrc.addEventListener('input', atualizar);

function click(){

    //criar as divs
var block = document.createElement("div");
document.getElementById('box1').appendChild(block);

}
