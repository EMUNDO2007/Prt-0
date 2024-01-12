const izq = document.querySelector(".izq"),
der = document.querySelector(".der"),
slider = document.querySelector(".slider");
menu = document.querySelector(".bars-menu");
cover = document.querySelector(".cover");
carrusel = document.querySelector(".carrusel");
main = document.querySelector(".main")
op = 0;
img= 25;
cont = 0;

        izq.addEventListener("click",()=>{
            if(cont < 1){
                cont = 4;
                op = 100
                slider.style.transform = `translate(-${op}%)`
            }
            op -= img;
            cont--;
            console.log(cont)
            slider.style.transform = `translate(-${op}%)`}
        );
        der.addEventListener("click",derecha=()=>{
            if(cont > 2){
                cont = 0
                op = 0
                slider.style.transform = `translate(${op}%)`
            }else{
            cont++;
            console.log(cont)
            op += img;
           console.log(op)
            slider.style.transform = `translate(-${op}%)`}
            
        });
         
        setInterval(()=>{
            derecha();
        },6000)

        menu.addEventListener("click",()=>cambiar())
cambiar = ()=>{main.classList.toggle("revelar")};


const line1 = document.querySelector(".line1__bars-menu");
const line2 = document.querySelector(".line2__bars-menu");
const line3 = document.querySelector(".line3__bars-menu");

menu.addEventListener("click",()=>{
    line1.classList.toggle("activeline1__bars-menu");
    line2.classList.toggle("activeline2__bars-menu");
    line3.classList.toggle("activeline3__bars-menu");

})