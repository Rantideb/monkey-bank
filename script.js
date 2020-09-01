
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
	
	const depositNumber = getInputNumer ("depositAmount");
	

	


	updateSpanText("currentDeposit", depositNumber);

	updateSpanText("currentBalance", depositNumber);

	document.getElementById("depositAmount").value = "";


	
})

//  Withdraw Button Event handler 


const witthdrawBtn = document.getElementById("addWithdraw");
witthdrawBtn.addEventListener("click", function (){
	const WithdrawAmount = getInputNumer ("withdrawAmount");

	updateSpanText ("currentWithdraw", WithdrawAmount);
	updateSpanText ("currentBalance", -1 *WithdrawAmount);

	
	document.getElementById("withdrawAmount").value = "";
})


// Get Input Function

function getInputNumer(id){
	const InputValue = document.getElementById(id).value;
	const InputValueNumer = parseFloat (InputValue);
	return InputValueNumer;
}

// Update Span with calculation Function

function updateSpanText(id, depositNumber){
	
	const current = document.getElementById(id).innerText;
	const currentNumber =  parseFloat (current);
	const total = depositNumber+currentNumber;
	document.getElementById(id).innerText = total;
}
