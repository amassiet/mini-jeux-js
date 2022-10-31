//Générer un chifre en aléatoire
// l'utilisateur donne des nombres

let NumberToFind = 0;
const resultDiv=document.getElementById("resultDiv");
const resultFin=document.getElementById("resultFin");
let nbTentative = 0;

document.getElementById("beginGame").addEventListener("click", function(){
    NumberToFind=getRandomInt(1000);
    nbTentative= 0;
    resultDiv.innerHTML =""
    resultFin.innerHTML =""
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
    nbTentative+=1;
    let numberPropal = document.getElementById("userPropalInput").value;
    if(numberPropal>NumberToFind){
        resultDiv.innerHTML +="<br> tentative " + nbTentative+ " :" + numberPropal + ": C'est moins";
    }
    else if(numberPropal<NumberToFind){
        resultDiv.innerHTML+="<br> tentative " + nbTentative+ " :"+ numberPropal + ":C'est plus";
    }
    else if(numberPropal == NumberToFind){
        resultFin.innerHTML="Réussite en " + nbTentative + " essais <br>" + numberPropal + ":C'est gagné";
        resultFin.innerHTML+="<br><img src='./c-est-la-fete-emoji.gif'>"
        let audio = new Audio("./applaudissements.mp3");
        audio.play();
        
    
    }
    document.getElementById("userPropalInput").value = "";
    console.log(nbTentative);
}