import React from 'react';
import './footerComponent.css';


function FooterComponent({isEnglish}){
    const currentYear = new Date().getFullYear();
    let englishText = 'Thanks for visiting my website! Checkout my social links below.';
    let spanishText = '¡Gracias por visitar mi pagina web! Echa un vistazo a mis enlaces sociales a continuación.';
    return(
        <div className='footer-container'>
            <section className="contact-area" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="contact-content text-center">
                            {isEnglish ? <p>{englishText}</p> : <p>{spanishText}</p>}
                            <div className="hr"></div>
                            <div className="contact-social">
                                <ul>
                                    <li><a className="hover-target" href="https://www.linkedin.com/in/andre-vasquez-20221/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a className="hover-target" href="https://github.com/ankrudov"><i className="fab fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <footer>
                <p>Copyright &copy; {currentYear} All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default FooterComponent;