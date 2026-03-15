var search = document.querySelector(".search")
var productContainer = document.querySelector(".product-grid")
var products = productContainer.querySelectorAll(".card")

search.addEventListener("keyup", function(){

    var enteredValue = event.target.value.toUpperCase()

    for(var i=0;i<products.length;i++)
    {
        var productName = products[i].querySelector("h3").textContent

        if(productName.toUpperCase().indexOf(enteredValue) < 0)
        {
            products[i].style.display="none"
        }
        else
        {
            products[i].style.display="block"
        }
    }

})
var checkboxes = document.querySelectorAll(".filter")
var products = document.querySelectorAll(".card")

checkboxes.forEach(function(box){

    box.addEventListener("change", filterProducts)

})

function filterProducts(){

    var selected = []

    checkboxes.forEach(function(box){

        if(box.checked)
        {
            selected.push(box.value)
        }

    })

    products.forEach(function(product){

        var type = product.dataset.type

        if(selected.length == 0 || selected.includes(type))
        {
            product.style.display = "block"
        }
        else
        {
            product.style.display = "none"
        }

    })

}