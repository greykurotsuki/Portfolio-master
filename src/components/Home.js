import React from 'react'

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="welcome-img-wrapper">
                    <img className="welcome-img" src="/img/home-programming.png" alt="programming"/>
                </div>
                <h1>Hi, I'm Oleh. Front-end development is my passion.</h1>
                <p className="lead">I started learning programming at the University and found myself in front-end in early 2020. 
                I never could even imagine that this will be my profession, but now I am happy because of my choise.</p>
                <p className="lead">Feel free to send me a message anytime on <a target="_blank" rel="noopener noreferrer" href="tg://resolve?domain=unnamedninja">Telegram </a> 
                or check my <a target="_blank" rel="noopener noreferrer" href="https://github.com/UnnamedNinja">GitHub</a>
                 </p>
            </div>
        </section>
    )
}

export default Home
