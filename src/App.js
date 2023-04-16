import './App.css';
import Header from './component/Head/Header'
import Hero from './component/Hero/Hero';
import Sponsors from './component/sponsors/Sponsors';
function App() {
  return (
    <div className="App">
      <Header />
      <div>

        <div className="white-gradient" />
        <Hero />
        
      </div>
      <Sponsors/>
    </div>
  )
}

export default App;
