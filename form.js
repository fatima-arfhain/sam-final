class Form {

    constructor() {
      this.title = createElement('h1')
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.button = createButton('Submit');
      this.question = createElement('h1');
      this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.message.hide();
    }
  
    
    handleMousePressed() {
     
      this.button.mousePressed(() => {
        console.log("im here")
        this.input.hide();
        this.button.hide();
        var message = `
        Hello ${this.input.value()}`;
        //this.greeting.html(message);
       
      });
    }

    display(){
      // this.title.html("SPF");
      // this.title.position(350, 0);
      // this.input1.position(150, 230);
      this.button.position(450, 450);
      this.input.position(width / 2 - 110, height / 2 );
     this.handleMousePressed();
       
      
     }
  }
