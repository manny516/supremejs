import '../css/main.scss';
import {Booking} from './Booking';
import{Schedule} from './Schedule';
const Header = new Schedule("hello").barberSelector();
 
let View = [Header,Booking];

export {View}
