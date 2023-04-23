import './catalog.css'
import qrcode from '../../assets/qrcode.png'

function Catalog(){
  return(
    <div id='catalog' className='catalog'>
      <p>Acesse nosso catálogo do whatsapp clicando no botão ou escaneando o QR code:</p>
      <div  className='catalog-center'>
        <img alt='Qr code para catálogo' src={qrcode} className='qrcode'></img>
        <a href='https://www.whatsapp.com/catalog/558581711232/?app_absent=0' className='botton-catalog'>
          <span>Catálogo Whatsapp</span>
          <img src='src/assets/logowhatsapp.png' className='logowhatsapp'></img>
        </a>
      </div>
    </div>
  )
}
export default Catalog;