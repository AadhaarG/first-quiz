document.getElementById("Submit").addEventListener("click",function(){
    let score = 0;
    let total = 8;
    for(let i = 1; i <= total; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if(answer && answer.value=== "1"){
            score++
        }
      }
      let result = document.getElementById("result").textContent= `You scored ${score} out of 8`;
    }
);