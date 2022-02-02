class Form {

    constructor() {
      this.title = createElement('h1')
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.button = createButton('Submit');
      //this.question = createElement('h1');
      //this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
     //this.message.hide();
    }
  
    
    handleMousePressed() {
     
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
        var message = 
        `Hello ${this.input.value()}`;
        this.greeting.html(message);
        this.message.position(350, 350);
      });
    }

    display(){
      this.title.html("SPF");
      this.title.position(350, 0);
      this.title.style.color="white"
      // this.input1.position(150, 230);
      this.button.position(450, 450);
      this.input.position(width / 2 - 110, height / 2 );
     this.handleMousePressed();
       
      
     }
  }
