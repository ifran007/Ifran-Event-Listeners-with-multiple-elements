var myVar = document.querySelector("h2");


myVar.addEventListener("mouseover" , function() {
     
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout" , function() {
     
    myVar.classList.remove("my-style");
});



// myVar.addEventListener("click" , function() {   
//     myVar.classList.add("my-style");
// });



// document.querySelector("button").addEventListener("click" , myFunction);
// // function myFunction() {
// //     alert("Hello !")
// // }



// Anoimus Function
// document.querySelector("button").addEventListener("click" , function() {
//     alert("Hello !");
// });
