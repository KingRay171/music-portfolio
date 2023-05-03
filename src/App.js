import About from './components/about';
import WinterPerformances from './components/winter-performances';
import SpringPerformances from './components/spring-performances';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <WinterPerformances />
      <SpringPerformances />
      <Contact />
    </main>
  );
}
export default App;
