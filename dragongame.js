var slaying = true;
var youHit = Math.floor(Math.random() * 2); //This sets to a random number to 0 or 1.
var damageThisRound = Math.floor(Math.random() * 5 +1) //Sets damage this round from 1 to 5 
var totalDamage  =0; 

//while loop
while(slaying){
slaying =false;
    
//if statement inside while loop 
if (youHit ===1) {
console.log ("Congratulations! You made the dragon bleed!")
    if (totalDamage >=4){
        console.log ("You slew the dragon!")
        slaying=false; //because the dragon is slayed!
    }else {
        (totalDamage<=4)
        Math.floor(Math.random() * 2) 
        
    }
    totalDamage +=damageThisRound; //gives random number between 1 and 5;
    
}   else {
    console.log ("The dragon ate you!  Ahh too bad! ")
}
} //end of while loop
