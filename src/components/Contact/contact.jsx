import React from 'react'
import "./contact.css"

const contact = () => {
  return (
    <section className='contact container section' id='contact'>
    <h2 className='section__title'> Get In Touch!</h2>

      <div class="contact__container">
        <div class="ContactInfo">
          <div class="box">
            <div class="icon"> <i className='icon-location-pin'></i> </div>
            <div class="text">
              <h3>Address</h3>
              <p>2-129 Lingala - 518442, Nandyala(Dist), AP.</p>
            </div>
          </div>

          <div class="box">
            <div class="icon"> <i className='icon-phone'></i> </div>
            <div class="text">
              <h3>Phone</h3>
              <p> +91 8500491520</p>
            </div>
          </div>

          <div class="box">
            <div class="icon"> <i className='icon-envelope'></i> </div>
            <div class="text">
              <h3>Email</h3>
              <p> nkuumaraswamy@gmail.com </p>
            </div>
          </div>

        </div>

        <div class="contactForm">
          <form>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" name="" required="required"></input>
                <span>Full Name</span>
            </div>

            <div class="inputBox">
              <input type="text" name="" required="required"></input>
                <span>Email</span>
              
            </div>

            <div class="inputBox">
             <textarea required="required"></textarea>
                <span>Type your Message</span>
            </div>

            <div class="inputBox">
            <input type="submit" name="" value="Send" ></input>
            </div>


          </form>
        </div>
      </div>

    </section>
  )
}

export default contact