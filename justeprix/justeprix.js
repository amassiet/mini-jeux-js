//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;
const resultDiv=document.getElementById("resultDiv");

document.getElementById("beginGame").addEventListener("click", function(){
    NumberToFind=getRandomInt(1000);
    alert(NumberToFind);
})

document.getElementById("checkPropalButton").addEventListener("click", function(){
    checkPropal();
})

document.getElementById("userPropalInput").addEventListener("keyup", function(event){
    if(event.key =="Enter"){
    checkPropal();
    }
})

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}


function checkPropal(){
    let numberPropal = document.getElementById("userPropalInput").value;
    if(numberPropal>NumberToFind){
        resultDiv.innerHTML +="<br>" + numberPropal + ": C'est moins";
    }
    else if(numberPropal<NumberToFind){
        resultDiv.innerHTML+="<br>" + numberPropal + ":C'est plus";
    }
    else if(numberPropal == NumberToFind){
        resultDiv.innerHTML+="<br>" + numberPropal + ":C'est gagné";
        let audio = new Audio("./applaudissements.mp3");
        audio.play();
    
    }
}