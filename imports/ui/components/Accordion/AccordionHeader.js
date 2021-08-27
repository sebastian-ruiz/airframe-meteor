import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardHeader from './../CardHeader';

import { Consumer } from './context';
import classes from './AccordionHeader.scss';

export const AccordionHeader = (props) => {
    return (
    <Consumer>
    {
        ({ onToggle }) => (
            <CardHeader
                className={
                    classNames(
                        props.className
                    )
                }
                onClick={ onToggle}
            >
                { props.children }
            </CardHeader>
        )   
    }
    </Consumer>);
};
AccordionHeader.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
};
