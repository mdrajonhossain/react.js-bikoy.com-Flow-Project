import React from 'react';
import './Slidertag.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
 

function Slidertag(props) {
 
  
  return (
      <div className="container-fluid">

      <br/>
        <div className="row">
          
            <div className="col-md-2">               
                  <a className="list-group-item list-group-item-action bg-info text-light text-center">শহর</a>                                     
                   
                  <Link to={"/Showingpost/Dhaka"}><a href="#" className="list-group-item list-group-item-action text-center">ঢাকা</a></Link>
                  <Link to="/Showingpost/Chottogram"><a href="#" className="list-group-item list-group-item-action text-center">চট্টগ্রাম</a></Link>
                  <Link to="/Showingpost/Sylate"><a href="#" className="list-group-item list-group-item-action text-center">সিলেট</a> </Link>
                  <Link to="/Showingpost/Khulna"><a href="#" className="list-group-item list-group-item-action text-center">খুলনা</a> </Link>
                  <Link to="/Showingpost/Barishal"><a href="#" className="list-group-item list-group-item-action text-center">বরিশাল</a> </Link>
                  <Link to="/Showingpost/Rajshahi"><a href="#" className="list-group-item list-group-item-action text-center">রাজশাহী</a> </Link>
                  <Link to="/Showingpost/Rangpur"><a href="#" className="list-group-item list-group-item-action text-center">রংপুর</a> </Link>
                  <Link to="/Showingpost/Maymonsing"><a href="#" className="list-group-item list-group-item-action text-center">ময়মনসিংহ</a> </Link>
            </div>





            <div className="col-md-8 text-center dd">      
                 

               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="./top_slider/01.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="./top_slider/02.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="./top_slider/03.jpg" class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
              </div>
          
              

            </div>



 



            <div className="col-md-2">    	    			  
                  <a   className="list-group-item list-group-item-action bg-info text-light text-center">বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">ঢাকা বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">চট্টগ্রাম বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">সিলেট বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">খুলনা বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">রাজশাহী বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">রংপুর বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">বরিশাল বিভাগ</a> 
                  <a href="#" className="list-group-item list-group-item-action text-center">ময়মনসিংহ বিভাগ</a> 
            </div>

          </div>
          <a href="#" className="text-danger">
        <marquee className="anumat"> Notice:&nbsp; Kana_Bacha.com-এ স্বাগতম - বাংলাদেশ-এর সবচেয়ে বড় মার্কেটপ্লেস!</marquee>
      </a>
      </div>
  );
}

 

export default Slidertag
