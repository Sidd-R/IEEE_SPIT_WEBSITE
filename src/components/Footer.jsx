import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faGithub, faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'
const Footer = () => {

    return (
        <div>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="flex flex-wrap sm:space-x-6 sm:justify-evenly mx-14 flex-col sm:flex-row ">
                        <div className='mx-5'>
                            <p className='mbr-text'>
                                <strong>Address</strong>
                                <br />
                                <br />
                                <p>Bhavans Campus, Old D N Nagar,</p>
                                <p> Munshi Nagar, Andheri West,</p>
                                <p> Mumbai, Maharashtra 400058</p>
                            </p><br />

                            <p className='mbr-text'>
                                <strong>Contacts</strong>
                                <br />
                                <br />
                                <p>
                                    Email : <a href='mailto: ieee@spit.ac.in'> ieee@spit.ac.in</a><br />
                                    Phone:  <a href='tel:8291403220'>82914 03220</a>
                                </p>
                            </p>
                        </div>

                        <div className='mx-5 '>
                            <p className='mbr-text'>
                                <strong>Feedback</strong>
                                <br />
                                <br />
                                <p>Please send us your ideas,</p>
                                <p>bug, reports, suggestions!.</p>
                                <p> Any feedback would be appreciated</p>
                            </p>
                        </div>

                        <div className='        ' id='map'>
                            <iframe className=' aspect-square sm:h-96 sm:w-96 rounded-md mt-8 h-60' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460492262745!2d72.83392671547509!3d19.123177587060866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1677661519553!5m2!1sen!2sin" style={{ border: "0" }} loading="lazy" title='gmap'></iframe>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">

                                <div className="hr"></div>
                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href="#k"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li><a className="hover-target" href="#g"> <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        <li><a className="hover-target" href="#f"><FontAwesomeIcon icon={faGithub} /></a></li>
                                        <li><a className="hover-target" href="#e"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li><a className="hover-target" href="#a"><FontAwesomeIcon icon={faMedium} /></a></li>
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
                <p id='p1' >Copyright &copy; 2023 <img className='inline' src={require("../images/ieee_logo.png")} alt="logo" /> All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;