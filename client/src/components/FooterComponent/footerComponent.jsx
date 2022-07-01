import React from 'react';
import './footerComponent.css';


function FooterComponent({isEnglish}){
    const currentYear = new Date().getFullYear();
    let englishText = 'Thanks for visiting my website! Checkout my social links below.';
    let spanishText = '¡Gracias por visitar mi pagina web! Echa un vistazo a mis enlaces sociales a continuación.';
    return(
        <div className='footer-container'>
            <section class="contact-area" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="contact-content text-center">
                            {isEnglish ? <p>{englishText}</p> : <p>{spanishText}</p>}
                            <div class="hr"></div>
                            <div class="contact-social">
                                <ul>
                                    <li><a class="hover-target" href="https://www.linkedin.com/in/andre-vasquez-20221/"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a class="hover-target" href="https://github.com/ankrudov"><i class="fab fa-github"></i></a></li>
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