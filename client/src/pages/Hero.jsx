import './Hero.css'
import image from '../images/heroimg.png'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>
            Your Health, <br />
            Our Responsibility
          </h1>
          <p>
          Ensuring personal health through healthy choices and timely medical care, while society provides access to healthcare and promotes overall well-being for all.
          </p>
          <Link to={'/Login'}>
          <button className='getstarted-btn'>Get Started</button>
          </Link>
        </div>
        <div className="hero-img">
          <img
            src={image}
            alt="hero"      
          />
        </div>
      </section>
    )}

export default Hero