import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faGithub, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'
const Footer = () => {
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