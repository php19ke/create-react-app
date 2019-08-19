import React from 'react';
import './Car.css';
import car from '../car.jpg'

class Car extends React.Component {
    render() {
        return (
            <div className="car" >
                <img src={car} className="car-image" alt="Car"></img>
                <div className="container">
                    <h3>Tuned car <span className="horse-power">500</span></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        )
    }
}

export default Car;