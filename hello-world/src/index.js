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
const movieList = [
    {
        title: 'transformers',
        imdb: '7',
        staring: "megan fox, shia labeouf"
    },
    {
        title: 'twilight',
        imdb: '5',
        staring: 'kristen stewart, robert pattinson'
    },
    {
        title: 'harry potter',
        imdb: '7',
        staring: 'emma watson, rupert grint, tom felton'
    },
    {
        title: 'titanic',
        imdb: '7',
        staring: 'emma watson, rupert grint, tom felton'
    }
];

function Movie(props) {
    return <div>
        <h2>{props.title}</h2>
        <p>{props.imdb}</p>
        <p>{props.staring}</p>
    </div>
}

function Cinema(props) { // composing component
    console.log('Props of Cinema is: ');
    console.log(props);

    return <div>
        {props.movies.map((movie, index) => {
            return <Movie 
                key={index}
                title={movie.title}
                imdb={movie.imdb}
                staring={movie.staring}
            />
        })}
    </div>           
}

render(
    <Cinema movies={movieList} josh="No"/>,
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