import React from 'react'

const Contact = () => {
  return (
    
        <section className='contact-form' style={{backgroundImage:"url(hh.png)"}}>
     <div className='contact'>        
            <h2 className='fade-in'>Contact Us</h2>
            <form>
            <input type="text" placeholder="Full Name"required/>
            <input type="email"placeholder="Email Address"required />
            <input type="text"placeholder="Phone Number" required/>  
            <textarea placeholder='Your Message' rows={5} required></textarea>
            <button type='submit'>Send Message</button>
            </form>
    </div>
        </section>
    
  )                                    
}

export default Contact