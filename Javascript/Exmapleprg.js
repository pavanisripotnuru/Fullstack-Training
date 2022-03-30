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


function checkCase() {
    var ch = document.getElementById('ch').value;
    if (!isNaN(ch * 1)) {
        document.getElementById("checkCase").innerHTML = "<b> Given input is numeric</b>";
        document.getElementById("checkCase").style.color = 'red';

    }
    else if (ch == ch.toUpperCase()) {
        document.getElementById("checkCase").innerHTML = "<b> Given input is in Upper Case</b>";
        document.getElementById("checkCase").style.color = 'green';
    }
    else if (ch == ch.toLowerCase()) {
        document.getElementById("checkCase").innerHTML = "<b> Given input is in Lower Case</b>";
        document.getElementById("checkCase").style.color = 'green';

    }

}

function printPrimes() {
    var i, j, count = 0;
    let result = [];
    let resultIndex = 0;
    var input = document.getElementById('inputnumber').value;
    for (i = 2; i <= input; i++) {
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }

        }
        if (count == 2) {
            console.log(i + " is prime number");
            result[resultIndex] = i;
            resultIndex++;
        }
        count = 0;

    }
    document.getElementById("printPrimes").innerHTML = "<b> " + result + " are the prime number in the given range</b>";
    document.getElementById("printPrimes").style.color = 'green';

}

function stringReplace() {
    var input = document.getElementById('replace').value;
    document.getElementById("stringReplace").innerHTML = "<b> " + "Given String is " + "<i>" + input + "</i> New String <i>" + input.replace(/ /g, "-") + "</i></b>";
    document.getElementById("stringReplace").style.color = 'green';
}

function stringPalindromeCheck() {
    var input = document.getElementById('palin').value;

    const arrayStrings = input.split("");

    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();

    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    if (input == joinArray) {

        document.getElementById("stringPalindromeCheck").innerHTML = "<b>" + input + " is a palindrome</b>";
        document.getElementById("stringPalindromeCheck").style.color = 'green';
    } else {

        document.getElementById("stringPalindromeCheck").innerHTML = "<b>" + input + " is  not a palindrome</b>";
        document.getElementById("stringPalindromeCheck").style.color = 'red';


    }

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
function printUpperCase() {
    var input = document.getElementById('lower').value;
    var newStr = '';
    for (var i = 0; i < input.length; i++) {
        var thisCharCode = input[i].charCodeAt(0);
        if ((thisCharCode >= 97 && thisCharCode <= 122)) {
            newStr += String.fromCharCode(thisCharCode - 32);
        } else {
            newStr += input[i];
        }
    }

    document.getElementById("printUpperCase").innerHTML = "<b> new string " + newStr + "</b>";
    document.getElementById("printUpperCase").style.color = 'green';

}

function reverseNum() {
    var input = document.getElementById('reverse').value;
    var rem = 0;
    var sum = 0;
    while (input > 0) {
        rem = input % 10;
        console.log("Rem" + rem);
        sum = sum * 10 + rem;
        console.log("sum" + sum);
        input = Math.floor(input / 10);
        console.log("input" + input);

    }
    document.getElementById("reverseNum").innerHTML = "<b> Reverse of the number is " + sum + "</b>";
    document.getElementById("reverseNum").style.color = 'green';

}



/*
function squareNum(){
    let input=document.getElementById("square").value;
        document.getElementById("a").innerHTML = "<b> quare of the given number is " + input*input + "</b>";
       
}
function evenOdd(){
    let input=document.getElementById("num").value;
    if(input%2==0){
        alert(input +"is even number");
    }else if(input%2==1){
        alert(input+" is odd number");

    }
    else{
        alert(input+ " is not even nor odd ");
    }

}

function combine(){
    let input=document.getElementById("text").value;
    if(input=="gireesh"){
        alert(input + " hello");
    }else if(input=="pavani"){
        alert(input + " Hiiii");
    }
    else{
        alert(input+" how are u");
    }
    
   
}
function countN(){
    let input=document.getElementById("name").value;
    let count=0, bcount=0;
    for(i=0;i<=input.length;i++){
        console.log(input[i])
        if("a"==input[i]){
            count++;
        }else if("b"==input[i]){
           bcount ++;
        }
       
    }
    alert("a"+ " given character is " + count + " times repeated");
    alert("b"+ " given character is " + bcount + " times repeated");

}


function pass(){
    let s =document.getElementById("num1").value;
    
    if(s >75){
        alert(s +" is passed with distinction")


    }else if(s>35 && s<75){

        alert(s +" is passed with first class")


    }else if(s<35){
        alert(s +" is failed")
    }
}*/

function findMax() {
    let args = document.getElementById("num2").value;
    maxNumber = args.split(",");
    let max = 0;
    console.log("max number" + maxNumber);
    console.log("max number length" + maxNumber.length);

    for (let i = 0; i < maxNumber.length; i++) {
        console.log("input value " + maxNumber[i]);
        console.log("max value " + max);
        if (isNaN(maxNumber[i])) {
            document.getElementById("msg1").innerHTML = "<b>" + maxNumber[i] + " is not a number</b>";
            document.getElementById("msg1").style.color = 'red';
            return 0;
        }
        if (Number(maxNumber[i]) > Number(max)) {
            max = maxNumber[i];
        }
        console.log("max value  after " + max);

    }

    document.getElementById("msg1").innerHTML = "<b>" + max + " is the max number and cube of this number is " + cube(max) + "</b>";
    document.getElementById("msg1").style.color = 'green';
}

function cube(a) {
    // document.getElementById("msg1").innerHTML = "<b> cube of the given number is " + a*a*a  + "</b>";
    return a * a * a;

}
function sumAll() {
    let args = document.getElementById("num3").value;
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
        sum = sum + Number(args[i]);
        console.log("sum " + sum)
    }
    alert(sum + " sum of all values");

}
function factorial() {
    let n = document.getElementById("num4").value;
    let fact = 1;
    let recurisveResult = recursiveFact(n);
    while (n > 0) {
        fact = fact * n;
        console.log("fact " + fact)
        n--;
    }
    alert("Factorial of given number is " + fact);
    alert("Recursive Result " + recurisveResult)

}

