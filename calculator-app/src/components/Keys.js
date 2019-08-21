import React from 'react';
import './Keys.css'

class Keys extends React.Component {
    render() {
        return (
            <div className="button">
                <button class="numericalBtn" onClick={this.props.addInput}>1</button>
                <button class="numericalBtn" onClick={this.props.addInput}>2</button>
                <button class="numericalBtn" onClick={this.props.addInput}>3</button>
                <button class="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>+</button>
                <button class="numericalBtn" onClick={this.props.addInput}>4</button>
                <button class="numericalBtn" onClick={this.props.addInput}>5</button>
                <button class="numericalBtn" onClick={this.props.addInput}>6</button>
                <button class="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>-</button>
                <button class="numericalBtn" onClick={this.props.addInput}>7</button>
                <button class="numericalBtn" onClick={this.props.addInput}>8</button>
                <button class="numericalBtn" onClick={this.props.addInput}>9</button>
                <button class="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>*</button>
                <button class="numericalBtn" onClick={this.props.addInput}>0</button>
                <button class="symbolBtn" disabled={this.props.disableSymbol ? 'disabled' : ''} onClick={this.props.addInput}>/</button>
                <button class="symbolBtn" onClick={this.props.reset}>C</button>
                <button class="symbolBtn" onClick={this.props.calculate}>=</button>
            </div>
        );
    }
}

export default Keys;