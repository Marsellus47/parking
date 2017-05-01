import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'home' };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item header>Parking</Menu.Item>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/" />
          <Menu.Item name="search" active={activeItem === 'search'} onClick={this.handleItemClick} as={Link} to="/search" />
          <Menu.Item name="add" active={activeItem === 'add'} onClick={this.handleItemClick} as={Link} to="/add" />
          <Menu.Menu position="right">
            <Menu.Item name="login" active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}