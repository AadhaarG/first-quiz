let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let but1 = document.getElementById("but1");
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
let val = document.getElementById("p")
but1.onclick= answer
function answer(){
    if(opt1.checked && opt2.checked){
        console.log("both checked")
        val.textContent = "Both Options Cannot Be Checked. ARE U DUMB?"
        
    }
    else if(opt1.checked){
        console.log("checked")
        window.open(f1.href)   
    }
    else if(opt2.checked){
        console.log("2checked")
        window.open(f2.href)

    }
    else{
        console.log("not checked")
    }
}