function printAfter (){
    alert ("hello world");
    return function(){
        alert("Elon Musk")
    }
}console.log(printAfter()())