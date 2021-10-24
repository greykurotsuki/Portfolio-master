import React from 'react'

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <h2 className="display-4 text-center">My projects</h2>
                <div className="projects-list">
                    <div className="project">
                        <div className="project-img-wrapper">
                            <img src="/img/project1.png" alt="first-project"/>
                        </div>
                        <div className="project-info">
                            <div className="name">
                                <h3 className="project-name"><a target="_blank" rel="noopener noreferrer" href="https://instalizard.com.ua/" >InstaLizard</a></h3>
                                <p className="lead">2020</p>
                            </div>
                            <div className="description">
                                <h3>Description: </h3>
                                <p className="lead">Allow users to choose and pay for social networks promotion.</p>
                            </div>
                            <div className="technology">
                                <h3>Technology: </h3>
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>Bootstrap</li>
                                    <li>React/Redux</li>
                                    <li>Firebase(Auth/Firestore/Storage)</li>
                                </ul>
                            </div>
                        </div>
                        <a className="btn" target="_blank" rel="noopener noreferrer" href="https://instalizard.com.ua/" >View</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
