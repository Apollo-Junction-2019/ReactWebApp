import * as React from 'react';
import './chatPage.css';
import { CHAR_ICON, START_BUTTON, OKAY_BUTTON } from '../assets';

export default function ChatBotComponent(props) {
    const { sampleTexts, inputValue, onInputChange, onOkayClick } = props;
    return (
        <div className="chat-page-container">
            <div className="content-container">
                <img src={CHAR_ICON} style={{ height: 80, width: 100 }} />
                <div className="each-message-container">
                    {
                        sampleTexts.map(item => {
                            if (item.source === 'system') {
                                return <div className="each-message-left" style={{ marginBottom: 20 }}>
                                    <p className="message">  {item.message} </p>
                                </div>
                            } else {
                                return <div className="each-message-right" style={{ marginBottom: 20 }}>
                                    <p className="message">  {item.message} </p>
                                </div>
                            }

                        })
                    }
                </div>
            </div>
            <div className="input-message-container" style={{ alignSelf: 'flex-end', width: 'calc(100% - 95px)' }}>
                <input type="text" className="field" value={inputValue} onChange={onInputChange} />
                <img src={OKAY_BUTTON} onClick={onOkayClick} />
                {/* <img src={START_BUTTON} /> */}
            </div>
        </div>
    )
}