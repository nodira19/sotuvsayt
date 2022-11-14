const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/img/pngegg (3).png",
            },
            {
                code: "darkblue",
                img: "https://avatars.mds.yandex.net/i?id=a54a8ec5b86df2129e9bea0707a90670-4457466-images-thumbs&n=13",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "/img/pngegg (4).png ",
            },
            {
                code: "green",
                img: "/img/pngegg (3).png",


            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "/img/pngegg (1).png ",
            },
            {
                code: "green",
                img: "/img/pngegg (1).png ",
            },
        ],
    },
    {
        id: 4,
        title: "Creater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "/img/pngegg (2).png ",
            },
            {
                code: "lightgray",
                img: "/img/pngegg (1).png ",
            },
        ],
    },

    {
        id: 5,
        title: "hippie",
        price: 99,
        colors: [
            {
                code: "black",
                img: "/img/pngegg (2).png ",
            },
            {
                code: "lightgray",
                img: "/img/pngegg (1).png ",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the cuurent slide//
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product//
        choosenProduct = products[index];

        // change text of currentProduct//
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})