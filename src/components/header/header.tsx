import './header.css'
import logo from '../../assets/logo.svg'

function Header(){
  return(
    <div className="header">
        <img alt='logo griffe relógios' className='image-header' src={logo}/>
      <div className='menu'>
        <a href='#catalog'>Catálogo</a>
        <a href='#about'>Sobre nós</a>
        <a href='#contact'>Contato</a>
      </div> 
    </div>
  )
}

export default Header;