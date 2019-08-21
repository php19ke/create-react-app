import React from 'react';

class Keys extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addInput}>0</button>
                <button onClick={this.props.addInput}>1</button>
                <button onClick={this.props.addInput}>2</button>
                <button onClick={this.props.addInput}>3</button>
                <button onClick={this.props.addInput}>4</button>
                <button onClick={this.props.addInput}>5</button>
                <button onClick={this.props.addInput}>6</button>
                <button onClick={this.props.addInput}>7</button>
                <button onClick={this.props.addInput}>8</button>
                <button onClick={this.props.addInput}>9</button>
                <button onClick={this.props.addInput}>+</button>
                <button onClick={this.props.addInput}>-</button>
                <button onClick={this.props.addInput}>*</button>
                <button onClick={this.props.addInput}>/</button>
                <button onClick={this.props.calculate}>=</button>
            </div>
        );
    }
}

export default Keys;