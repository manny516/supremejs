import _ from 'lodash';
import './css/main.scss';
import {RenderView} from './Comp/RenderView';
import {data} from './Comp/View';

const runView = new RenderView(data);
runView.renderView();