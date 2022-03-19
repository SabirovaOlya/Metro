window.addEventListener('DOMContentLoaded', () => {

 //                   /* <!--**************--- LOADER ---************--> */ 

 const loadd = document.querySelector('.loader');

    setTimeout(()=>{
        loadd.style.opacity = 0;
        setTimeout(()=>{
            loadd.style.display = 'none'
        },1000)
    }, 1500)

//                     /*****************---SCROLL---****************/

let top = document.querySelector('.scroll');

// window.addEventListener('scroll',()=>{
//     if(window.scrollY > 500){
//         top.classList.add('openn')
//     }else{
//         top.classList.remove('openn')
//     }
// })

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        top.style.display = 'flex';
    }
    else{
        top.style.display = 'none';
    }
})

//                     /*****************---HEADER--PHONE---****************/
// ***---Elements---***

let barr = document.querySelector('.barr'),
xix = document.querySelector('.xix'),
headerPhone = document.querySelector('.header-phone'),
adddBar = document.querySelector('.addd-bar');

// ***---Events---***

barr.addEventListener('click', ()=>{
barr.style.display = 'none';
xix.style.display = 'flex';
adddBar.style.top = '80px';
headerPhone.style.borderBottom = 0;
console.log('dsjfklsjd;flsa')
})

xix.addEventListener('click', ()=>{
barr.style.display = 'flex';
xix.style.display = 'none';
adddBar.style.top = '-400px';
headerPhone.style.borderBottom = '2px solid #000';
})

// shadow

let minheader = document.querySelector('.header-phone'),
    bigheader = document.querySelector('.header-big');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 10){
        bigheader.classList.add('shadow');
        minheader.classList.add('shadow');
    }
    else{
        bigheader.classList.remove('shadow');
        minheader.classList.remove('shadow');
    }
})

/* <!--******************************************* --- CATEGORIES --- ***************************************--> */
// ***---Elements---***
let categoty = document.querySelector('.categories-clickk'),
    blackTable = document.querySelector('.black-table'),
    catMenu = document.querySelector('.cat-menu'),
    catBack = document.querySelector('.cat-back'),
    allTable = document.querySelector('.all-table'),
    allClickk = document.querySelector('.all-clickk')


// ***---Events---***
// blackTable.addEventListener('click', ()=>{
//     if(categoty.classList.contains('close')){
//         categoty.classList.remove('close');
//         categoty.classList.add('open')
//         console.log('open')
//     }
// })
// blackTable.addEventListener('click', ()=>{
//         if(categoty.classList.contains('open')){
//             categoty.classList.remove('open');
//             categoty.classList.add('close')
//             console.log('close')
//         }
// })
blackTable.addEventListener('click', ()=>{
    if(categoty.style.display == 'none'){
        categoty.style.display = 'flex'
        catMenu.style.display = 'none'
        catBack.style.display = 'flex'
    }
    else{
        categoty.style.display = 'none'
        catMenu.style.display = 'flex'
        catBack.style.display = 'none'
    }
})

allTable.addEventListener('click', ()=>{
    if(allClickk.style.display == 'none'){
        allClickk.style.display = 'flex'
    }else{
        allClickk.style.display = 'none'
    }
})

// *******************--- CARUSEL ---**************

let points = document.querySelectorAll('.car-point'),
    caruselImgs = document.querySelectorAll('.carusel-img'),
    caruselTexts = document.querySelectorAll('.titles');

points.forEach((items,index,array)=>{
    array[index].addEventListener('click',()=>{
        points.forEach((a)=>{
            a.classList.remove('black')
        });
        caruselTexts.forEach((b)=>{
            b.style.display = 'none';
        })
        caruselImgs.forEach((c)=>{
            c.style.display = 'none';
        })

        array[index].classList.add('black');
        caruselImgs[index].style.display = 'flex';
        caruselTexts[index].style.display = 'flex';
    })
})




});