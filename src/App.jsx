import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Properties from "./components/Properties/Properties";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient">
      </div>
    <Header></Header>
    <Hero></Hero>
    </div>
    <Companies></Companies>
    <Properties></Properties>
    <Value></Value>
    <Contact></Contact>
    <CTA></CTA>
    <Footer></Footer>
   </div>
  );
}

export default App;
