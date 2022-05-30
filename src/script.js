let divBingoCard = document.getElementById("divBingoCard");
let pcardCount= document.getElementById("pCount");
let card;
let txtInput;
let counter;
let cardMatrix;
let cardMatrixTotal;

/**
 * script para pintar las tablas o la cantidad con la cual deseemos jugar
 */
function draw(){
    if(txtInput.value ==""){
        alert("Enter value in the field!");
    }
    else{
        if (isNaN(txtInput.value)){
            alert("Enter numbers only!");
            txtInput.value = null;
        }
        else{
            for (let i =0; i<txtInput.value; i++){
                card = new BingoCard();
                card.generateMatrix();
                divBingoCard.innerHTML += card.drawCard();
                counter++;
                cardMatrix = card.matrix;
                cardMatrixTotal.push(cardMatrix);
            }
            txtInput.value=null;
        }
    }
    pcardCount.innerHTML= 'No. of cards: ${counter}';
}