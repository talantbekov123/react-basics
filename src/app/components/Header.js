import React from 'react';

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="conteiner">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{this.props.homeLinkName}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    homeLinkName: React.PropTypes.string
}