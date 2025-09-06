// your code goes here
// your code goes here
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".sci");
function getComputerChoice() {
        const comp = Math.floor(Math.random() * 100);
        if (comp <= 33) return "rock";
        else if (comp <= 66) return "paper";
        else return "scissor";
}

let our;

function disp(){
    let win;
    let compD=getComputerChoice();
    if(our==="rock" && compD==="paper"){
        win="Computer";
    }
    else if(our==="rock" && compD==="scissor"){
        win="YOU";
    }
    else if(our==="paper" && compD==="scissor"){
        win="Computer";
    }
    else if(our==="paper" && compD==="rock"){
        win="YOU";
    }
    else if(our==="scissor" && compD==="rock"){
        win="Computer";
    }
    else if(our==="scissor" && compD==="paper"){
        win="YOU";
    }
    else{win="NO ONE";}
    let winner = document.querySelector(".result");
    winner.textContent=`${win} WON! - YOU CHOSE ${our} - COMPUTER CHOOSE ${compD}`;
}

rock.addEventListener("click",function(){
    our="rock";
    disp();
});
scissor.addEventListener("click",function(){
    our="scissor";
    disp();
});
paper.addEventListener("click",function(){
    our="paper";
    disp();
});


    


    

