import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App1 from '../bar1/App';

export default () => (
    <Router>
    <Header/>{/* 라우터 관리 */}
    <Route exact path='../bar1' component={App1}/>
    </Router>
    )