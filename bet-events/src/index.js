import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        lang: null,
        data: {},
        loading: false
    }

    startLoading = (e) => {
        e.preventDefault();
        console.log(this.state.lang);

        this.setState({
            loading: true
        });

        fetch('https://eu-offering.kambicdn.org/offering/api/v2/paf/event/live/open.json?lang=' + this.state.lang + '&market=FI')
            .then(data => data.json())
            .then(formattedData => {
                this.setState({
                    data: formattedData,
                    loading: false
                });
            })
    }

    getLanguage = e => {
        this.setState({
            lang: e.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.startLoading}>
                    <label>Pick a random color
                        <select onChange={this.getLanguage}>
                            <option value="en_GB">English</option>
                            <option value="sv_SE">Swedish</option>
                            <option value="et_EE">Estonian</option>
                            <option value="ru_RU">Russian</option>
                            <option value="fi_FI">Finnish</option>
                        </select>
                    </label>

                    <button type="submit">Load the content now</button>
                </form>


                {
                    this.state.loading ? 
                    <div>LOADING CONTENT ...... </div> :
                    (this.state.data.liveEvents ? // this line gets executed if this.state.loading === false
                    this.state.data.liveEvents.map((event) => 
                    <div>{event.event.name} {event.event.sport} {event.event.group}</div>) :
                    console.log('Nope... its not there yet')) // this line gets executed if this.state.data.liveEvents is not defined
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));