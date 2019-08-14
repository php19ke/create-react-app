import React, { Component } from 'react';
import { render } from 'react-dom';

const greetingMessages = {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
}

const today = new Date();
const hour = today.getHours();
const min = today.getMinutes();
const now = today.getHours() + ":" + (min < 10 ? '0' + min : min) + ":" + today.getSeconds();

/* class HelloMessage extends Component {
    
    fetchGreetingMessage = time => {
        if (time <= 12) {
            return this.props.morningMessage;
        } else if (time <= 18) {
            return this.props.afternoonMessage;
        } else {
            return this.props.eveningMessage;
        } 
    }

    render() {
        return (
            <div>
                <h1> { this.fetchGreetingMessage(this.props.timeNow) } </h1>   
                <h1> the time now is { this.props.today } </h1>   
            </div>          
        )  
    }
} */

function fetchGreetingMessage (props, time) {
    if (time <= 12) {
        return props.morningMessage;
    } else if (time <= 18) {
        return props.afternoonMessage;
    } else {
        return props.eveningMessage;
    } 
}

function HelloMessage(props) {
    return <div>
        <h1> { fetchGreetingMessage(props, props.timeNow) } </h1>   
        <h1> the time now is { props.today } </h1>   
    </div>            
}

render(
    <HelloMessage 
        morningMessage={greetingMessages.morning}
        afternoonMessage={greetingMessages.afternoon}
        eveningMessage={greetingMessages.evening}
        timeNow={hour}
        today={now}
    />,
    document.getElementById('mainContent')
);

/* 

JSX => javascript as XML to create react elements 

ReactDOM.render method takes 2 arguments
1. the first argument is the component or
the element to be rendered
2. the second argument tells where to render
in the DOM
*/