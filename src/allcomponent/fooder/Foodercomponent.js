import React from 'react'; 
import { connect } from 'react-redux';
import './Fooder.css';
 

function Foodercomponent() {

    
  return (
  	<div className="container-fluid">
<div className="fooder">
	    <div className="container-fluid">
	    	<div className="row">
	    		<div className="col-md-3 foodone">
	    			<b>আমাদের অ্যাপ ডাউনলোড করুন </b><br/><br/>
	    				<li class="list-group foodertext"><b>আমাদের সাথে যুক্ত থাকুন</b></li>
						<li class="list-group text-warning">আমাদের ফেসবুক পেজটি লাইক করুন</li>

	    		</div>

	    		<div className="col-md-3 foodtwo">
				    	<ul class="list-group">
						  <li class="list-group"><b>আরও জানুন</b></li>
						  <li class="list-group">দ্রুত বিক্রি করুন</li>
						  <li class="list-group">Kana_Bacha.com-এ</li>
						  <li class="list-group">মেম্বারশিপব্যানার বিজ্ঞাপন</li>
						  <li class="list-group">বিজ্ঞাপন প্রচার করুন</li>
						</ul>
	    		</div>

		    		<div className="col-md-3 foodthree">
		    			<ul class="list-group">
							  <li class="list-group"><b>হেল্প ও সাপোর্ট</b></li>
							  <li class="list-group">প্রশ্ন-উত্তর <br/>
							  Kana_Bacha.com-এ <br/>
							  নিরাপদ থাকুন <br/>
							  আমাদের সাথে যোগাযোগ</li>
							 
						</ul>
		    		</div>


		    		<div className="col-md-3 foodfour">
		    			<ul class="list-group">
							  <li class="list-group"><b>সামাজি ক</b></li>
							  <li class="list-group">ব্লগ <br/> ফেইসবুক <br/> টুইটার ইউটিউব</li> 
						</ul>
		    		</div>
	    	</div>  
		 
		</div>
		<hr/>
			<div className="container-fluid">
				 
					<div className="row">
						<div className="col-md-9 text-left text-danger">Copyright © Md. Rajon Hossain</div>
						<div className="col-md-3"><img className='' width="60" height="40" alt='icon' src="logo.png"/></div>
					</div>
				 
			</div>
</div>
</div>
  );
}


export default Foodercomponent;
