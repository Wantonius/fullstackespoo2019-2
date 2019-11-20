import React from 'react';
import './App.css';
import FirstButton from './components/FirstButton';
import SecondButton from './components/SecondButton';

class App extends React.Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  message:"No message yet"
	  }
  }
  
  sendMessage = (message) => {
	  this.setState({
		  message:message
	  })
  }
  
  render() {
	  return (
		<div className="App">
			<p>The button says:{this.state.message}</p>
			<FirstButton sendMessage={this.sendMessage}/>
			<SecondButton sendMessage={this.sendMessage}/>
		</div>
	  );
  }
}

export default App;
