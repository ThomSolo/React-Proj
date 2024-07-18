import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            // Cleanup if necessary
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_259afvp', // Replace with your EmailJS service ID
            'template_lfb68yb', // Replace with your EmailJS template ID
            form.current,
            'AvFVq_dyKhpxfFX4s' // Replace with your EmailJS public key
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again.');
        });
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Here you can send me an email by 
                        filling in the credentials below.
                        <br /> you can also view the location
                        of where I attend college (Kean University).</p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="from_name" required />
                                </li>
                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Solomon Thomas,
                    <br />
                    New Jersey,
                    <br />
                    1040 Morris Ave, <br />
                    Union, NJ 07083 <br />
                    <br />
                    <span>thomsolo@kean.edu</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[40.68283982343619, -74.23623283419553]} zoom={50}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[40.68283982343619, -74.23623283419553]}>
                            <Popup>This is where I go to college.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
