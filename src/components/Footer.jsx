import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faGithub, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'
const Footer = () => {

    return (
        <div>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="media-container-row content mbr-white">
                        <div className='col-12 col-md-3 mbr-fonts-style display-7'>
                            <p className='mbr-text'>
                                <strong>Address</strong>
                                <br />
                                <br />
                                Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058
                            </p><br />

                            <p className='mbr-text'>
                                <strong>Contacts</strong>
                                <br />
                                <br />
                                <p>Email : ieee@spit.ac.in<br />Phone: 82914 03220 </p>
                            </p>
                        </div>

                        <div className='col-12 col-md-3 mbr-fonts-style display-7'>
                            <p className='mbr-text'>
                                <strong>Feedback</strong>
                                <br />
                                <br />
                                <p>Please send us your ideas, bug, reports, suggestions!. Any feedback would be appreciated</p>
                            </p>

                        </div>

                        <div className='col-12 col-md-6'>
                            <div className="googleMap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460492262745!2d72.83392671547509!3d19.123177587060866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1677661519553!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">

                                <div className="hr"></div>
                                {/* <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
  return (
    <div>      
      <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <div className="hr"></div>
                        {/* <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6> */}
                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li><a className="hover-target" href=""> <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li><a className="hover-target" href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                                        <li><a className="hover-target" href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li><a className="hover-target" href=""><FontAwesomeIcon icon={faMedium} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =============== 1.9 Contact Area End ====================--> */}
            {/* <!-- =============== 1.9 Footer Area Start ====================--> */}
            <footer>
                <p>Copyright &copy; 2023 <img src={require("../images/ieee_logo.png")} alt="logo" /> All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;