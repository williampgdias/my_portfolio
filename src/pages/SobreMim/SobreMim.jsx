import React from 'react';

// Import Images
import mySelf from '../../assets/mySelf.png';
import elementAbsolute from '../../assets/element2.png';

// Import CSS
import './SobreMim.css';

const SobreMim = () => {
    return (
        <div className="aboutMe">
            <h1 className="title">Sobre Mim</h1>
            <div className="flexContent">
                <div className="aboutMeText">
                    <p>
                        Sou desenvolvedor Frontend em constante aprendizado,
                        apaixonado por React.js e pela criação de interfaces
                        web. Vindo de uma experiência como Chef, aprendi a
                        resolver problemas rápidos, trabalhar em equipe e a
                        prestar atenção em cada detalhe – tudo isso agora aplico
                        no mundo do código.
                    </p>
                    <p>
                        Estou sempre mergulhando em HTML, CSS, JavaScript e
                        React.js, e adoro explorar novas ferramentas para criar
                        interfaces práticas, bonitas e funcionais. Meu foco é
                        sempre trazer soluções rápidas e criativas, como na
                        cozinha, só que agora no desenvolvimento web!
                    </p>
                </div>
                <img className="mySelf" src={mySelf} alt="Logo" />
            </div>
            <img
                src={elementAbsolute}
                alt="Element"
                className="elementAbsolute"
            />
        </div>
    );
};

export default SobreMim;
