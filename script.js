document.getElementById('buy-now').addEventListener('click', function() {
    const receiptContainer = document.getElementById('receipt-container');
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString() + '' + currentDate.toLocaleTimeString();

    dateElement.textContent = formattedDate;
    receiptContainer.style.display = 'block';
});