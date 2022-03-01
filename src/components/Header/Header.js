import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import './Header.scss'


const Header = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["Software Engineer", "Front-End Developer", "Back-End Developer", "UX Engineer", "Husband", "Father"]
        })
    }, [])

    return (
        <div className="col-xxl-8 px-4 py-5 hero"  id='hero'>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://i.imgur.com/9Bfldqm.jpeg" className="d-block img-fluid hero-photo" alt="That's Me" />
                </div>
                <div className="col-lg-6 intro">
                    <h2 className="display-5 fw-bold lh-1 mb-3">Hello, I am</h2>
                    <h1>Stacey Brinkley</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Header