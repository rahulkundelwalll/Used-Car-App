import './App.css';
import Header from './component/Head/Header'
import Hero from './component/Hero/Hero';
import Sponsors from './component/sponsors/Sponsors';
import Recedencies from './component/recedencies/Recedencies';
function App() {
  return (
    <div className="App">
      <Header />
      <div>

        <div className="white-gradient" />
        <Hero />
        
      </div>
      <Sponsors/>
      <Recedencies/>
    </div>
    
  )
}

export default App;
