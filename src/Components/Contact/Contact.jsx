import React from 'react';
import './Contact.css'; // Make sure to import your CSS file

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="contact-page-main-container">
                <div className="contact-page-left">
                    {/* <div className="contact-page-left-title">
                        <h1>Contact!
                        </h1>
                        <p>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur.</p>
                    </div> */}
                    <div className="contact-page-left-info">
                        <div className="contact-page-left-info-img">
                            <img src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" alt="" />
                        </div>
                        <div className="contact-page-left-info-text">
                            <h2>Phone Number:</h2>
                            <p>Head-Office : (+011) 948-5481 //</p>
                            <p>Branch-Office : (+011) 948-56487</p>
                        </div>
                    </div>
                    <div className="contact-page-left-info">
                        <div className="contact-page-left-info-img">
                            <img src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" alt="" />
                        </div>
                        <div className="contact-page-left-info-text">
                        <h2>Phone Number:</h2>
                            <p>Head-Office : (+011) 948-5481 //</p>
                            <p>Branch-Office : (+011) 948-56487</p>
                        </div>
                    </div>
                    <div className="contact-page-left-info">
                        <div className="contact-page-left-info-img">
                            <img src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" alt="" />
                        </div>
                        <div className="contact-page-left-info-text">
                        <h2>Phone Number:</h2>
                            <p>Head-Office : (+011) 948-5481 //</p>
                            <p>Branch-Office : (+011) 948-56487</p>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="contact-form">
                        <form>
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Your Name.." />
                                <input type="email" name="email" placeholder="Your Email.." />
                            </div>
                            <div className="form-row">
                                <input type="text" name="phone" placeholder="Phone Number.." />
                                <input type="text" name="subject" placeholder="Your Subject.." />
                            </div>
                            <textarea name="message" placeholder="Enter Your Message.." />
                            <button type="submit">SUBMIT MESSAGE</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Contact;