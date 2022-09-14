import React from "react";
import './Foodapp.css';
import PasswordRevealer from '../components/PasswordRevealer';
import { FiCoffee } from 'react-icons/fi';
import pic7 from './Assets/pic7.jpg';



const Login = () => {

    return <div className='foo'>
        <div className='bg-img'>
            <img src={pic7} alt="Ellies" width="100%" height="80%" style={{opacity:"0.7"}} />
            <h3 className='top-right'>Ellies Food and<br></br> Dessert</h3>

            <form className='container'>
            <FiCoffee></FiCoffee>
            <h1>Login</h1>
            <label><b>Username/Email/Phone number</b></label><br></br>
            <input type='text' placeholder ='Enter Username' required></input>
            <br></br><br></br>
            <label><b>Password</b></label><br></br>
            <PasswordRevealer/>
            <br></br>
            <button type='submit' className='btn' value="Submit">Submit</button>
            </form>
    <h2>Ellies Food and Dessert</h2>
        <p>There's nothing cookie-cutter about Pizza Hut. Not our Pizza, not our People, and definitely not the way we live<br></br>
            Around here we don't settle for anything less than food we're proud to serve. And we don't just clock in. Not when<br></br>
           we can also become our best, make friends and have fun while we are at it.<br></br> <br></br>
            <em>We are not for people who want to blend in:<b> pushing boundaries is part of our heritage</b> </em></p>
            </div>

            <h5>Thank you For Coming ! 😊</h5>
        </div>;
}



export default Login;