
  const products = [
    {
      id: "rec43w3ipXvP28vog",
      title: "high-back bench",
      company: "ikea",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-1.jpeg",
      price: 9.99,
    },
    {
      id: "rec4f2RIftFCb7aHh",
      title: "albany table",
      company: "marcos",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-2.jpeg",
      price: 79.99,
    },
    {
      id: "rec8kkCmSiMkbkiko",
      title: "accent chair",
      company: "caressa",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-3.jpeg",
      price: 25.99,
    },
  ];


  function increase(id) {
    // Find the product by its ID
    let productToUpdate = products.find((item) => item.id === id);
    
    // Check if the product exists
    if (productToUpdate) {
        productToUpdate.qu++; // Increment the quantity
        console.log(productToUpdate, "after product");
        showList(products); // Assuming this function updates the displayed list
    } else {
        console.log("Product not found");
    }

    console.log(productToUpdate, "after update");
}


/// show the total price of all the item;

function FindPrice () {
  let prices = []
  for(i=0;i < products.length; i ++) {
    prices.push(products[i].price);
  }
    return prices
}

console.log(FindPrice())

function TotalPrice() {
  let total = 0; 
  for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].qu; 
  }
  return total; 
}

console.log(TotalPrice()); 
