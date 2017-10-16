import React, {Component} from 'react';
import MoviesList from './components/MoviesList';
import data from './data/data'

class App extends Component {
	render() {		
		return (			
			<div>
				<div><MoviesList data={data}/></div>
			</div>		
		)
	}
}

export default App;