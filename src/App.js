
import './App.css';
import Forminput from './components/forminput';
import Transaction from './components/transaction';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="App">
    <SearchInput/>
    <Forminput/>
    <Transaction/>
    </div>
  );
}

export default App;
