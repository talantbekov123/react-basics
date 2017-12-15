import React from 'react';

export const Header = (props)=> {
    return(
        <nav className="navbar navbar-default">
            <div className="conteiner">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLinkName}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = {
    homeLinkName: React.PropTypes.string
}
