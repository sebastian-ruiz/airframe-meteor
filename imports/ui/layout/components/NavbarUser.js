import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => {
    handleLogout = (e) => {
        e.preventDefault();
        Meteor.logout()
    }
    return (
        <NavItem { ...props }>
            <NavLink tag={ Link } to="#" onClick={this.handleLogout}> 
                <i className="fa fa-power-off"></i>
            </NavLink>
        </NavItem>
    );
};
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
