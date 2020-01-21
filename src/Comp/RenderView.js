
class RenderView{

    constructor(content){
        this.root = document.getElementById("root");
        this.view = content;
    }

    renderView(){
        console.log(this.root);
        this.root.insertAdjacentHTML('afterend', this.view);
    }

}

export  {RenderView};
