import '../css/main.scss';
import {Booking,form} from './Booking';
import{Schedule} from './Schedule';
const Header = new Schedule().barberSelector();
 
let View = [Header,form,Booking];
export {View}
