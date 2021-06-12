1.
let a = 23
  let b = 81
  a = a + b
  b = a - b
  a = a - b


2.
let number1 = 1234
let number2 = (number1-number1%10)/10 
let number3 = number1%10
if (number1%10 === 0 && number1<=10) {
    console.log(number1)
}
else {
    console.log (number3+number2);
    
}





3.
let number1 = 45
let number2 = -12
let number3 = 0
let number4 = 3
let number5 = -15

let result = (number1+number2+number3+number4+number5)/5


4.
let a= 60;
let b= 56;
let c= 112;
if (a<b && a<c)
{
        if (b<c)
        {
            console.log(a + ", " + b + ", " +c);
        }
        else
        {
            console.log(a + ", " + b + ", " +c);
        }
}
else if (b<a && b < c)
{
        if (a<c)
        {
             console.log(b + ", " + a + ", " +c);
        }
        else
        {
             console.log(b + ", " + c + ", " +a);
        }
}
else if (c<a && c<b)
{
        if (a<b)
        {
            console.log(c + ", " + a + ", " +b);
        }
        else
        {
            console.log(c + ", " + b + ", " +a);
        }
}  



5.
var n = +prompt();

var i = 0
var j = 0

if (n % 2 === 0 || !Math.floor(n / 10)){
		i += 1
	}
if (n % 3 === 0  || n % 10 === 1){
		j += 1 ;
	}


