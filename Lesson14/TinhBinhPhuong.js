
function square(number){
    var result = number * number;
    return result;
}
function calculate(){
    var input = document.getElementById("input").value;
    var result = square(input);
    document.getElementById("result").innerHTML = result;
}

// var squareOf2 = square(2)
// document.write("Bình phương của 2 là: " + squareOf2 + "</br>");
//
// var squareOf5 = square(5)
// document.write(" Bình phương của 5 là: " + squareOf5);