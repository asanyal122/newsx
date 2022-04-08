import './App.css';
import ArticlesGrid from './components/ArticlesGrid.js'
import TopBar from './components/TopBar.js'
function App() {

  return (
    <div className="App" style={{background:"#F50057"}}>
      <TopBar/>
      <ArticlesGrid/>
    </div>
  );
}

export default App;
