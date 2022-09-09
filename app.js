// if (confirm("Choose one.") == true) {
//     document.body.style.backgroundColor = "black";    
// }

// var age = prompt("How old are you?");

// if (age >= 18)
// {
//     document.body.style.background = 'Yellow';
// }
// else
// {
//     alert("403: Access Denied");
// }
 


function chColor(){
    var input = document.getElementById("Group").value;
    if(input.toUpperCase().startsWith('P') && input.length === 4){
        if(input.includes("1",1)){
            document.body.style.backgroundColor = "red"
        }else if(input.includes("2",1)){
            document.body.style.backgroundColor = "yellow"
        }else if(input.includes("3",1)){
            document.body.style.backgroundColor = "black"
        }else{
            console.log("Tapilmadi");
        }
    }else{
        alert("Wrong")
    }
}
 



