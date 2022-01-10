import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <div className="title">
    <a href="https://applepick.tistory.com/" target="_blank">
    </a>
    <span>Apple's pick</span>
    </div>
        <div className="buttons">
          <button><Link to= '../bar1/App' className="links">Home</Link></button>
          <button><Link to= '../bar1/App' className="links">회원가입</Link></button>
          <button><Link to= '../bar1/App' className="links">로그인</Link></button>
        </div>
    </div>
    
);

export default Header;