const products = [
    {
      id: "rec43w3ipXvP28vog",
      title: "high-back bench",
      company: "ikea",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-1.jpeg",
      price: 9.99,
      color: "red",
      available_colors: ["yellow", "black", "white"],
    },
    {
      id: "rec4f2RIftFCb7aHh",
      title: "albany table",
      company: "marcos",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-2.jpeg",
      price: 79.99,
      color: "blue",
      available_colors: ["#6c63ff", "pink", "green"],
    },
    {
      id: "rec8kkCmSiMkbkiko",
      title: "accent chair",
      company: "caressa",
      qu: 1,
      image: "https://www.course-api.com/images/store/product-3.jpeg",
      price: 25.99,
      color: "teal",
      available_colors: ["yellow", "pink", "black"],
    },
  ];

let container = document.querySelector(".list-group");

function showItem() {
    container.innerHTML = products.map((item) => {
        let {title, color, avalible_colors} = item;
        return `
        <li>
            <p>${title}</p>
            <div style="background-color:${color}"> </div>
            ${avalible_colors.map((color_item) => {
                return `
                    <div style ="background-color:${color_item}"> </div>
                        `;          
                })}
        </li>



        `;
    });
}

  /////
  let items_color_avcolor = products.map((item) => {
    return {
        title: item.title,
        color: item.color,
        available_colors: item.available_colors
    };
});
console.log(items_color_avcolor);

/// Create a new array that only has the title of the products

let title_of_products = products.map((item) => item.title)

console.log(title_of_products)


// check the price of each item and if it is avoce $200 then add property called Expensive: true

let Expensive = products.map((item) => {
    if(item.price > 200) {
        return {...item,Expensive: "true"};
    }
    return {...item,Expensive:"false"};
});

console.log(Expensive)

//// update the title of each product in a way that it will containe the compainy name

let Company_name = products.map((item) => {
    return {...item,title:item.title+ "-"+ item.company};
});

console.log(Company_name);
