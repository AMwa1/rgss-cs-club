class clubButton {
    constructor(n,textBox,text){
        this.writingSpace = document.getElementById(textBox);
        this.text = text
        this.elementID = document.getElementById(n);
        this.element.addEventListener('click', () => this.isClicked())
    }
    isClicked(){
        if (this.writingSpace != ""){
            this.writingSpace = this.text
        }
        else{
            this.writingSpace = "";
        }
    }
}