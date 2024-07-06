import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="p-4 bg-primary text-white rounded">
            <h5>Contact Info</h5>
            <p>LET'S CONNECT WITH US</p>
            <p>THIS COULD BE THE BEGINNING OF THE BEAUTIFUL RELATIONSHIP</p>
            <p><strong>Phone Number:</strong> +91 9970850512</p>
            <p><strong>Visit Us Office:</strong> 17/1 Amar Plaza Salt Lake SMS, India Road, IT Park Rd, Nagpur - 440022, Third Floor, Beside Persistent.</p>
            <p><strong>Mail Us:</strong> prafullanathile@gmail.com</p>
          </div>
        </div>
        <div className="col-md-8">
          <form className="p-3">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input type="text" className="form-control" id="name" placeholder="Name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Your Email *</label>
                <input type="email" className="form-control" id="email" placeholder="Email" required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input type="text" className="form-control" id="phone" placeholder="Phone Number" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="postalCode" className="form-label">Postal Code *</label>
                <input type="text" className="form-control" id="postalCode" placeholder="Postal Code" required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="comments" className="form-label">Your Comments *</label>
              <textarea className="form-control" id="comments" rows="3" placeholder="Write your comment" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
