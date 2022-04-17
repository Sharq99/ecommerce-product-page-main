function B_Clicked(){
    document.getElementById("ATC").addEventListener("click", addCart_clicked());
    document.getElementById("plus").addEventListener("click", incItemAmount());
    document.getElementById("minus").addEventListener("click", decItemAmount());
    
}

function addCart_clicked(){
    let w2 = window.location.href = 'desktop-2.html';
    w2.fill();
    w2.multiplyAmount();
}

let item_Amount = 0;//item_Amount.oldValue;
document.getElementById("Amount").innerHTML = item_Amount;

function incItemAmount(){
    item_Amount++;
    fill();
    multiplyAmount();
}

function decItemAmount(){
    if(item_Amount === 0) item_Amount = 0;
    else item_Amount--;
    fill();
    multiplyAmount();
}

function fill() {
    document.getElementById("Amount").innerHTML = item_Amount;
    document.getElementById("cartAmount").innerHTML = item_Amount;
}

function trashCart(){
    window.location.href = 'desktop-3.html';
    item_Amount = 0;
    fill();
}

function multiplyAmount(){
    document.getElementById("multiply").innerHTML = `$125.00 x ${item_Amount}`;

    let amountResult = 125 * item_Amount;
    document.getElementById("result").innerHTML = `$${amountResult}.00`;
}

function imgPreview(){
    window.location.href = 'desktop-4.html';
}

function closePreview(){
    window.location.href = 'desktop-1.html';
}