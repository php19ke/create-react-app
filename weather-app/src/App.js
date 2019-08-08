import React from 'react';
import Titles from './components/titles';
import Weather from './components/weather';
import Form from './components/form';

class App extends React.Component {
  render() {
    return ( 
      <div >
        <Titles></Titles>
        <Form></Form>
        <Weather></Weather>
      </div>
    )
  }
}
export default App;