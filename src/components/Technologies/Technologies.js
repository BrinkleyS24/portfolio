import './Technologies.scss'
import DjangoLogo from './django.png';

const Technologies = () => {
    const skills = [
        { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Javascript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'jQuery', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
        { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Express.js', img: 'https://i.imgur.com/V9xyxdZ.png' },
        { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', img: DjangoLogo },
        { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ]

    return (
        <div className="skills" id="tech" style={{ marginBottom: '3rem' }}>
            <h2 className="skill-header" style={{ marginBottom: '3rem' }}>My Top Skills:</h2>

            <ul className=" skill-ul">
                {skills.map((skill, index) => {
                    const { name, img } = skill;

                    return (
                        <li className=" " key={index} style={{ listStyle: 'none', display: 'inline' }}>
                            <img src={img} alt={name} style={{ height: '5rem' }} />
                            <h4 style={{ color: 'white' }}>{name}</h4>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Technologies