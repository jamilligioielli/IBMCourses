import faker from 'faker'


// This code below is not very good, because
// it assumes that a element exists when it might not exist at all
// and the products team cant garantee that it exists
// document.querySelector('#dev-products').innerHTML = products

const mount = (el) => {
	let products = ''

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName()
		products += `<div> ${name}</div>`
	}

	el.innerHTML = products
}

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINATELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV == 'development') {
	const el = document.querySelector('#dev-products')

	// Assuming our container doesn't have an element with
	// id 'dev-products'...
	if (el) {
		// We are probably running in isolation
		mount(el)
	}
}



// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app and that is
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DON'T WANT try to immediately render the app
// when exporting the function, now it is up to the container to decide if it will use it or not
export { mount };