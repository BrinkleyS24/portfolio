import React from 'react';
import './Projects.scss';

const Projects = () => {
    const projects = [
        { name: "Are U Hungry", image: "https://i.imgur.com/qsc2iuH.png", url: "https://brinkleys24.github.io/AreUHungry/", desc: "A random food generator that cycles through various recipes so you can choose your favorite ones.", urlTwo: 'https://github.com/BrinkleyS24/AreUHungry' },
        { name: "MERNu", image: "https://i.imgur.com/ZgNclBX.png", url: "https://mernu21.netlify.app/", desc: "A full Crud react app that displays food menus. This project was done in a group  myself, Zaki Durry, and Freddy Vences", urlTwo: 'https://github.com/fvences92/Project3-frontend' },
        { name: "React To-Do", image: "https://i.imgur.com/HQBn0nr.png", url: "https://vigorous-hoover-20ab62.netlify.app/", desc: "A simple to do list created with React.js. My first attempt at creating a React project.", urlTwo: 'https://github.com/BrinkleyS24/react-todo' },
        { name: "Cat Collector", image: "https://i.imgur.com/Try9E9T.png", url: "https://my-catcollector-app.herokuapp.com/", desc: "A full stack Python/Django app that adds user cats to PostgreSQL database", urlTwo: 'https://github.com/BrinkleyS24/catcollector' },
    ];

    return (
        <div id="projects" className="projects">
            <h2 className="projects-header">My Projects:</h2>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {projects.map((project, index) => {
                        const { name, image, url, urlTwo, desc } = project;
                        return (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                <img className="d-block w-100" src={image} alt={name} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{name}</h5>
                                    <p>{desc}</p>
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Live Site</a>
                                    <a href={urlTwo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Projects;
