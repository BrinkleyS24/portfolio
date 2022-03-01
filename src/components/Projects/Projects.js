import "./Projects.scss"

const Projects = () => {
    const projects = [
        { name: "Are U Hungry", image: "https://i.imgur.com/qsc2iuH.png", url: "https://brinkleys24.github.io/AreUHungry/", desc: "A random food generator that cycles through various recipes so you can choose your favorite ones.", urlTwo: 'https://github.com/BrinkleyS24/AreUHungry' },
        { name: "MERNu", image: "https://i.imgur.com/ZgNclBX.png", url: "https://mernu21.netlify.app/", desc: "A full Crud react app that displays food menus. This project was done in a group  myself, Zaki Durry, and Freddy Vences", urlTwo: 'https://github.com/fvences92/Project3-frontend' },
        { name: "React To-Do", image: "https://i.imgur.com/HQBn0nr.png", url: "https://vigorous-hoover-20ab62.netlify.app/", desc: "A simple to do list created with React.js. My first attempt at creating a React project.", urlTwo: 'https://github.com/BrinkleyS24/react-todo' },
        { name: "Cat Collector", image: "https://i.imgur.com/Try9E9T.png", url: "https://my-catcollector-app.herokuapp.com/", desc: "A full stack Python/Django app that adds user cats to PostgreSQL database", urlTwo: 'https://github.com/BrinkleyS24/catcollector' },
    ];
    return (
        <div className="projects" id="projects">
            <h2 className="projects-header" style={{ marginBottom: '3rem' }}>My Projects:</h2>
            
            <div className="container">
                <div className="row">
                    <ul className="project-list">
                        {projects.map((project, index) => {
                            const { name, image, url, urlTwo, desc } = project;

                            return (
                                <div>
                                    <li className="card" style={{ width: '18rem', marginBottom: '2rem' }} key={index}>
                                        <img className="card-img-top" src={image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text" style={{ color: 'white' }}>{desc}</p>
                                            <a href={url} className="btn">Live Site</a>
                                            <a href={urlTwo} className="btn" style={{ marginLeft: '1rem' }}>Github</a>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects