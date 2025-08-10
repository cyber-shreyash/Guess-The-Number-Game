const k=document.getElementById("result");
let orgnum = Math.floor(Math.random() * 100) + 1;

document.getElementById("b2").addEventListener("click", () => {
    let guessnum = Number(document.getElementById("guess").value);
    if (guessnum == orgnum) {
        k.innerText="Congrats ! Correct Number";
        console.log("Correct Number");
    }
    else if (guessnum > orgnum) {
                k.innerText="Correct number is less than your number";

        console.log("Correct number is less than your number");
    }
    else {
        k.innerText="Correct number is greater than your number";
        console.log("Correct number is greater than the number you entered");
    }

})

document.getElementById("b1").addEventListener("click",()=>{
    orgnum=Math.floor(Math.random() * 100) + 1;
    document.getElementById("guess").value="";
    result.innerText="New game has begun ! Enter a number"
    
})

