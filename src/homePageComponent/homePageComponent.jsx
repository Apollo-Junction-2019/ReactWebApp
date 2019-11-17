import * as React from 'react';
import './homePage.css';
import { CHAR_ICON, START_BUTTON } from '../assets';

export default function HomePageComponent(props) {
    const sampleTexts = [
        'Hi, I am Apollo',
        'I\'m so great that you found me',
        'As you’re my best friend now, I want to teach you the most exiting game I know.',
        'I’ll be your guide to the world of hacking. Are you ready?',
    ];
    const { onClick } = props;
    return (
        <div className="home-page-container">
            <div className="content-container">
                <img src={CHAR_ICON} style={{ height: 80, width: 100 }} />
                <div className="each-message-container">
                    {
                        sampleTexts.map(item => {
                            return <div className="each-message" style={{ marginBottom: 20 }}>
                                <p className="message">  {item} </p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="each-message-container" style={{ alignSelf: 'flex-end', width: 'calc(100% - 95px)' }}>
                <img src={START_BUTTON} onClick={onClick}/>
            </div>
        </div>
    )
}