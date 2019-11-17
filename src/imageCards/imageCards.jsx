import * as React from 'react';
import './imageCards.css';
import { SAMPLE_IMAGE, HEART, SHARE, WHITE_CIRCLE } from '../assets';

export default function ImageCard(props) {
    // const { nameOfUser } = props;
    const nameOfUser = "alexsmith09";
    return (
        <div className="image-card">
            <div className='upper-container'>
                {/* <img src={WHITE_CIRCLE} height="50px" /> */}
                <div className="circle"></div>
                <div className="user-details">
                    <p className="name"> <b> {nameOfUser} </b> </p>
                    <p className="address" style={{ marginTop: 10}}> addressss </p>
                </div>
            </div>
            <img src={SAMPLE_IMAGE} className="image" />
            <div className="bottom-container">
                <div className="images">
                    <img src={HEART} height="50px" />
                    <img src={SHARE} height="50px" style={{ paddingLeft: '10px' }} />
                </div>
                <p className="description"> <b> {nameOfUser}: </b> we're going on 2 weeks long holiday!!!! #holiday #life #happiness </p>
            </div>
        </div>
    )
}