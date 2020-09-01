
// Login Button Event Handleer

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
	const loginArea = document.getElementById('login-area');
	loginArea.style.display = "none";

	const transActionArea = document.getElementById('transaction-area');
	transActionArea.style.display = "block";
})


// Deposit Button Event Handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
	const newDepositAmount = document.getElementById("depositAmount").value;
	const depositNumber = parseFloat(newDepositAmount);
	

	


	updateSpanText("currentDeposit", depositNumber);

	updateSpanText("currentBalance", depositNumber);

	document.getElementById("depositAmount").value = "";


	
})


function updateSpanText(id, depositNumber){
	
	const current = document.getElementById(id).innerText;
	const currentNumber =  parseFloat (current);
	const total = depositNumber+currentNumber;
	document.getElementById(id).innerText = total;
}
