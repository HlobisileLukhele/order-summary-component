import './App.css';
import DisplayBackground from './Components/DisplayBackground';
import OrderCard from './Components/OrderCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DisplayBackground />
      <OrderCard />
       </header>
    </div>
  );
}

export default App;
