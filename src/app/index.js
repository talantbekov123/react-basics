import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Body } from './components/Body';

class App extends React.Component {

    render() {
        return (
        	<div>
	        	<Header homeLinkName={"Main"}/>
	            <div className="container">
	                <div className="row">
	                    <div className="col-xs-10 col-xs-offset-1">
	                        <h1>Hello!</h1>
	                    </div>
	                </div>
	            </div>
	            <Body age={20} name={"Kairat"}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));