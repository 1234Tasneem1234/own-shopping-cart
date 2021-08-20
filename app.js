function handleProductPriceButton(product, isPositive, productPrice) {
    const productTotal = document.getElementById(product + '-total');
    const productQuantity = document.getElementById(product + '-number');
    const previousProductQuantity = parseInt(productQuantity.value);
    if (isPositive == true) {
    productQuantity.value = previousProductQuantity + 1;
    productTotal.innerText = productPrice * parseInt(productQuantity.value);
    }
    else {
        if (productQuantity.value > 0) {
        productQuantity.value = previousProductQuantity - 1;
        productTotal.innerText = parseInt(productTotal.innerText) - productPrice;
        };
    };
};

function getInputValue(product) {
    const productQuantity = document.getElementById(product + '-total');
    const productQuantityNum = parseInt(productQuantity.innerText);
    return productQuantityNum;
};

function calculateTotal() {
    const phoneTotal = getInputValue('phone');
    const caseTotal = getInputValue('case');
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = phoneTotal + caseTotal;
    const tax = document.getElementById('tax');
    tax.innerText = parseFloat(subTotal.innerText) / 10;
    const total = document.getElementById('total-price');
    total.innerText = parseInt(subTotal.innerText) + parseFloat(tax.innerText);
}
/***************************************************************************
                            handle phone area.. 
***************************************************************************/
//handle phone plus..
document.getElementById('phone-plus').addEventListener('click', function () {
    handleProductPriceButton('phone', true, 1219);
    calculateTotal();
});
//handle phone Minus..
document.getElementById('phone-minus').addEventListener('click', function (){
    handleProductPriceButton('phone', false, 1219);
    calculateTotal();
});
/***************************************************************************
                        handle phone-case area.. 
***************************************************************************/
//handle case plus..
document.getElementById('case-plus').addEventListener('click', function () {
    handleProductPriceButton('case', true, 59);
    calculateTotal();
});
//handle case minus..
document.getElementById('case-minus').addEventListener('click', function (){ 
    handleProductPriceButton('case', false, 59);
    calculateTotal();
});

document.getElementById('checkout-btn').addEventListener('click', function () {

    if (document.getElementById('total-price').innerText == 0) {
        document.getElementById('complete-btn').classList.add('d-none');
        document.getElementById('cancel-btn').innerText = "Order";
        document.getElementById('order').innerText = "Order Something First..";
        document.getElementById('cancel-btn').classList.remove('btn-danger');
        document.getElementById('cancel-btn').classList.add('btn-primary');
    }

        document.getElementById('order-sub-total').innerText = 'Subtotal Price:' + '  ' + '$' + document.getElementById('sub-total').innerText;
    document.getElementById('order-tax').innerText = 'Tax Total:' + '  ' + '$' + document.getElementById('tax').innerText;
    document.getElementById('order-total').innerText = 'Total Price:' + '  ' + '$' + document.getElementById('total-price').innerText;

    document.getElementById('order-total').style.color = 'red';
    document.getElementById('order').classList.add('d-none');
});
document.getElementById('complete-btn').addEventListener('click', function () {
    document.getElementById('sure').classList.remove('d-none');
    document.getElementById('angry').classList.add('d-none');
});
document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('thanks').classList.remove('d-none');
    document.getElementById('sure').classList.add('d-none');
    document.getElementById('complete-btn').classList.add('d-none');
    document.getElementById('cancel-btn').innerText = "Go Back..";
    document.getElementById('cancel-btn').classList.remove('btn-danger');
    document.getElementById('cancel-btn').classList.add('btn-primary');
});
document.getElementById('no').addEventListener('click', function () {
    document.getElementById('angry').classList.remove('d-none');
    document.getElementById('sure').classList.add('d-none');
});

document.getElementById('total-cancel').addEventListener('click', function () {
    document.getElementById('case-number').value = 0;
    document.getElementById('case-total').innerText = 0;
    document.getElementById('phone-number').value = 0;
    document.getElementById('phone-total').innerText = 0;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('tax').innerText = 0;
    document.getElementById('sub-total').innerText = 0;
});