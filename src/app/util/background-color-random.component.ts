export class BackgroundColorRandomComponent {

  coloor: any={};

  constructor() {
        this.setBackgroundColor();
   }

   setBackgroundColor (){
            let i =0;
            let cont=0;
            let resultado:string;
 
            resultado= `rgba(${Math.floor(Math.random()*255)},
                                        ${Math.floor(Math.random()*255)},
                                        ${Math.floor(Math.random()*255)},
                                        ${(Math.random()*1).toFixed(2)})`;
                                 this.coloor={'color': resultado};
         // console.log(this.coloor);
} 
}
