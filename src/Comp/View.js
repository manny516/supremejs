import '../css/main.scss';
import {Booking,form} from './Booking';
import{Schedule} from './Schedule';
const Header = new Schedule("hello").barberSelector();
 
let View = [Header,form,Booking];



export {View}
