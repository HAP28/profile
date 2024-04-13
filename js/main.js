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
    const words2 = ["Harshit Parikh","Software Engineer", "Cyber Security Enthusiast"];
    const wait = txtElement.getAttribute('data-wait');
    const wait2 = 3000;

    new TypeWriter(txtElement,words,wait);
    new TypeWriter(txtElement2,words2,wait2);
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    $('.container-typing h1').toggleClass("text-heading text-heading-dark");
    $('.container-typing h2').toggleClass("text-heading text-medium-dark");
    $('.project-header h1').toggleClass("project-title project-title-dark");
    $('.project-header p').toggleClass("text-para text-para-dark");
    $('.social h1').toggleClass("social-title social-title-dark");
    $('.banner-content button').toggleClass("button-project button-project-dark");
    $('#footer').toggleClass("footer footer-dark");
    
});

