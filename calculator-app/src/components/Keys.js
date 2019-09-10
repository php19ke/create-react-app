import React from 'react';
import './Keys.css'

class Keys extends React.Component {
    render() {
        return (
            <div className="button">
                <button className="numericalBtn" onClick={this.props.addInput}>1</button>
                <button className="numericalBtn" onClick={this.props.addInput}>2</button>
                <button className="numericalBtn" onClick={this.props.addInput}>3</button>
                <button className="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>+</button>
                <button className="numericalBtn" onClick={this.props.addInput}>4</button>
                <button className="numericalBtn" onClick={this.props.addInput}>5</button>
                <button className="numericalBtn" onClick={this.props.addInput}>6</button>
                <button className="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>-</button>
                <button className="numericalBtn" onClick={this.props.addInput}>7</button>
                <button className="numericalBtn" onClick={this.props.addInput}>8</button>
                <button className="numericalBtn" onClick={this.props.addInput}>9</button>
                <button className="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>*</button>
                <button className="numericalBtn" onClick={this.props.addInput}>0</button>
                <button className="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>/</button>
                <button className="symbolBtn" onClick={this.props.reset}>C</button>
                <button className="symbolBtn" onClick={this.props.calculate}>=</button>
            </div>
        );
    }
}

export default Keys;