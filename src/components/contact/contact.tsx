import Form from '../form/form';
import './contact.css'

function Contact(){
  return(
    <div id='contact' className='contact'>   
      <span>
        <h3>Entre em contato conosco</h3>
        <p>preenchendo o formulário ou através do whatsapp disponibilizado. </p>
      </span> 
      <div className='div'>
        <Form />
        <div className='contact-info'>
          <a href='https://www.google.com.br/maps/place/S%C3%A3o+Gon%C3%A7alo+do+Amarante+-+Anacetaba,+S%C3%A3o+Gon%C3%A7alo+do+Amarante+-+CE,+62670-000/@-3.5861801,-38.9966506,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNtoFbcBiDwLQPcWIrVLDN0npLJp8UqTBaV-3M!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNtoFbcBiDwLQPcWIrVLDN0npLJp8UqTBaV-3M%3Dw203-h152-k-no!7i4032!8i3024!4m7!3m6!1s0x7c0e9d1bf1c48dd:0x72fe3c12033ac5b3!8m2!3d-3.6072866!4d-38.9683884!10e5!16s%2Fm%2F09rs__0'>
            <h4>Endereço</h4>
            <p>Rua que fica no Brasil, N° 00,<br></br>CEP 0000-0000</p>
          </a>
          <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5585981711232&text=ol%C3%A1+Griffe+Rel%C3%B3gios%21+'>
            <h4 >Whatsapp</h4>
            <p>(85) 9 8171-1232</p>
          </a>
          <a href='https://www.instagram.com/griffe.relogios/'>
            <h4>Instagram</h4>
            <p>@griffe.relogios</p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Contact;