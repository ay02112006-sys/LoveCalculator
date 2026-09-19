const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault() // ye direct gayab hone ko rokta hai
    const boy = document.getElementById('boy')
    const girl = document.getElementById('girl')
    const l1 = boy.value.length;
    const l2 = girl.value.length;
    var result = Math.pow(l1+l2,3)%101;
    if (boy.value == "Abhishek" && girl.value == "Shivanshi") {
      result = 100;  

    }
    if (boy.value == "Sachin" && girl.value == "Shreya") {
      result = "Error: She is not comfortable with Sachin, Please try with another name";
    }
    if (boy.value == "Prabal" && girl.value == "Soubhagya") {
      result = "Both are gay, so the result is 100%";
    }

    // const result = Math.pow(l1+l2,3)%101;
    document.querySelector('h2').textContent = `Result: ${result}`;
    form.reset();
})