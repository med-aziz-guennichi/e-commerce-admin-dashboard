import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Form = () => {
    return (
        <div className='form'>
            <div className="formDiv">
                <div className="formTop">
                    <img src="./assets/uploads/about-us-page-heading.jpg" alt="" />
                    <div className="formTexts">
                        <h2>Contact Us</h2>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className="formBottom">
                    <div className="formBottomLeft">
                        <div className="formBottomMaps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367380.626042976!2d20.54577007414543!3d43.99739461371101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475722378d46f397%3A0xbcd94f29a6054e66!2z0JrRgNCw0LPRg9GY0LXQstCw0YY!5e0!3m2!1ssr!2srs!4v1670781687344!5m2!1ssr!2srs" width={600} height={450} style={{ border: 'none' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Maps'></iframe>
                        </div>
                    </div>
                    <div className="formBottomRight">
                        <div className="formBottomTexts">
                            <h2>Say Hello. Don't Be Shy!</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className="formBottomForm">
                            <form>
                                <div className="formBottomGroups">
                                    <input type="text" required placeholder='Your Name' />
                                    <input type="text" required placeholder='Your Email' />
                                </div>
                                <div className="formBottomGroups">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                                </div>
                                <button className='formBottomBtn'><FaPaperPlane /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form