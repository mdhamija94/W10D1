import warmUp, { htmlGenerator } from "./warmup";

const DOGS = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

class Dog {
  constructor() {
    this.dogLinkCreator();
    this.handleEnter();
    this.handleLeave();
  }

  dogBreeds(dogs) {
    let breeds = [];

    Object.keys(dogs).forEach(breed => {
      breeds.push(breed);
    });

    return breeds;
  }

  dogURLs(dogs) {
    let urls = [];

    Object.values(dogs).forEach(url => {
      urls.push(url);
    });

    return urls;
  }

  dogLinks(breed, url) {
    let listEl = document.createElement("li");
    listEl.classList.add('dog-link');
    listEl.classList.add('hide');
    let aTag = document.createElement("a")
    aTag.innerHTML = breed;
    aTag.setAttribute('href', url);
    listEl.appendChild(aTag);
    document.getElementsByClassName("drop-down-dog-list")[0].appendChild(listEl);
  }

  dogLinkCreator() {
    let breeds = this.dogBreeds(DOGS);
    let urls = this.dogURLs(DOGS);

    breeds.forEach( (breed, idx) => {
      this.dogLinks(breed, urls[idx]);
    });
  }

  handleEnter() {
    // debugger;
    let unorderedEL = document.getElementsByClassName("drop-down-dog-nav")[0];
    unorderedEL.addEventListener("mouseover", function () {
      // debugger;
      // e.currentTarget = this;
      let listEl = Array.from(document.getElementsByClassName('dog-link'));
      listEl.forEach(el => {
        el.classList.remove('hide');
      });
    });
  }

  handleLeave() {
    let unorderedEL = document.getElementsByClassName("drop-down-dog-nav")[0];
    unorderedEL.addEventListener("mouseout", function () {
      // debugger;
      // e.currentTarget = this;
      let listEl = Array.from(document.getElementsByClassName('dog-link'));
      listEl.forEach(el => {
        el.classList.add('hide');
      });
    });
  }

}

export default Dog;