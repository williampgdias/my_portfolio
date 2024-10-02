import React from 'react';

// Components
import CardContainer from '../../components/Bootstrap/Cards';

// Import CSS
import './Portfolio.css';

// Images
import jogoDaForcaImage from '../../assets/portfolioImg/jogoDaForca.png';
import taskManagerImage from '../../assets/portfolioImg/taskManager.png';
import turkutsImage from '../../assets/portfolioImg/turkutsBarberShop.png';
import secapsImage from '../../assets/portfolioImg/secapsImage.png';
import tipCalculatorImage from '../../assets/portfolioImg/tipCalculator.png';
import bikcraftImage from '../../assets/portfolioImg/bikCraft.png';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <h1 className="title">Portfólio</h1>
                <p>Aqui você encontra mais sobre meus projetos.</p>

                <div className="cardsContainer">
                    {/* Hangman */}
                    <CardContainer
                        image={jogoDaForcaImage}
                        title={'Jogo da Forca'}
                        cardInfo={
                            'Projeto em JavaScript, HTML e CSS onde os usuários adivinham letras para descobrir palavras. Foi uma ótima oportunidade para praticar lógica de programação. '
                        }
                        githubLink={
                            'https://github.com/williampgdias/hangman-game'
                        }
                        deployedLink={
                            'https://williampgdias.github.io/hangman-game/'
                        }
                    />

                    {/* Task Manager */}
                    <CardContainer
                        image={taskManagerImage}
                        title={'Gerenciador de Tarefas'}
                        cardInfo={
                            'Projeto em JavaScript, HTML e CSS para criar, editar e excluir tarefas. Aprimorei minhas habilidades em manipulação de DOM.'
                        }
                        githubLink={
                            'https://github.com/williampgdias/task_manager'
                        }
                        deployedLink={
                            'https://williampgdias.github.io/task_manager/'
                        }
                    />

                    {/* Turkuts Barber Shop */}
                    <CardContainer
                        image={turkutsImage}
                        title={'Turkuts Barber Shop'}
                        cardInfo={
                            'Site que fiz para o BootCamp usando HTML + CSS, inspirado em uma barbearia. Fiquei feliz com o resultado e pude explorar minha criatividade!'
                        }
                        githubLink={
                            'https://github.com/williampgdias/turkuts_barber_shop'
                        }
                        deployedLink={
                            'https://williampgdias.github.io/turkuts_barber_shop/'
                        }
                    />

                    {/* Secaps */}
                    <CardContainer
                        image={secapsImage}
                        title={'Secaps Black'}
                        cardInfo={
                            'Site desenvolvido em HTML e CSS para promover um produto de emagrecimento. Aprimorei minhas habilidades em design e responsividade.'
                        }
                        githubLink={
                            'https://github.com/williampgdias/secaps_black'
                        }
                        deployedLink={
                            'https://williampgdias.github.io/secaps_black/'
                        }
                    />

                    {/* Tip Calculator */}
                    <CardContainer
                        image={tipCalculatorImage}
                        title={'Calculador de Gorjeta'}
                        cardInfo={
                            'Projeto em JavaScript, HTML e CSS que ajuda a calcular gorjetas e dividir contas. Foi uma boa prática em lógica e manipulação de DOM.'
                        }
                        githubLink={
                            'https://github.com/williampgdias/tip-calculator'
                        }
                        deployedLink={
                            'https://williampgdias.github.io/tip-calculator/'
                        }
                    />

                    {/* Bikcraft */}
                    <CardContainer
                        image={bikcraftImage}
                        title={'Bikcraft'}
                        cardInfo={
                            'Site para uma empresa de bicicletas customizadas fictícias, desenvolvido com HTML e CSS. Focado em layout responsivo e boas práticas de design.'
                        }
                        githubLink={'https://github.com/williampgdias/bikcraft'}
                        deployedLink={
                            'https://williampgdias.github.io/bikcraft/'
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Portfolio;
