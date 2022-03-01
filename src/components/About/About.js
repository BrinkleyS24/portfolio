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
                    As a great problem solver, an independent introvert, Software Engineering is great for me. 
                    However, being from Brooklyn, New York taught me the importance of relationships and networking. 
                    Put them both together and that made attending General Assembly the perfect destination. 
                    I tried the self-taught route but there are some things you can't replace in a classroom (or a Zoom meeting in this case). 
                    I was able to develop proficiency in HTML, CSS, and Javascript. Also, understand the MERN stack enough to build fully functional CRUD applications. 
                    Every day I'm always learning what I don't or reiterating what I do.
                </p>
            </div>
        </div>
    );
};

export default About