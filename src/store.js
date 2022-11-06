import { reactive } from 'vue'

export const store = reactive({
    cartItems: [],
    cartItemsQuantity: [],
    isCartEmpty: true,
    cartSum: 0,
    isCartOpen: false,
    cartValue: 0,
    //    productValue: 0,
    //    destination: store.destinations
})

