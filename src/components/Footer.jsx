import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn,  faMedium, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'
const Footer = () => {

    return (
        <div >
            <section className="contact-area mt-28" id="contact">
                <div className="container">
                    <div className="flex flex-wrap sm:space-x-6 sm:justify-evenly mx-14 flex-col sm:flex-row ">
                        <div className='mx-2'>
                            <p className='mbr-text'>
                                <strong>Address</strong>
                                {/* <br /> */}
                                <br />
                                <div>Bhavans Campus, Old DN Nagar,</div>
                                <div> Munshi Nagar, Andheri West,</div>
                                <div> Mumbai, Maharashtra 400058</div>
                            </p><br />

                            <div className='mbr-text text-gray-100'>
                                <strong>Contacts</strong>
                                <br />
                                {/* <br /> */}
                                <p>
                                    Email : <a href='mailto: ieee@spit.ac.in'> ieee@spit.ac.in</a><br />
                                    Phone:  <a href='tel:8291403220'>82914 03220</a>
                                </p>
                            </div>
                        </div>

                        <div className='mx-5 mt-5 hidden sm:block'>
                            <p className='mbr-text'>
                                <strong>Feedback</strong>
                                {/* <br /> */}
                                <br />
                                <div>Please send us your ideas,</div>
                                <div>bug, reports, suggestions!.</div>
                                <div> Any feedback would be appreciated</div>
                            </p>
                        </div>

                        <div className='' id='map'>
                            <iframe className=' aspect-square sm:h-60 sm:w-80 rounded-md mt-8 h-48' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6460492262745!2d72.83392671547509!3d19.123177587060866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1677661519553!5m2!1sen!2sin" style={{ border: "0" }} loading="lazy" title='gmap'></iframe>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">

                                <div className="hr"></div>
                                <div className="contact-social">
                                    <ul>
                                        <li><a className="hover-target" href="https://www.facebook.com/sp.ieee/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                        <li><a className="hover-target" href="https://www.linkedin.com/company/ieee-spit/"> <FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                        {/* <li><a className="hover-target" href="#f"><FontAwesomeIcon icon={faGithub} /></a></li> */}
                                        <li><a className="hover-target" href="https://www.instagram.com/ieee_spit/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                        <li><a className="hover-target" href="https://medium.com/@ieee_spit"><FontAwesomeIcon icon={faMedium} /></a></li>
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
            <footer className='px-3 py-2 text-right text-sm  ' style={{borderTop:"1px solid #353C46"}}>
                Made by 
                <a className='text-gray-300 italic' href='https://www.linkedin.com/in/siddhant-rao-801323231/'> Siddhant Rao</a>, 
                <a className='text-gray-300 italic' href='https://www.linkedin.com/in/navneet-nair-3546b0237/'> Navneet Nair</a>, 
                <a className='text-gray-300 italic' href='https://www.linkedin.com/in/samarth-gupta-36aa32201/'> Samarth Gupta</a>
            </footer>
        </div>
    );
};

export default Footer;