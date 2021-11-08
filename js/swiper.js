// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//         loop: true,
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     slidesPerView: 3,
//     spaceBetween: 10,
//     // init: false,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },


//     breakpoints: {
//         620: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         680: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//         920: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//         },
//         1240: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//         },
//     }
// });

var swiper = new Swiper('.swiper-container', {

    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 10,


    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});