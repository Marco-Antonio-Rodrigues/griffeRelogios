import './header.css'
import {Link} from 'react-router-dom'
function Header(){
  return(
    <div className="header">
        <img alt='logo griffe relógios' className='image-header' src="src/assets/logo.svg"/>
      <div className='menu'>
        <a href='#catalog'>Catálogo</a>
        <a href='#about'>Sobre nós</a>
        <a href='#contact'>Contato</a>
      </div> 
    </div>
  )
}

export default Header;