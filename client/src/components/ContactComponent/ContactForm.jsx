import React,{useState} from 'react';
import './ContactForm.css';


function ContactForm(){
    const [status, setStatus] = useState('Submit');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        try{
            let details = {
              name: name.value,
              email: email.value,
              message: message.value,
            };
            let response = await fetch("http://localhost:5000/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify(details),
            });
            let result = await response.json();
            setStatus(result.status+'!');
            setButtonDisabled(true);
        }catch(error){
          console.log(error.message)
        }
      };

    return(
        <section id="contact">
            <div className="contact-box">
                <div className="contact-links">
                <h2>Contact Me</h2>
                <div className="links">
                    <div className="link">
                    <a href='https://www.linkedin.com/in/andre-vasquez-20221/' target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
                    </div>
                    <div className="link">
                    <a href='https://github.com/ankrudov' target="_blank" rel="noopener noreferrer"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
                    </div>
                </div>
                </div>
                <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-item">
                    <input type="text" name="name" required/>
                    <label htmlFor='name'>Name:</label>
                    </div>
                    <div className="form-item">
                    <input type="email" name="email" required/>
                    <label htmlFor='email'>Email:</label>
                    </div>
                    <div className="form-item">
                    <textarea className="" name="message" required></textarea>
                    <label htmlFor='message'>Message:</label>
                    </div>
                    <button type='submit' className={buttonDisabled ? 'submit-btn disabled' :'submit-btn'} disabled={buttonDisabled}>{status}</button>  
                </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;