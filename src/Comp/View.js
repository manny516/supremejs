import '../css/main.scss';
import {Booking,submitForm} from './Booking';
import{Schedule} from './Schedule';
const Header = new Schedule("hello").barberSelector();
 
let View = [Header,submitForm,Booking];

export {View}