//Recursive

function recursiveFact(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * recursiveFact(x - 1);
    }


}


function array() {
    let input = document.getElementById("text1").value;
    fruits = input.split(",");

    fruits.push("kiwi");
    fruits[fruits.length] = "orange";
    console.log("fruits are" + fruits);
    joinFruit = fruits.join(":");
    console.log("append fruit" + joinFruit);

    for (i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);

    }

}

function myPractice() {
    console.log("my function called");
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //convert array to string 
    console.log(fruits.toString())
    console.log(fruits)

    //to add an element to the array at the end of the array & returns length of the array
    // ex = ["Banana", "Orange", "Apple", "Mango","lemon"],return value is  5
    console.log(fruits.push("lemon"));
    console.log(fruits)

    //to remove  an element from  the array at the end of the array & returns value  of the array at last index
    // ex = ["Banana", "Orange", "Apple", "Mango"] retrun value lemon
    fruits.pop();
    console.log(fruits)

    // to remove the first element of an array & return deleted element
    // ex = ["Orange", "Apple", "Mango"]   retrun value banana
    fruits.shift();
    console.log(fruits)

    // to add an element to an array  at the begining & return length of array 
    // ex = [ "grapes","Orange", "Apple", "Mango"]   retrun value 4
    fruits.unshift("grapes");
    console.log(fruits)

    // append two arrays
    const vegtables = ["bottle gaurd", "keera", "potato"];
    const mix = vegtables.concat(fruits);
    console.log(mix);

    //The first parameter (2) defines the position where new elements should be added (spliced in).
    //The second parameter (0) defines how many elements should be removed.
    //The rest of the parameters ("papaya" , "Kiwi") define the new elements to be added.
    //ex ["Orange", "Apple", "papaya" , "Kiwi","Mango"]
    fruits.splice(2, 0, "papaya", "Kiwi");
    console.log(fruits)

    //The slice() method slices out a piece of an array into a new array.
    //This example slices out a part of an array starting from array element 1 ("Orange"):

    //The slice() method can take two arguments like slice(1, 3).
    //The method then selects elements from the start argument, and up to (but not including) the end argument.
    const sliceArray = fruits.slice(2)
    console.log(sliceArray)

    const fruits1 = ["mango", "orange", "banana", "papaya", "apple"];
    console.log(fruits1);
    // to sort an aplhabetical order
    fruits1.sort();
    console.log(fruits1);

    /* const points = [40, 100, 1, 5, 25, 10];
     points.sort(function(a, b){return a - b});*/


    // for each itetrates  the array (alternative of for loop )for every elment 
    fruits.forEach(element => {
        console.log(element);

    });

    vegtables.forEach(element => {
        console.log(element)

    });

    // map will perform action on each element of the array n returns a new array 
    const numbers = [2, 4, 5, 32, 18];
    console.log(numbers);
    const mapArray = numbers.map(element => {
        console.log(element);
        return element * 2;
    })
    console.log(mapArray);


    // The filter() method creates a new array with array elements that passes a test.

    const filterArray = numbers.filter(element => {
        return element > 4;
    })
    console.log(filterArray);


    // The reduce() method runs a function on each array element to produce (reduce it to) a single value.
    const sum = numbers.reduce((element, total) => {
        return total + element;
    });
    console.log(sum);

    // The every() method check if all array values pass a test and returns boolean
    const everyResults = numbers.every(element => {
        return element > 4;
    });
    console.log(everyResults);

    // The some() method check if some  array values pass a test and returns boolean

    const someResults = numbers.some(element => {
        return element == 4;
    });
    console.log(someResults);

    //The find() method returns the value of the first array element that passes a test function.
    const findResults = numbers.find(element => {
        return element > 10;
    });
    console.log(findResults);

    //The findIndex() method returns the index  of the first array element that passes a test function.
    const findIndexResults = numbers.findIndex(element => {
        return element > 10;
    });
    console.log(findIndexResults);
}


