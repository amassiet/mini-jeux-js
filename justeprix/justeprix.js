//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;

document.getElementById("beginGame").addEventListener("click", function(){
    NumberToFind=getRandomInt(1000);
    alert(NumberToFind);
})

document.getElementById("propal").addEventListener("click", function(){
    checkPropal();
})

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function checkPropal(){
    if(numberToTest>NumberToFind){
        console.log("Cest moins");
    }
    else if(numberToTest<NumberToFind){
        console.log("Cest plus");
    }
    else if(numberToTest === NumberToFind){
            console.log("Cest gagné")
    
    }
}