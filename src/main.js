import Dva from 'dva';

import route from './route';
import carModel from './models/carModel.js';
// 引入样式表
import './less/layouts.less';

const app = Dva();

app.router(route);
app.model(carModel);

app.start('#root');