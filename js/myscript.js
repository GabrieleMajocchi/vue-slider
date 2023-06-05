const { createApp } = Vue;

createApp({
    data() {
        return {
            // ---Create the array---
            images: [
                {image: 'img/01.jpg',
                title: 'Monte Everest',
                text: "L'Everest è la montagna più alta del mondo, situata nella catena dell'Himalaya, al confine tra il Nepal e il Tibet. Con un'altitudine di 8.848 metri, è una delle sfide più ambite per gli alpinisti di tutto il mondo. La sua maestosità e la sua bellezza lo rendono un'icona dell'avventura e della conquista umana.",},
                {image: 'img/02.jpg',
                title: 'Monte Kilimanjaro',
                text: "Il Kilimanjaro è il punto più elevato dell'Africa, situato in Tanzania. Nonostante la sua altitudine relativamente modesta di 5.895 metri, il Kilimanjaro è famoso per la sua imponente sagoma solitaria che emerge dalle pianure circostanti. È anche uno dei pochi luoghi al mondo dove è possibile trovare neve e ghiaccio vicino all'equatore.",},
                {image: 'img/03.jpg',
                title: 'Monte McKinley (Denali)',
                text: "Il Monte McKinley, noto anche come Denali, si trova in Alaska, negli Stati Uniti. Con i suoi 6.190 metri, è la montagna più alta del Nord America. Il Denali è caratterizzato da pareti rocciose verticali e da enormi ghiacciai, che rappresentano una sfida formidabile per gli scalatori. La sua bellezza selvaggia e remota attira numerosi avventurieri da tutto il mondo.",},
                {image: 'img/04.jpg',
                title: 'Mont Blanc',
                text: "Il Mont Blanc è la montagna più alta delle Alpi, con un'altitudine di 4.809 metri. Situato al confine tra Francia e Italia, offre panorami spettacolari e una grande varietà di percorsi per gli appassionati di escursionismo e scalata. La sua fama e l'accessibilità relativa lo rendono una delle mete più popolari per gli amanti della montagna in Europa.",},
                {image: 'img/05.jpg',
                title: "Monte Fuji",
                text: "Il Monte Fuji è un'icona nazionale del Giappone e uno dei vulcani più famosi al mondo. Situato a circa 100 chilometri a sud-ovest di Tokyo, il Fuji si innalza fino a un'altitudine di 3.776 metri. La sua forma conica perfetta, le foreste rigogliose e i laghi pittoreschi attirano visitatori e artisti da secoli. È anche una meta molto popolare per gli escursionisti che vogliono raggiungere la sua cima e ammirare l'alba spettacolare.",}
        ],
            activeIndex : 0,
        }
    },
    methods: {
        previous(){
            if ( this.activeIndex === 0){
                this.activeIndex = this.images.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        next(){
            if ( this.activeIndex === this.images.length - 1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        activateImage(imageindex){
            this.activeIndex = imageindex;
        }
    }
}).mount('#app');





// // ---Adding timed function---
// let timer = setInterval (next, 3000);

// // ---Adding stop to timed function---
// const stop = document.querySelector('.fa-stop');
// stop.addEventListener('click', function(){
//     clearInterval(timer);
// });

// // ---Adding play to timed function---
// const play = document.querySelector('.fa-play');
// play.addEventListener('click', function(){
//     clearInterval(timer);
//     timer = setInterval (next, 3000);
// });

// // ---Adding reverse timed function---
// let rev = true;
// const reverse = document.querySelector('.fa-rotate-left');
// reverse.addEventListener('click', function(){
//     if (rev === true){
//         clearInterval(timer);
//         timer = setInterval (previous, 3000);
//         rev = false;
//     }else{
//         clearInterval(timer);
//         timer = setInterval (next, 3000);
//     }
// });
