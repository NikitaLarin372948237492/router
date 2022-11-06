import { store } from '@/store.js';
import clothes from '@/clothes.json';
export function addCartItem(prodId, option) {
    let buffObj;
    let check = false;
    let itemNum;
    buffObj = { name: clothes[option][prodId].name, price: clothes[option][prodId].price, image: clothes[option][prodId].src };
    for (let i = 0; i < store.cartItems.length; i++) {
        if (store.cartItems[i].name == buffObj.name && store.cartItems[i].price == buffObj.price) {
            check = true;
            itemNum = i;
        }
    }

    if (check) {
        store.cartItemsQuantity[itemNum]++;
    }
    else {
        store.cartItems.push(buffObj);
        store.cartSum += buffObj.price;
        store.isCartEmpty = false;
        store.cartValue++;
        store.cartItemsQuantity.push(1);
    }
    addAddToCart();
}

export function deleteCartItem(cartItemId) {
    store.cartItems.splice(cartItemId, 1);
    store.cartItemsQuantity.splice(cartItemId, 1);
    addAddToCart();
}

export function openCloseCart() {
    store.isCartOpen = !store.isCartOpen;

}
export function addAddToCart() {
    store.cartSum = 0;
    store.cartValue = 0;
    for (let i = 0; i < store.cartItems.length; i++) {
        store.cartSum += store.cartItems[i].price * store.cartItemsQuantity[i];
        store.cartValue += parseInt(store.cartItemsQuantity[i]);
    }
}