import '../css/main.scss';
import dashboardNav from './ Nav';  
import {Booking,form} from './Booking';
import{Header} from './Header';
const header = new Header().dataFetch();

let View = [header,form,Booking];
dashboardNav() ;
export {View}
