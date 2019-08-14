import React from 'react';
import ReactDOM from 'react-dom';

const customStyle = {
    'color': 'red',
    'backgroundColor': 'yellow'
};

/* const helloMessage = React.createElement(
    'div', // name of the html element to be created
    {id: 'parentEl'}, // properties to be added, null if nothing
    [React.createElement( // content of the element
        'h2',
        {id: 'childEl', style: customStyle},
        'Hello World from Child El'
    ),
    React.createElement( // content of the element
        'h2',
        {id: 'childEl', style: customStyle},n
        'Hello World from Child El'
    ),
    React.createElement( // content of the element
        'h2',
        {id: 'childEl', style: customStyle},
        'Hello World from Child El'
    )]
); */

/* Exercise: Create a React element using either JSX or without JSX method. The parent element should be a div and have a classname name-card, inside it there are 3 child elements, the first one is img with a random picture, second one is h4 with your name, third one is div with content of 64 likes */
const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/240px-Circle-icons-profile.svg.png';

/* const helloMessage = <div>
    <img src={imgSrc}></img>
    <h4>Hoang Pham</h4>
    <div style={customStyle}>ON THE 11.9 WE HAVE VINCIT EXCURSION - 64 LIKES</div>
    </div>
 */

const greetingMessages = {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening'
}

class HelloMessage extends React.Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <h1>{this.props.morningMessage}</h1>   
            </div>          
        )  
    }
}

ReactDOM.render(
    <HelloMessage 
        morningMessage={greetingMessages.morning}
        afternoonMessage={greetingMessages.afternoon}
        eveningMessage={greetingMessages.evening}
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