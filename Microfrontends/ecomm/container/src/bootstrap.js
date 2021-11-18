// those names indicate particular things about the functionality
// and it makes easier to understand what it is about than just importing ./src/index for each one
import { mount  as productsMount} from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('Container!')

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'))