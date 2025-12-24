let userpoint=0;
let comppoint=0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const messagebox=document.querySelector("#message");
let choices=document.querySelectorAll(".image");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const playgame=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
        console.log("draw");
        messagebox.innerText="Game Draw";
        messagebox.style.backgroundColor="black";
    }
    else{
        if(userchoice==="rock"){
            if(compchoice==="scissors"){
                userpoint++;
                userScorePara.innerText=userpoint;
                messagebox.innerText="You win! Rock beats Scissors";
                messagebox.style.backgroundColor="green";
            }
            else{
                comppoint++;
                compScorePara.innerText=comppoint;
                messagebox.innerText="You lost:( Paper beats Rock";
                messagebox.style.backgroundColor="red";
            }
        }
        if(userchoice==="paper"){
            if(compchoice==="rock"){
                userpoint++;
                userScorePara.innerText=userpoint;
                messagebox.innerText="You win! Paper beats Rock";
                messagebox.style.backgroundColor="green";
            }
            else{
                comppoint++;
                compScorePara.innerText=comppoint;
                messagebox.innerText="You lost:( Scissors beats Paper";
                messagebox.style.backgroundColor="red";
            }
        }
        if(userchoice==="scissors"){
            if(compchoice==="rock"){
                comppoint++;
                compScorePara.innerText=comppoint;
                messagebox.innerText="You lost:( Rock beats Scissors";
                messagebox.style.backgroundColor="red";
            }
            else{
                userpoint++;
                userScorePara.innerText=userpoint;
                messagebox.innerText="You win! Scissors beats Paper";
                messagebox.style.backgroundColor="green";
            }
        }
    }
}
choices.forEach((button)=>{
    button.addEventListener("click",()=>{
        let choice1=button.getAttribute("id");
        let choice2=genCompChoice();
        console.log("user choice",choice1);
        console.log("computer choice",choice2);
        playgame(choice1,choice2);
    });
});
