import './App.css';
import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { getCustomStore } from './reducer';
import { initialState } from './constants';

const store = getCustomStore(initialState);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Main />
			</div>
		</Provider>
	);
}

export default App;
