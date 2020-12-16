const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.index = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
    
    const current = this.index % this.words.length;  //current index

    const fulltxt = this.words[current]; //current text at index current


    // check deleting
    if(this.isDeleting){
        //we will delete
        this.txt = fulltxt.substring(0,this.txt.length - 1);
    } else{
        // we will write
        this.txt = fulltxt.substring(0,this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial type speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.index++;
        this.isDeleting = false;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);


function init(){
    const txtElement = document.querySelector('.txt-type');
    const txtElement2 = document.querySelector('.txt-type2');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const words2 = ["Harshit Parikh","Web Developer"];
    const wait = txtElement.getAttribute('data-wait');
    const wait2 = 3000;

    new TypeWriter(txtElement,words,wait);
    new TypeWriter(txtElement2,words2,wait2);
}

