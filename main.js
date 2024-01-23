window.onload = function(){
    setGame();
}
/*variables*/
let currentmolefile;
let currentplantfile;
let GameOver = false;
let score = 0;
/*functions*/
function getRandomTitle(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
function setGame(){
    for (let i =0; i<9;i++){
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener('click', select_title);  
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole,1000);
    setInterval(setPlant, 2000);
}
function select_title(){
    if(GameOver){
        return;
    }
    if(this == currentmolefile){
        score +=10;
        document.getElementById('score').innerText = score.toString();
    }
    else if(this == currentplantfile){
        document.getElementById('score').innerHTML = "Game Over:"+
        score.toString();
        GameOver = true;
    }
}
function setPlant(){
    if (GameOver){
        return;
    }
    if(currentplantfile){
        currentplantfile.innerHTML ='';
    }
    let plant = document.createElement('img');
    plant.src= './piranha-plant.png';
    let num = getRandomTitle();
    if(currentmolefile && currentmolefile.id == num){
        return;
    }
    currentplantfile = document.getElementById(num);
    currentplantfile.appendChild(plant);

}
function setMole(){
    if (GameOver){
        return;
    }
    if(currentmolefile){
        currentmolefile.innerHTML = '';/*clear the previous pipe*/
    }
    let mole = document.createElement("img");
    mole.src= './monty-mole.png';
    let num = getRandomTitle();
    if(currentplantfile && currentplantfile.id == num){
        return;
    }
    currentmolefile= document.getElementById(num);
    currentmolefile.appendChild(mole);
}