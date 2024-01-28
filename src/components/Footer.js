import React from 'react'
import "./HomePage.css"
import Srjone8 from "./images/surajone8.png"

const Footer = () => {
    return (
        <>
            <div className="footer-cont">
                <div className="footer-inner">
                    <div className="foot-row">
                        <ul>
                            <li className="row-elem">
                                <img className='logo' src={Srjone8} alt="" />
                            </li>
                            <li className="row-elem">link 1</li>
                            <li className="row-elem">link 2</li>
                            <li className="row-elem">link 3</li>
                        </ul>
                    </div>
                    <div className="foot-row">
                        <ul>
                            <li className="row-elem">link 1</li>
                            <li className="row-elem">link 2</li>
                            <li className="row-elem">link 3</li>
                            <li className="row-elem">link 4</li>
                        </ul>
                    </div>
                    <div className="foot-row">
                        <ul>
                            <li className="row-elem">link 1</li>
                            <li className="row-elem">link 2</li>
                            <li className="row-elem">link 3</li>
                            <li className="row-elem">link 4</li>
                        </ul>
                    </div>
                    <div className="foot-row">
                        <ul>
                            <li className="row-elem">link 1</li>
                            <li className="row-elem">link 2</li>
                            <li className="row-elem">link 3</li>
                            <li className="row-elem">link 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer