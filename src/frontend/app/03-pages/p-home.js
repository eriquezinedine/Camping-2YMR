
    const header = document.querySelector('header')
    const btnMovil = document.querySelector('.nav-movil__menu')
    const nav = document.querySelector('.nav-movil__lista')
    const corazon =document.querySelectorAll(".corazon");
    const content_rotate_movil = document.querySelector('.content-line__background');
    const content_line = document.querySelector('.content-line');
    const grid_explore =document.querySelector('.grid_explore ')
    const up = document.querySelector('.up');
    // const barra = document.querySelector('.list-enlace').setAttribute("title") NO FUNCIONA

    const lista_li =document.querySelectorAll('.content-list__item')
window.addEventListener('scroll',()=>{
    
    header.classList.toggle('menuPrimary',window.scrollY>0);
    if(window.scrollY>0){
        if(header.classList.contains('menuPrimary')){
            up.style.background ="var(--color_white)";
            lista_li.forEach( element=>{
                element.classList.add('efect')
            })
        }
    }else{
        if(!header.classList.contains('menuPrimary')){
            up.style.background ="var(--color_primery)";
        }
        lista_li.forEach( element=>{
            element.classList.remove('efect')
        })
    }
})

btnMovil.addEventListener('click',()=>{
    header.classList.toggle('efectHeader');
    nav.classList.toggle('desplegar');
    content_rotate_movil.classList.toggle('efect-rotate');
    content_line.classList.toggle('dis-block');
})

grid_explore.addEventListener('click',(e)=>{
    // let puntero= e.target;
    let clases = e.target.classList
    if( clases.contains("explore-white")){
        clases.toggle('rojo-corazon')
    }
    // if(clases.contains("card-explore")){
    //     puntero.children[0].children[2].classList.toggle('rojo-corazon');
    // }

})

// const agregar_corazon = (puntero)=>{
    
//     switch (puntero) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }