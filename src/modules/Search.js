import $ from 'jquery'

class Search {
    //1. Describe the object
    constructor(){
        //get open icon element
        this.openBtn = document.querySelector("#js-search-trigger");
        console.log(this.openBtn)

        //get close icon element
        this.closeBtn = document.querySelector(".search-overlay__close");
        console.log(this.closeBtn);

        //get the parent overlay class
        this.searchOverlay = document.querySelector(".search-overlay");
        console.log(this.searchOverlay.classList);

        //get your events here
        this.events();

    }

    //2. events
    // your add listener events that listens for each of the elements in constructor
    events(){
        this.openBtn.addEventListener("click", this.openOverlay.bind(this));
        this.closeBtn.addEventListener("click", this.closeOverlay.bind(this))
    }
    
    //3. methods
    openOverlay() {
       this.searchOverlay.classList.add("search-overlay--active");
    }

    closeOverlay() {
        // console.log(this.searchOverlay.classList);
        // console.log(this.searchOverlay);
        this.searchOverlay.classList.remove("search-overlay--active");
    }
}


export default Search