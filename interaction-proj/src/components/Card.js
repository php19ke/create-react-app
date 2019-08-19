import React from 'react';
import './Card.css';

class Card extends React.Component {
    render(){
        return(
            <div className="card">
                <img src="car.jpg" className="card-image" alt="Car"></img>
                <div className="container">
                    <h3>Tuned car <span className="horse-power">500</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        );
    }
}

export default Card;

