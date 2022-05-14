const products = [{
        title: "Uva Crimson",
        price: 8.99,
        category: "Frutas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Banana",
        price: 5.69,
        category: "Frutas",
        image: "./img/products/product_2.svg",
        imageDescription: "",
    },
    {
        title: "Mamão",
        price: 4.99,
        category: "Frutas",
        image: "./img/products/product_3.svg",
        imageDescription: "",
    },
    {
        title: "Maçã",
        price: 9.2,
        category: "Frutas",
        image: "./img/products/product_4.svg",
        imageDescription: "",
    },
    {
        title: "Refrigerante",
        price: 8.99,
        category: "Bebidas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Vinho",
        price: 8.99,
        category: "Bebidas",
        image: "./img/products/product_6.svg",
        imageDescription: "",
    },
    {
        title: "Água Tônica",
        price: 8.99,
        category: "Bebidas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Água de coco",
        price: 8.99,
        category: "Bebidas",
        image: "./img/products/product_8.svg",
        imageDescription: "",
    },

    {
        title: "Sabonete",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_9.svg",
        imageDescription: "",
    },

    {
        title: "Detergente",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_10.svg",
        imageDescription: "",
    },

    {
        title: "Limpa superfícies",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_11.svg",
        imageDescription: "",
    },

    {
        title: "Lustra Móveis",
        price: 8.99,
        category: "Higiene",
        image: undefined,
        imageDescription: "",
    },
];


/* const body = document.querySelector("body") */


const body = document.querySelector("body")
const mainContainer = document.createElement("main")
mainContainer.classList.add("container")

const sectionProduto = document.createElement("section")
sectionProduto.classList.add("products-section")

/* const tituloFrutas = document.createElement("h1")
tituloFrutas.innerText = "Frutas" */

const mainFrutas = document.createElement("main")
mainFrutas.classList.add("products-content")

const listaFrutas = document.createElement("ul")

const tituloBebidas = document.createElement("h1")
tituloBebidas.innerText = "Bebidas"

const tituloHigiene = document.createElement("h1")
tituloHigiene.innerText = "Higiene"

const tituloFrutas = document.createElement("h1")
tituloFrutas.innerText = "Frutas"









function funCategorias(arrObjectis) {
    for (let i = 0; i < arrObjectis.length; i++) {


        if (arrObjectis[i].category == "Frutas") {

            let item = document.createElement("li")
            item.classList.add("product")

            let imagem = document.createElement("img")
            imagem.src = `${arrObjectis[i].image}`
            imagem.classList.add("product-img")



            let mainProduct = document.createElement("main")
            mainProduct.classList.add("product-main")

            let title = document.createElement("h1")
            title.classList.add("product-title")
            title.innerText = arrObjectis[i].title

            let categoria = document.createElement("h5")
            categoria.classList.add("product-category")
            categoria.innerText = arrObjectis[i].category

            let strong = document.createElement("strong")
            strong.classList.add("product-price")
            strong.innerText = `R$ ${arrObjectis[i].price}`


            item.appendChild(imagem)

            mainProduct.appendChild(title)
            mainProduct.appendChild(categoria)
            mainProduct.appendChild(strong)
            item.appendChild(mainProduct)
            listaFrutas.appendChild(item)

        }



    }

}


body.appendChild(mainContainer)
mainContainer.appendChild(sectionProduto)
sectionProduto.appendChild(tituloFrutas)

mainFrutas.appendChild(listaFrutas)
sectionProduto.appendChild(mainFrutas)

sectionProduto.appendChild(tituloBebidas)
sectionProduto.appendChild(tituloHigiene)

funCategorias(products)