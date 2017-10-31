// # Quiz 1

// 1. Write a **recursive** function which receives an array and r
// eturns the sum of the elements of the array.

var myArray = [1,2,3,4,5,6];

var arraySum = function(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    }
    else {
      return myArray.pop() + arraySum(myArray);
    }
};
      console.log(arraySum(myArray));

// ANSWER: 21


// 2.	Given two temperatures, return true if one is less than 0 and 
// the other is greater than 100.  
//     a.	icyHot(120, -1) → true  
//     b.	icyHot(-1, 120) → true  
//     // c.	icyHot(2, 120) → false  


var temp1 = 0;
var temp2 = 0;

function icyHot(temp1, temp2){
    if ( ((temp1 < 0 ) || (temp1 > 100)) && ((temp2 < 0 ) || (temp2 > 100)) )
        return True;
    else 
        return false;
}
      icyHot(120, -1);

//ANSWER (a): icyHot(120, -1) → true
//ANSWER (b): icyHot(-1, 120) → true  
//ANSWER (c): icyHot(2, 120) → false


// 3.	Given 2 ints, a and b, return true if one if them is 10 or if 
// heir sum is 10.  
//     a.	makes10(9, 10) → true  
//     b.	makes10(9, 9) → false  
//     c.	makes10(1, 9) → true  

var a = 0;
var b = 0;

function makes10(a,b){
    if ( ((a === 10) || (b === 10)) || ((a + b) === 10) )
        return True;
    else 
        return false;
}
      makes10(9, 10);

// ANSWER (a):  makes10(9, 10); ==> true
// ANSWER (b):  makes10(1, 9); ==> true
// ANSWER (c):  makes10(9, 9); ==> flase


// 4.	Given a string, take the first 2 chars and return the string 
// with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.  
//     a.	front22("kitten") → "kikittenki"  
//     b.	front22("Ha") → "HaHaHa"  
//     c.	front22("abc") → "ababcab"  

var str = '';

function front22(str) {
  var strSlice = str.slice(0,2);
  if (str.length < 2) 
      return str+str+str;  
  else 
      return strSlice+str+strSlice;
}
  
front22('kitten');

// ANSWER (a): front22("kitten") → "kikittenki"
// ANSWER (b): front22("Ha") → "HaHaHa"
// ANSWER (c): front22("abc") → "ababcab"


// 5. Solve https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/
//   Submit the screenshot of your solution after being put through the codility grader.

var x = 10;   
var y = 85;
var d = 30;
var jump = 0;

function frogJump(x,y,d){
    if ((x > 1 && y > 1 && d > 1) && (x < 1000000000 && y < 1000000000 && d < 1000000000)){
        jump = 0;
    }
    if (x < y){
        var numberOfJumps = ( (y-x) < d ); 
        numberOfJumps = Math.floor(((y-x)/d)+1);
        return numberOfJumps
    }
    else {
        return numberOfJumps;
  }
}
         frogJump(10, 85, 30);

//   ANSWER: 3

// 10. (Optional) Solve https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
//   Submit a screenshot of your solution after being put through the codility grader.
