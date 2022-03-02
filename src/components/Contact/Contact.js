import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.scss'

const Contact = () => {
    return (
        <div className='contact' id="contact">
            <h2><strong>Contact Me:</strong></h2>
            <p>If you enjoy what you see then feel free to contact me at:</p>

            <div className="email">
                <a href='mailto:brinkleystacey12@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} size='xl' style={{ color: 'white' }} className='mail'/>
                    <p id='email-name'>Email</p>
                </a>
            </div>
            <br />
            <p>Or you can just download my resume <a href='https://docs.google.com/document/d/1Mcx8PjSwqmH2bfHvKm5xNyybMf5Ox5qdeB1fFJ75RN4/export?format=pdf' download='Stacey Brinkley Resume'style={{ color: '#09e288' }}>here</a></p>
        </div>
    )
}

export default Contact