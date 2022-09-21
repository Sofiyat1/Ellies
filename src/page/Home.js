import React, { useEffect } from 'react';
/*import React from 'react';*/
import './Foodapp.css';

import pic28 from './Assets/pic28.jpeg'
import pic14 from './Assets/pic14.jpeg'
import pic7 from './Assets/pic7.jpeg'
import pic5 from './Assets/pic5.jpg'
import pic2 from './Assets/pic2.jpg'

/*import pic17 from './Assets/pic17.jpeg'
import pic20 from './Assets/pic20.jpeg'*/




const Home = () => {
    useEffect(() => {
        alert('Welcome to Ellies')
      }, 
      [])
    return  <div className='foo'>
        <div className='bg'>
        <img src={pic28} alt="Ellies" width="100%"/>
        <div className='centered'>
        <h1>Welcome to Ellies Food<br></br> and Dessert<br></br>
        <button>Get Started</button>
        </h1>
 </div>
    <h4>For decades, Ellies have hosted new guests and old friends from up the 
        street and around in the world 
        right in the heart of Nigeria Square</h4>
        <div className='responsive'>
            <div className='gallery'>
            <img src={pic14} alt="Ellies"/>
            <div className='desc'><b>Bowl of Vegetables</b><br />We've got a lot 
            of delicious veggies and hearty grains, and 
            with plenty of satiating protein.</div>
            </div>
        </div>
        <div className='responsive'>
            <div className='gallery'>
            <img src={pic7} alt="Ellies"/>
            <div className='desc'><b>Spaghetti Pasta</b><br />Try your Spaghetti Pasta with
            vegetables and protein sauces, whole-wheat pasta as well</div>
            </div>
        </div>

        <div className='responsive'>
            <div className='gallery'>
            <img src={pic2} alt="Ellies"/>
            <div className='desc'><b>French Fries</b> <br />French fries
            with your favorite combo is cooked deliciously. Order yours from here at anytime.</div>
            </div>
        </div>

        <div className='responsive'>
            <div className='gallery'>
            <img src={pic5} alt="Ellies"/>
            <div className='desc'><b>Pizza</b> <br />Your healthy pizzas that deliver 
            a good amount of sodium from tomato sauce and cheese
            is here</div>
            </div>
        </div>
        </div>
<div class="clearfix"></div>
<h2>Our Story</h2>
    <p>Everything we do is a celebration of seafood - from how we sauce our fish and shellfish to serving up new ways
        for you to enjoy it. Since 1998, we've been committed to bringing you a seafood experience you won't find
        anywhere else. That's how we Sea food Different  jhjhdjhfjhhjjdhjkgdjjhbjhajajajhjdcbbuiihnbuiiwehoqjhuqoqwj
        eheuryeruiquehrulrweuhqqunoiwryyuwnduyrh</p> 
        <h5>Thank you For Coming ! 😊</h5>
        
</div>;
}
export default Home;