import React from 'react'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="welcome-img-wrapper">
                    <img className="welcome-img" src="/img/about-programming.png" alt="programming"/>
                </div>
                <div className="start-info">
                    <p className="lead">While studying at the University, I tried to learn a few programming languages (Python/C++/Java), but ended by falling in love with JavaScript and especially React.</p>
                </div>
                <div className="year-description">
                    <h2><span>2015</span></h2>
                    <p className="lead">I entered Lviv Polytechnic National University to study Computer Science. At the very beginning I tried to learn Python, then tried to read some C++ 
                    books and event tried Java online courses. But it all felt as it was not for me.</p>
                    <p className="lead">In the third and fourth year of University I worked as a cook and courier. All this experience only gave me desire to continue learning programming.</p>
                </div>
                <div className="year-description">
                    <h2><span>2019-2020</span></h2>
                    <p className="lead">At the end of 2019 I graduated from University with a B.S. in Computer Science and my front-end journey began. 
                    At the start of 2020 I learned pure HTML/CSS by myself and made a few simple landing pages for myself. After that I have decided to look into JavaScript, which took me a mounth or two 
                    (there was a lot of time because of quarantine).</p>
                    <p className="lead">My next step was to create a landing page, using HTML5/CSS3/JS (I wrote a few scripts and to style website more easily 
                    I used Bootstrap). Thereafter I decided to learn JS library named React. Along with studying I started to develop a website for promotion in social networks. In August 
                    I it is almost finished, which you can check on "Work" page.</p>
                    <p className="lead">Now I am fully opened for new tasks and ready for difficulties.</p>
                </div>
                <div className="attribution text-center mt-5 mb-2">
                    <a href="https://stories.freepik.com/web" className="text-dark">Illustrations by Freepik Stories</a>
                </div>
            </div>
        </section>
    )
}

export default About;
