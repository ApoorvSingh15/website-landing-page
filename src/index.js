import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from './Home';
import Reboot from 'material-ui/Reboot/Reboot';
import Footer from './Footer';

ReactDOM.render(
    <div>
        <Reboot />
        <Header />
        <Home />
        <Footer />
        
    </div>,
    document.getElementById('root')
);