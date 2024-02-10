
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];


//modificando elementos
// - add event listeners
// red color


redColor.addEventListener("click" , function(){

cartButton.style.background = "red";
itemTag.style.backgroundColor ="red";
imageCard.style.backgroundImage = 'url(https://i.pinimg.com/originals/89/12/30/891230e3e71ce4005625f5b9084f2b23.jpg)';

});


redColor.addEventListener("click" , function(){

    cartButton.style.background = "red";
    itemTag.style.backgroundColor ="red";
    imageCard.style.backgroundImage = 'url(https://i.pinimg.com/originals/89/12/30/891230e3e71ce4005625f5b9084f2b23.jpg)';
    
    });
    

    grayColor[0].addEventListener("click" , function(){

        cartButton.style.background = "gray";
        itemTag.style.backgroundColor ="gray";
        imageCard.style.backgroundImage = 'url(https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2016/11/BMW-R-1200-GS-2017-Colores-051.jpg)';
        
        });

        blackColor.addEventListener("click" , function(){

            cartButton.style.background = "black";
            itemTag.style.backgroundColor ="black";
            imageCard.style.backgroundImage = 'url(https://cdn.motor1.com/images/mgl/0bONW/s1/4x3/accesorios-bmw-motorrad-edition-black-para-bmw-r-1200-gs.webp)';
            
            });

            const cart = ()=>{
                cartButton.style.display = "none";
                feedbackBtn.style.display = "block";

            };
            cartButton.addEventListener("click", cart);

            const feedback = ()=>{
                cartButton.style.display = "none";
                feedbackBtn.style.display = "block";

            };
            feedbackBtn.addEventListener("click", feedback);