import './About.scss'

const About = () => {
    return (
        <div className="a" id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://i.imgur.com/kVURREW.jpg"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h2 className="a-title"><strong>About Me</strong></h2>
                <p className="a-sub">
                    "Im just a kid from Brooklyn" - <em>Steve Rogers</em>
                </p>
                <p className="a-desc">
                    As a Software Engineer, I possess a strong proficiency in front and backend development, as well as a passion for crafting seamless user experiences. With expertise in AWS, CI/CD pipelines, databases like Postgres and MongoDB, and modern web development languages such as JavaScript ES6, TypeScript, and Java, I excel in problem-solving within Agile environments. Leveraging frameworks like React, React Native, and Node.js, I create intuitive and responsive web applications. Proficient in tools like Git, Docker, Jenkins, and Kubernetes, I am dedicated to driving innovation and excellence in large-scale enterprise service operations
                </p>
            </div>
        </div>
    );
};

export default About