import './App.css';
import UniversityList from './components/university-finder/univeristy-list';
import UniversityFinder from './components/university-finder/university-finder';

function App() {
  return (
    <div className="App">
      <UniversityFinder />
      <UniversityList/>
    </div>
  );
}

export default App;
