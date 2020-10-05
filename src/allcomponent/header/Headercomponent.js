import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Head.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 

function Headercomponent() {
	const [usertab, setSsertab] = useState(false);

	const usertabdata = () => {
		setSsertab(!usertab);
	}
    
  return (
    <div className="container-fluid">
		<nav class="navbar navbar-expand-lg navbartext">
			<Link to="/"><a class="navbar-brand" href="#">
				<img className='' width="60" height="40" alt='logo.png' src={`${process.env.PUBLIC_URL}/logo.png`}/></a></Link>	
			<Link to="/"><a class="navbar-brand" href="#"><b>কেনা-বেচা ডট কম</b></a></Link>

			<Link to="/all_add_post"><a class="navbar-brand" href="#">সকল বিজ্ঞাপন</a></Link>			
			 
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">			
		 
			</div>
			</div>
				<Link to="/my_add_post"><a class="navbar-brand" href="#">আপনার বিজ্ঞাপন দিন</a></Link>
				<a class="navbar-brand" onClick={usertabdata}>আমার অ্যাকাউন্ট</a>
		</nav>

{
	usertab ? 

	<div className="my_add_post">
			<div className="my_add_post_Header">
				<a class="navbar-brand text-light">একাউন্ট তথ্য ভিত্তিক</a>
			</div> 

			<div className="my_add_post_Container">
				<div className="container-fluid ">
					<div className="row">
							<div className="col-md-6 leftcontaint">
								<div className="">	
										<input type="text" name="username" className="text" placeholder="User Name"/><br/><br/>
										<input type="Password" name="Password" className="text" placeholder="Password"/><br/><br/>
										<center><input type="submit" className="logsubmit" value="Login"/></center>

								</div> 
								  
							</div>
							
							<div className="col-md-6 google_auth">
								<center><button type="button" class="btn btn-lg button google_auth_btn">Google Authicticate</button></center><br/>
								<center><button type="button" class="btn btn-lg button facebook_auth_btn">Facebook Authicticate</button></center>
								 
								 
							</div>
					</div>
				</div>
				
			</div> 

			<div className="my_add_post_Fooder">
				<a class="navbar-brand text-light" onClick={usertabdata}>এড়িয়ে যান</a>				
			</div> 
	</div> 



	: ""

}

			

</div>
  );
}


export default Headercomponent;