function spliceCheck() {
    let input = document.getElementById("splice").value;
    inputArray = input.split(",");

    startIndex = inputArray[0];
    deleteCount = inputArray[1];
    elementsArray = [];
    for (i = 2; i < inputArray.length; i++) {
        elementsArray.push(inputArray[i]);
    }

    getSpliceResult(startIndex, deleteCount, elementsArray);




}

function getSpliceResult(startIndex, deleteCount, elements) {
    inputArray = ["Apple", "Mango", "Grapes", "Papaya"];
    inputArrayLength = inputArray.length;
    resultArray = [];

    //push actual elements before start index into resultArray

    for (i = 0; i < startIndex; i++) {
        resultArray.push(inputArray[i])
    }
    //push the new elements after start index into resultArray
    for (i = 0; i < elements.length; i++) {
        resultArray.push(elements[i])
    }

    //skip the deleted elements and push the remaining elements from  start index into resultArray
    for (i = Number(startIndex) + Number(deleteCount); i < inputArrayLength; i++) {
        resultArray.push(inputArray[i]);
    }


    //Remove elements from result Array for the given delete count
    /*if(deleteCount>0) {
        while(deleteCount>0) {
            resultArray.pop();
            deleteCount--;
        }
    }*/
    console.log("Actual Array::" + inputArray);

    console.log("Program Splice Array:::" + resultArray);

    //Using splice method to cross check our results
    inputArray.splice(1, 0, "Banana", "Kiwi")
    console.log("Actual Splice function Result::::" + inputArray)

}

function getTheCounts() {
    let input = document.getElementById("count").value;
    const inputArr = input.split(",");
    const countsArr = {};
    //{1: 2, 2:2}
    //1,1,2,2
    inputArr.forEach(x => {
        countsArr[x] = (countsArr[x] || 0) + 1;


    })
    console.log(countsArr);

    //To store the data as key and value pairs
    const countMap = new Map();
    let count = 0;
    for (i = 0; i < inputArr.length; i++) {
        for (j = 0; j < inputArr.length; j++) {
            if (Number(inputArr[i]) == Number(inputArr[j])) {
                count++;
            }
        }

        if (!countMap.has(inputArr[i])) {
            countMap.set(inputArr[i], count)

        }
        count = 0;
    }

    console.log(countMap)

}

function getStudentsObjectResults() {
    const students = [{ name: 'Tanveer', subject: 'Math', marks: 33 }, { name: 'Teja', subject: 'Physics', marks: 100 }, { name: 'Charith', subject: 'Chemistry', marks: 99 }, { name: 'Tanveer', subject: 'Physics', marks: 34 }, { name: 'Teja', subject: 'Chemistry', marks: 45 }]
    console.log(students);
    //To store unique values Set is useful
    const studentNames = new Set();
    let sumOfMarks = 0;
    const studentsAvg = [];
    let sumOfPhysicsMarks = 0;
    let studentCountForPhysics = 0;
    students.forEach(student => {
        console.log(" name:: " + student.name + " subject: " + student.subject + " Marks:" + student.marks);
        //1.To get the unique student name
        studentNames.add(student.name)
        //To get the total student marks
        sumOfMarks += student.marks;

        //2.To get the students who are having marks > 50
        if (student.marks > 50) {
            //pushing the student object into a new array
            studentsAvg.push(student);
        }
        //3. To get the student who is having a subject as physics
        if (student.subject == 'Physics') {
            //Sum up the marks where student suject is physics
            sumOfPhysicsMarks += student.marks
            //getting the number of students who are having subject as physics
            studentCountForPhysics++;
        }

    })

    console.log("Unique Student Names are::: ");
    console.log(studentNames);
    console.log("Sum of Marks:: " + sumOfMarks + " Average of Marks: " + sumOfMarks / students.length)
    console.log("Students objects having marks greater than 50::: ")
    console.log(studentsAvg);
    console.log("Sum of Physics Marks:: " + sumOfPhysicsMarks + " Average of Marks: " + sumOfPhysicsMarks / studentCountForPhysics)


}

