// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)


const app = new Vue ({

   el: '#app',

   data: {
       text: "This person does not exists:",
       image: 'https://thispersondoesnotexist.com/image',
       altTag: 'unexisting person',
       source: 'https://thispersondoesnotexist.com/',
       
   },

   methods: {
    reloadPage: function (){
      location.reload()
    }
  }

})