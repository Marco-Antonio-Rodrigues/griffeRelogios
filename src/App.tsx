import './App.css'
import Header from './components/header/header'
import About from './components/about/about'
import Catalog from './components/catalog/catalog'
import Contact from './components/contact/contact'
import Carousel from './components/carousel/carousel'

function App() {
  return (
    <div>
      <Header />  
      <Carousel/>
      <About/>
      <Catalog/>
      <Contact/>
    </div>
  )
}

export default App
