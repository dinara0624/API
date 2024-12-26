let box = document.querySelector(".box")
let API = "https://dummyjson.com/products"

async function getElement () {
    try {
        const res= await fetch(API)
        const data = await res.json()
        console.log(data);
        getSecond(data.products)
        
    } catch (error) {
        console.log(error);
        
    }
}
getElement()

function getSecond (products) {
    box.innerHTML = products.map((item) => {
        return `<div class="text">
        <img src="${item.thumbnail}"/>
        <p>${item.category}</p>
        <h1>${item.brand}</h1>
        <p>${item.price}</p>
        </div>`
    }).join("")
}