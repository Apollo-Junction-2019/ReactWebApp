import * as React from 'react';
import './index.css';
import ImageCard from '../imageCards/imageCards';
import HomePageComponent from '../homePageComponent/homePageComponent';
import { MAIN_PAGE_GIf, MAIN_PAGE_OVERLAY, MAIN_LOGO } from '../assets';
import ChatBotComponent from '../chatBotComponent/chatComponent';
import axios from 'axios';
// import ChatBot from 'react-simple-chatbot';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            started: 1,
            chatSequence: [{
                source: 'system',
                message: "What\'s your name, bro?"
            }],
            name: '',
            inputValue: '',
            inputType: 0
        }
    }

    startButtonClicked = () => {
        // axios({
        //     method: 'post',
        //     baseURL: 'http://134.209.89.16:8080/chatbot/',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         'text': 'usb',
        //     }
        // })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err));
        this.setState({
            started: 2
        })
    }

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
    }

    onOkayClick = () => {
        const { chatSequence, inputValue, inputType } = this.state;
        let newInputValue;
        if (inputValue !== '') {
            if (inputType === 0) {
                newInputValue = 1;
                const newMessage = {
                    source: 'user',
                    message: inputValue
                }
                const newArray = [...chatSequence, newMessage]
                this.setState({
                    inputValue: '',
                    name: inputValue,
                    inputType: newInputValue,
                    chatSequence: [...newArray]
                })
                setTimeout(() => {
                    const newMessage1 = {
                        source: 'system',
                        message: `Hey ${this.state.name} :)`
                    }
                    const newMessage2 = {
                        source: 'system',
                        message: `Ask anything you want`
                    }
                    this.setState({
                        inputValue: '',
                        inputType: newInputValue,
                        chatSequence: [...newArray, newMessage1, newMessage2]
                    })
                }, 1000);
            } else {
                const newMessage = {
                    source: 'user',
                    message: this.state.inputValue
                }
                const newArray = [...this.state.chatSequence, newMessage]
                this.setState({
                    inputValue: '',
                    chatSequence: [...newArray]
                })
                axios({
                    method: 'post',
                    baseURL: 'http://134.209.89.16:8080/chatbot/',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        'text': this.state.inputValue,
                    }
                })
                    .then(res => {
                        const data = {
                            source: 'system',
                            message: res.data.text
                        }
                        this.setState({
                            chatSequence: [...this.state.chatSequence, data]
                        })
                        console.log(res)
                    })
                    .catch(err => console.log(err));
            }

        }
    }

    render() {
        const { started } = this.state
        return (
            <div className="main-page">
                <img src={MAIN_PAGE_GIf} style={{ position: 'absolute', width: '100%', height: '100%' }} />
                <img src={MAIN_PAGE_OVERLAY} style={{ position: 'absolute', width: '100%', height: '100%' }} />
                <div className="top-banner">
                    <p> </p>
                    <img src={MAIN_LOGO} className="image" />
                </div>
                {
                    started === 1
                        ?
                        <HomePageComponent onClick={this.startButtonClicked} />
                        :
                        started === 2
                            ?
                            <ChatBotComponent
                                sampleTexts={this.state.chatSequence}
                                onInputChange={this.onInputChange}
                                inputValue={this.state.inputValue}
                                onOkayClick={this.onOkayClick}
                            />
                            :
                            <ImageCard />
                }
            </div>
        )
    }
}

export default HomePage;