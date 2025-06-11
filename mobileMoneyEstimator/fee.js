function estimateTransactionFee() {
    const amountStr = prompt("Unatuma Ngapi? (KES):");
    const amount = parseInt(amountStr);

    if (!amount || amount <= 0) {
        console.log("Failed to Convert");
        console.log(amountStr);
        return;
    }

    console.log("Conversion Success");

    let fee = (amount * 1.5) / 100;

    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    const total = amount + fee;

    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}`);
    console.log("\nSend Money Securely!");
}


estimateTransactionFee();
