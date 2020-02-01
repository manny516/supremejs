import{viewAction} from './Appointment';

class RenderView{

    constructor([...content]){
        this.root = document.getElementById("root");
        this.view = content.join(" ");
    }

    renderView(){
        console.log(this.root);
        this.root.insertAdjacentHTML('beforebegin', this.view);
    }

    renderActions(){
        viewAction().CalendarFunc();
        viewAction().appointmentQue();
        viewAction().bookForm();
    }

}


export {RenderView};
