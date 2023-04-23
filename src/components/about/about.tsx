import './about.css'
import about from '../../assets/about.png'
function About(){
  return(
    <div id='about' className='about'>
      <img alt='imagem com texto sobre e logo griffe relógios' className="image-about" src={about}></img>
      <div>
        <p>Bem-vindo à Griffe Relógios, somos desde 2020 a sua melhor opção para adquirir relógios e smartwatches importados! Se especializamos em trazer para você uma seleção exclusiva de relógios e smartwatches com um alto custo-benefício.</p>
        <p> Nosso compromisso é oferecer produtos de qualidade premium que atendam às necessidades de nossos clientes mais exigentes. Desde os relógios clássicos até os mais modernos e avançados smartwatches, temos relógios para todos os gostos e estilos pessoais. Nossa equipe experiente está sempre à disposição para ajudá-lo a escolher o relógio ou smartwatch perfeito para você ou para presentear alguém especial. Nos orgulhamos de oferecer um serviço excepcional e uma experiência de compra única para cada cliente.</p>
      </div>
    </div>
  )
}

export default About;