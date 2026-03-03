function btn(){

    const nuId = document.getElementById('numId');
    const nId = parseInt(nuId.value);

    let aa = "Par"
    let ab = "Impar"

    const cor = document.getElementById('spn');
    const htrc = document.getElementById('htr');

    var lit = document.createElement("li");
    document.getElementById('lin').appendChild(lit);

    if(nId % 2 === 0){
        cor.style.backgroundColor = "green"
        cor.textContent = "Par";
        cor.style.textAlign = "center";
        
        lit.backgroundColor ="rgb(92, 124, 105)";

        lit.textContent = `${nId} ${aa}`;
        
    }
    else {
        cor.style.backgroundColor = "red";
        cor.textContent = "Impar";
        cor.style.textAlign = "center";
       
        lit.backgroundColor ="rgb(92, 124, 105)";
        
        lit.textContent = `${nId} ${ab}`;
            
    }
    
    nuId.value = "";
}
function Lpr(){
    
    const bta = document.getElementById('button02');
    const li = document.getElementById('lin');


    addEventListener('click', () => {
        li.innerHTML = '';
    })
    


}