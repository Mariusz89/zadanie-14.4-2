import React, {Component} from 'react';
import MoviesList from './components/MoviesList';

class App extends Component {
	render() {		
		return (			
			<div>
				<MoviesList data={this.props.data}/>
			</div>		
		)
	}
}

export default App;