function subString() {
    const input = document.getElementById("substring").value;
    inputArr = input.split(",");
    const originalString = inputArr[0];
    const startIndex = inputArr[1];
    const endIndex = inputArr[2];
    let newString = "";

    for (i = startIndex; i < endIndex; i++) {
        console.log("New SubString::: " + newString);
        console.log("input string::: " + originalString[i]);

        newString = newString + originalString[i];
    }
    console.log("Original String:::: " + originalString);
    console.log("New SubString::: " + newString);
    console.log("Result using Actual Substring method:::: " + originalString.substring(startIndex, endIndex))


}

function getArea() {
    const input = Number(document.getElementById("circle").value);
    console.log(input)
    let circle = new Circle(input);
    console.log("Area value is::: " + circle.getArea());
    console.log("Perimeter value is::: " + circle.getPerimeter())

}



//Circle Class 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
        //return Math.PI*Math.pow(this.radius, 2)

    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }


}

function getFullName() {
    const input = document.getElementById("fname").value;
    nameArray = input.split(",");
    if (nameArray.length == 2) {
        let name = new Name(nameArray[0], nameArray[1]);
        console.log("Full Name::::: " + name.getFullName())
        console.log("Intials are:::: " + name.getIntials())
        console.log("Name in Capital::: " + name.getFullNameInCapital("pavanisri"));
        console.log("Total Salay::: " + name.getTotalSalary(10000));
        console.log("Total Savings::: " + name.getTotalSaving(10000, 4000));

    } else {
        alert("please enter first Name and last Name");
    }



}



//Class Name

class Name {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return this.fname + " " + this.lname;
    }

    getIntials() {
        return this.fname[0].toUpperCase() + "." + this.lname[0].toUpperCase()
    }

    getFullNameInCapital(name) {
        return name.toUpperCase();
    }

    getTotalSalary(sal) {
        return 12 * sal;
    }
    getTotalSaving(income, expense) {
        return 12 * (income - expense);
    }

}

wordsTyped = [];
letter = "";

var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //var input=event.target.word.value;
    var input = document.getElementById("word").value
    input = input.toLowerCase();
    console.log("Given input is:: " + input);

    /*if(wordsTyped.length == 0) {
      wordsTyped.push(input);
      letter=input.charAt(input.length-1);
  
    }
  
    else if(!wordsTyped.includes(input)&&input.startsWith(letter)) {
      wordsTyped.push(input);
      letter=input.charAt(input.length-1);
    }else if(wordsTyped.includes(input)) {
        alert("Given word '"+ input+ "' is alread exists and !!!Game Over!!!")
        wordsTyped = [];
        letter="";
    }
    else {
        alert("Your supposed to enter a word starts with::: "+ letter + " !!!Game Over!!!!");
        wordsTyped = [];
        letter="";
        return 0;
    }
    console.log("Last character of the given word:: "+input+" is "+letter)
  
    console.log("Words in the Array are::: ");
    console.log(wordsTyped)*/

    s = new Shiritori(wordsTyped,letter);
    s.play(input)
});

function resetGame() {
    alert("!!!Game Restarted!!!")
    wordsTyped = [];
    letter = "";
    console.log(wordsTyped);
}

//Shiritori class

class Shiritori {

    constructor(wordsTyped,letter) {
        this.wordsTyped = wordsTyped;
        this.letter=letter;
    }

    play(input) {
        console.log(input);
        if (this.wordsTyped.length == 0) {
            this.wordsTyped.push(input);
            this.letter = input.charAt(input.length - 1);

        }
        else if (!this.wordsTyped.includes(input) && input.startsWith(this.letter)) {
            this.letter = input.charAt(input.length - 1);
            this.wordsTyped.push(input);
        } else if (this.wordsTyped.includes(input)) {
            alert("Given " + input + " word is alread exists and !!!Game Over!!!")
            this.restart()
        }
        else {
            alert("Your supposed to enter a word starts with::: " + this.letter + " !!!Game Over!!!!");
            this.restart();
        }
        console.log(this.wordsTyped);

    }

    restart() {
        this.wordsTyped = [];
        this.letter="";
    }
}


class Shiritori_Type2 {

    constructor(words) {
        this.words = words;
    }

    get lastCharacter() {
        return this.words[this.words.length-1].charAt(this.words[this.words.length-1].length-1);
    }

    play(input) {
        if (this.words.length == 0) {
            this.words.push(input);

        }
        else if (!this.words.includes(input) && input.startsWith(this.lastCharacter)) {
            this.words.push(input);
        } else if (this.words.includes(input)) {
            alert("Given " + input + " word is alread exists and !!!Game Over!!!")
            this.restart()
        }
        else {
            alert("Your supposed to enter a word starts with::: " + this.lastCharacter + " !!!Game Over!!!!");
            this.restart();
        }
        console.log(this.words);

    }

    restart() {
        this.words = [];
    }
}
words = ["hello","one","enter"];
type2 = new Shiritori_Type2(words);
type2.play("range");
//console.log(type2.lastCharacter);