
            // const depositAmount = document.getElementById('depositAmount').value;
            // const depositNumber = parseFloat(depositAmount);

            // const currentDeposit = document.getElementById('currentDeposit').innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = depositNumber + currentDepositNumber;
            // document.getElementById('currentDeposit').innerText = totalDeposit;

            // const currentBalance = document.getElementById('currentBalance').innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBlance = depositNumber + currentBalanceNumber;
            // document.getElementById('currentBalance').innerText = totalBlance;
            

        //Login Button EventHandler
        const loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', function () {
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = 'none';
            const transactionArea = document.getElementById('transaction-area');
            transactionArea.style.display = 'block';
        })

        //Deposit Button EventHandler
        const depositBtn = document.getElementById('addDeposit');
        depositBtn.addEventListener('click', function () {
            const depositNumber = getInputNumer('depositAmount');
            if (depositNumber < 0) {
                alert('Deposit Number must be positive!')
            }
            else {
                updateSpanText('currentDeposit', depositNumber);
                updateSpanText("currentBalance", depositNumber);
                document.getElementById('depositAmount').value = "";
            }



        })
        //Withdraw Button EventHandler
        const withdrawBtn = document.getElementById('addWithdraw');
        withdrawBtn.addEventListener('click', function () {
            const withdrawNumber = getInputNumer('withdrawAmount');

            updateSpanText('currentwithdraw', withdrawNumber);
            updateSpanText('currentBalance', -1 * withdrawNumber);

            document.getElementById('withdrawAmount').value = "";

        })

        function getInputNumer(id) {
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }

        function updateSpanText(id, addedNumber) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = addedNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }