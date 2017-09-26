import React, { Component } from 'react';
import { Drawer, RaisedButton } from 'material-ui';
import './App.css';

export default class Forum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleToggle = () => this.setState(s => console.log(s) || ({ open: !s.open }));

    render() {
        return (
            <div>
                <RaisedButton onClick={this.handleToggle}>Menu</RaisedButton>

                <Drawer open={this.state.open} openSecondary={true}>
                    {/* <h2>Header!</h2> */}
                    <ul className='header-right-nav-container ul'>
                        <li><a href="#">News</a></li>
                        <hr />
                        <li><a href="#">New Inventory</a></li>
                        <hr />
                        <li><a href="#">Used Inventory</a></li>
                        <hr />
                        <li><a href="#">Charging</a></li>
                        <hr />
                        <li><a href="#">Find Us</a></li>
                        <hr />
                        <li><a href="#">Shop</a></li>
                        <hr />
                        <li><a href="#">Support</a></li>
                    </ul>
                </Drawer>
            </div>
        )
    };
}

