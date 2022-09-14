import React from 'react';
import PasswordRevealer from '../components/PasswordRevealer';
import './Foodapp.css';
import pic26 from './Assets/pic26.jpeg'
import { FiCoffee, FiFacebook, FiInstagram, FiPhoneCall, FiTwitter } from 'react-icons/fi';



const Signup = () => {
    return  <div className='foo'>
    <div className='bg-img'>
        <img src={pic26} alt="Ellies" width="100%" height="80%" style={{opacity:"0.7"}} />
        <h3 className='top-right'>Ellies Food and<br></br> Dessert</h3>
        <form className='container'>
        <FiCoffee></FiCoffee>
        <h1>Signup</h1>
            <label><b>Preferred name</b></label>
            <br></br>
            <input typeof='text' placeholder ='Enter your Name' required></input><br></br>
            <br></br>            
            <label><b>Email</b></label>
            <br></br>
            <input typeof='email' placeholder ='Enter your Email address' required></input><br></br>
            <br></br>
            <label><b>Password</b></label>
            <br></br>
            <PasswordRevealer/>
            <br></br>
            <button typeof='submit' className='btn'>Submit</button>
            </form>
        <p style={{cursor:"pointer"}}><b>Follow us on Social Media</b><br></br>
            <FiFacebook/>  Ellies Food Page<br></br>
            <FiTwitter/>  Ellies Food and Dessert<br></br>
            <FiInstagram/>  Ellies Food and Dessert<br></br>
            <b>to get updated on your favorite dish and cookies😋</b> 
        </p>
    </div>
<p>Visit Our Restaurant @<br></br>
    <em>Behind Atimagees Hotel and Suites,Yoaco Phase 2, Ogbomoso, Oyo. Oyo State</em><br></br>
    <FiPhoneCall/> <b>07088643717</b>
    </p>

<h5> Thank you For Coming! 😊</h5>

</div>;
}

export default Signup;