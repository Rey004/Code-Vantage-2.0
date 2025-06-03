import './Footer.css'
import Button from './Button'

const Footer = () => {
  return (
    <footer>
        <div className="footer-div">
            <div className="footer-branding">
                <img src="/assets/Text Logo.webp" alt="" className="secondary-logo" />
                <img src="/assets/Star.webp" alt="" className="star1" />
                <img src="/assets/Star.webp" alt="" className="star2" />
                <img src="/assets/Bracket Purple.webp" alt="" className="bracket-purple" />
                <img src="/assets/Bracket Blue.webp" alt="" className="bracket-blue" />
            </div>
            <div className="footer-content">
                <div className="info">
                    <div className="cta">
                        <p className="cta-para">Code Vantage stands for its trust and quality of work, don’t forget to schedule a call before you leave.</p>
                        <Button className='footer-button' name="SCHEDULE CALL" />
                    </div>
                    <img src="/assets/Icon Logo.webp" alt="" className="footer-icon-logo" />
                    <div className="emails">
                        <h2 className='email-title'>Email</h2>
                        <a href="mailto:contact@codevantage.in" className="email">contact@codevantage.in</a>
                        <a href="mailto:revanshu@codevantage.in" className="email">revanshu@codevantage.in</a>
                        <a href="mailto:aaditya@codevantage.in" className="email">aaditya@codevantage.in</a>
                    </div>
                </div>
                <p className='rights'>© 2025 codevantage.in All rights reserved.</p>
                <img src="/assets/Star.webp" alt="" className="stardecor" />
            </div>
            <div className="footer-gradient"></div>
        </div>
    </footer>
  )
}

export default Footer
