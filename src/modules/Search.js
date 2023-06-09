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
        console.log(this.searchInputField.value);

        //get result div container
        this.resultDiv = document.querySelector(".search-overlay__results");
        console.log(this.resultDiv);

   

        //get your events here
        this.events();
        this.previousValue;
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
        this.searchInputField.addEventListener("keyup", this.typingLogic.bind(this));

    }
    
    //3. methods
    typingLogic() {

        if(this.searchInputField.value != this.previousValue) {
            clearTimeout(this.timerHistory);

            if(this.searchInputField.value) {
             // add spinner as soon as typing is done, the conditional prevents the spinner from running more than once as the user is manaed. This is done by creating a state to indicate when the spinner has loaded once.
                if(!this.isSpinner) {
                    // add spinner as soon as typing is done
                    this.resultDiv.innerHTML = "<div class='spinner-loader'> </div>"        
                    this.isSpinner = true;
                } 
                this.timerHistory = setTimeout(this.getResults.bind(this), 2000);
            }else{
                this.resultDiv.innerHTML = "";
                this.isSpinner = false;
            }

        }
        console.log(this.searchInputField.value)
        this.previousValue = this.searchInputField.value
    }

    getResults(){
        $.getJSON(site_data.mySite + 'http://localhost/nonsoandre/wp-json/wp/v2/posts?search=' + this.searchInputField.value, data => {
            this.resultDiv.innerHTML = `
                <h2 class='search-overlay__section-title'> General Information </h2>
                
                    ${data.length ? "<ul class='link-list min-list'>" : "<h3> No information matches your search</h3>"}
                    ${data.map(item => `<li><a href='${item.link}'>${item.title.rendered}</a><li>`).join('')}
                    ${data.length ? "</ul>" : ""}
            `
        })
        //add the search result html structure,
        this.isSpinner = false;
    }

    keyPressDispatcher(e) { // function to open or close search area on keypress for S and esc keys
        if(e.keyCode == 83 && this.isOpenOverlay == false && !$("input, textarea").is(':focus')){
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