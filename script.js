let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
function sum(a,b){
	let num1 = parseInt(a); 
	let num2 = parseInt(b);
	let result = num1 + num2;

    if(result==0 || result<0 || result>0)
	{
		return result;
	}
	else{
		return "Invalid input. Please enter a valid number."
	}
}

alert(sum(input1, input2));