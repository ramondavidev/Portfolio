import React from 'react';

import './about.styles.scss';

const About = ({ portuguese }) => {
    return (
        <div id='about'>
            <div className='about-info'>
                <p className='title'>{portuguese ? 'Quem sou eu?' : 'About me'}</p>
                <div className='description'>
                {portuguese ? <span>
                        <p>Olá, me chamo Ramon. Sou desenvolvedor full stack MERN e trabalho com construção de websites e aplicativos modernos.</p>
                        <p>Você trabalhará diretamente comigo e com minha pequena equipe de especialistas escolhida a dedo para garantir que seu projeto seja executado no prazo, dentro do orçamento e com qualidade de classe mundial.</p>
                        <p>Fazemos parceria com nossos clientes remotamente e expandimos nossa equipe conforme necessário para dar vida a seus projetos.</p>
                        <p>Obtenha todos os benefícios de contratar uma agência, sem complicações ou despesas.</p>
                    </span> 
                    : 
                    <span>
                        <p>Hello, my name is Ramon. I'm a full stack MERN developer and I work building modern websites and applications.</p>
                        <p>You will work directly with me and my small team of handpicked experts to ensure your project runs on time, within budget and with world-class quality.</p>
                        <p>We partner with our customers remotely and expand our team as needed to bring your projects to life.</p>
                        <p>Get all the benefits of hiring an agency, without complications or expenses.</p>
                    </span>}
                    
                </div>
                <button className='btn-about'> 
                {portuguese ? 'Meu Linkedin' : 'My Linkedin'} <i style={{marginLeft: '20px'}} className="fab fa-linkedin-in"></i> </button>
            </div>
            <div className='about-image'>
                <div className='image-container'>
                    <img className='img' src="images/perfil.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;