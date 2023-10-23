import React from 'react';
import Imglogo from './images/imglogo.jpg'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <a href="/">
            <img className="imglogo" src={Imglogo} alt="Home"/>
            </a>
        </div>
    )
}