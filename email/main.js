const arrEmail = ['erikasarleti@gmail.com', 'arnaldosempione@gmail.com', 'giuliaIscariota33@gmail.com', 'gabryeskere666@gmail.com', 'ivana_spagna@libero.it', 'maurettoasr@hotmail.it'];


const logBtn = document.querySelector(".btn-login");
let result= document.querySelector(".result");
logBtn.addEventListener('click', function(){

    let userEmail = document.getElementById("accedi").value;

    let accettato = false;

    for (let i = 0; i < arrEmail.length; i++) {

        if(arrEmail[i] == userEmail) {
            accettato = true;
        }
    }


    if (accettato){
        result.innerHTML = "Mail trovata";
    } else {
        result.innerHTML = "Mail non trovata";
    }
});
