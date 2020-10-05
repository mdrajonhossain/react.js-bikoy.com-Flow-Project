import React from 'react';
import './Buttomtagpost.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
  

function Buttomtagpost() {
 
  return (
  	<div className="Buttomtagpost"> 	 
		 <div className="container-fluid">
     		<div className="text-center">
		     	<h4 className="anumat">বিক্রি করার জন্য আপনার কি কিছু আছে?</h4>
			     <h6>Kana_Bacha.com এ আপনার বিজ্ঞাপন পোস্ট করুন।</h6>
			     <Link to="/my_add_post"><h5> <button type="button" class="btn btn-lg button">এখনই বিজ্ঞাপন পোস্ট করুন!</button></h5></Link>
     		</div>
  		</div>		
  </div>
   
  );
}

 

export default Buttomtagpost
