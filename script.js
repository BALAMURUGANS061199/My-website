const btnCart =document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const close=document.querySelector("#cart-close");

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});
close.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener("DOMContentLoaded",loadfood);

function loadfood()
{
    loadcontent();
}
function loadcontent()
{
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });
    let Quantity=document.querySelectorAll('.cart-quantity');
    Quantity.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });
}
//remove Item
function removeItem()
{
    if(confirm('Are you Sure to Remove')){
   this.parentElement.remove();
    }
}
//Change values not accessed
function changeQty()
{
    if(isNaN(this.value)|| this.value<1)
    {
        this.value=1;
    }
}
