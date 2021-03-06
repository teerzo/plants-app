// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
// Styles
import './about.scss';

export default function About(props) {

    const cmpClasses = cx(
        'route-about',
    )
    return (
        <div className={cmpClasses}>
            <div className="overlay">
                <div className="title">
                    <h3> About jungle in my plants </h3>
                </div>
                <div className="">
                    <p> Collection/wishlist tool for houseplants other leafy greens </p>
                    <p> Feel free to contact or yell suggestions at me via <a href="mailto:teerzodev@gmail.com"> email </a> or <a href="https://twitter.com/teerzo">twitter</a> </p>
                </div>
            </div>
        </div>
    );
}