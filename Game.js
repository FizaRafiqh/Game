const rand = Math.floor(Math.random()*50)+1;
// console.log(rand);
const sec = document.querySelector('.secret_num');
// console.log(sec.textContent)
const msg = document.querySelector('#msg');
const input = document.querySelector('#input');
const butn = document.querySelector('#btn')



butn.addEventListener('click',function(){
    
    
    const guess = input.value;
if(guess == rand){
    msg.textContent = "You Guessed it Right!! CONGRATULATIONS!!!"
    sec.textContent = rand;
    
}
else if(guess<rand){
    msg.textContent = "Too Low !!!"

}
else{
    msg.textContent = "Too high";

}

    
    
});


