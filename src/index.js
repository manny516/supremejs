import _ from 'lodash';
import './css/main.scss';
import {RenderView} from './Comp/RenderView';
import {View} from './Comp/View';

const runView = new RenderView(View);
runView.renderView();
runView.renderActions();
