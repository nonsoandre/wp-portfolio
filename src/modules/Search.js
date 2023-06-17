import $ from 'jquery'

class Search {
    //1. Describe the object
    constructor(){
        //get open icon element
        this.openBtn = document.querySelector("#js-search-trigger");

        //get close icon element
        this.closeBtn = document.querySelector(".search-overlay__close");

        //get the parent overlay class
        this.searchOverlay = document.querySelector(".search-overlay");
        console.log(this.searchOverlay.classList);

        //get search input field
        this.searchInputField = document.querySelector("#search-term");
        console.log(this.searchInputField);

        //get result div container
        this.resultDiv = document.querySelector(".search-overlay__results");
        console.log(this.resultDiv);

   

        //get your events here
        this.events();

        //key state varianble
        this.isOpenOverlay = false;
        //state for timeout
        this.timerHistory;
        //spinner state
        this.isSpinner = false;
    }

    //2. events
    // your add listener events that listens for each of the elements in constructor
    events(){
        this.openBtn.addEventListener("click", this.openOverlay.bind(this));
        this.closeBtn.addEventListener("click", this.closeOverlay.bind(this));
        document.addEventListener("keydown", this.keyPressDispatcher.bind(this));
        //tiimer event
        this.searchInputField.addEventListener("keydown", this.typingLogic.bind(this));
    }
    
    //3. methods
    typingLogic() {
        clearTimeout(this.timerHistory);
        // add spinner as soon as typing is done
        if(!this.isSpinner) {
            // add spinner as soon as typing is done
               this.resultDiv.innerHTML = "<div class='spinner-loader'> </div>"        
               this.isSpinner = true;
           } 
        this.timerHistory = setTimeout(this.getResults.bind(this), 2000);

    }

    getResults(){
        //add the search result html structure,
        this.resultDiv.innerHTML = "<div>Hello world</div>";
    }

    keyPressDispatcher(e) { // function to open or close search area on keypress for S and esc keys
        if(e.keyCode == 83 && this.isOpenOverlay == false){
            this.openOverlay();
        }

        if(e.keyCode == 27 && this.isOpenOverlay){ //for esc key
            this.closeOverlay();
        }
    }

    openOverlay() {
       this.searchOverlay.classList.add("search-overlay--active");
       document.querySelector("body").classList.add("body-no-scroll");
       
       // set state
       this.isOpenOverlay = true;
    }

    closeOverlay() {
        // console.log(this.searchOverlay.classList);
        // console.log(this.searchOverlay);
        this.searchOverlay.classList.remove("search-overlay--active");
        document.querySelector("body").classList.remove("body-no-scroll");
        
        // set state 
        this.isOpenOverlay = false;
    }
}


export default Search