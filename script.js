const app = new Vue ({


  el: '#app',
  data: {

    counterPhoto: 0,
    arrPhotos: [
      'img/judo.jpg',
      'img/karate.jpg',
      'img/muaythai.jpg',
      'img/jiujitsu.jpg'
    ],

    counterNames: 0,
    arrNames: [
      'Judo',
      'Karate',
      'Muay-Thai',
      'Jiu-Jitsu'
    ]
    
    
  


  },
  methods: {

    nextPic(){
      this.counterPhoto++;
      if(this.counterPhoto === this.arrPhotos.length) this.counterPhoto = 0;
    },

    prevPic(){
      this.counterPhoto--;
      if(this.counterPhoto < 0) this.counterPhoto = this.arrPhotos.length - 1;
    },

    showName(){
      this.counterNames++;
      if(this.counterNames === this.counterPhoto) this.counterNames;
    }

    

    

   




  }
});
