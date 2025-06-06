import Aboutnav from './components/Aboutnav';
import Aboutdescription from './components/Aboutdescription'
import Aboutfooter from './components/Aboutfooter';
import './Aboutsection.css';

const Aboutsection = () => {
  return (
    <section className="about" id='about'>
            <div className="about-div">
                <div className="scan-line" />
                <Aboutnav />
                <Aboutdescription />
                <Aboutfooter />
            </div>
        </section>
  )
}

export default Aboutsection
