function Prime() {
    var i, count = 0, number;
    number = Number(document.getElementById("N").value);
    if (number == 1) {
        document.getElementById("prime").innerHTML = "<b> 1 is either prime or composite</b>";
        document.getElementById("prime").style.color = 'red';

    } else if (number > 1) {
        for (i = 1; i <= number; i++) {
            if (number % i == 0) {
                count++;

            }
        }
        if (count == 2) {
            document.getElementById("prime").innerHTML = '<b>' + number + " is a prime number</b>"
            document.getElementById("prime").style.color = 'green';

        }
        else {
            document.getElementById("prime").innerHTML = "<b>" + number + " is not a Prime number<b>"
            document.getElementById("prime").style.color = 'red';

        }
    } else {
        document.getElementById("prime").innerHTML = "<b>" + number + " Number is not a prime number</b>"
        document.getElementById("prime").style.color = 'red';

    }
}

function stringReplace() {
    var input = document.getElementById('replace').value;
    document.getElementById("stringReplace").innerHTML = "<b> " + "Given String is " + "<i>" + input + "</i> New String <i>" + input.replace(/ /g, "-") + "</i></b>";
    document.getElementById("stringReplace").style.color = 'green';
}

function stringPalindromeCheckWithoutInbuiltMethods() {
    var input = document.getElementById('palin').value;

    // empty string
    let newString = "";
    for (let i = input.length - 1; i >= 0; i--) {
        newString += input[i];
    }
    if (input == newString) {

        document.getElementById("stringPalindromeCheck").innerHTML = input + "<b> is a palindrome</b>";
        document.getElementById("stringPalindromeCheck").style.color = 'green';
    } else {

        document.getElementById("stringPalindromeCheck").innerHTML = input + "<b> is  not a palindrome</b>";
        document.getElementById("stringPalindromeCheck").style.color = 'red';


    }
}

function sumOfEvenNums() {
    var input = document.getElementById('even').value;
    var sum = 0;
    var i;
    if (input > 1) {
        for (i = 1; i <= input; i++) {
            if (i % 2 == 0) {
                sum = sum + i;
            }
        }
        document.getElementById("sumOfEvenNums").innerHTML = "<b> sum of even numbers is" + sum + "</b>";
        document.getElementById("sumOfEvenNums").style.color = 'green';
    } else {
        document.getElementById("sumOfEvenNums").innerHTML = "<b> Enter the number grater than 1 </b>";
        document.getElementById("sumOfEvenNums").style.color = 'red';
    }


}