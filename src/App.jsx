import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import Experience from './Components/Experience';
import { Footer } from './Components/Footer';
import Header from './Components/Header'
import { ProjectDetails } from './Components/ProjectDetails';
import { Projects } from './Components/Projects';
import { Technologies } from './Components/Technologies';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experience/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
