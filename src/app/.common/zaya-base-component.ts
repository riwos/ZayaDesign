export class BaseComponent{

    constructor(){
       this.goToUpScroll();
    }

    goToUpScroll(){
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    }

    
}