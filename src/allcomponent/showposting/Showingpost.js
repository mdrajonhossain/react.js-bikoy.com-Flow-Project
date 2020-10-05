
import React from 'react';
import './Showingpost.css';
import { connect } from 'react-redux';
import Headercomponent from '../header/Headercomponent'; 
import Foodercomponent from '../fooder/Foodercomponent'; 
import { BrowserRouter as Router, Route, Like, Switch, useParams } from 'react-router-dom';
  
 const data = [
  {id:'1', name:'Barishal', price:'100', quantotal :'50gram', product_code:'122'},
  {id:'2', name:'Abatacept', price:'90', quantotal : '50gram', product_code:'123'},
  {id:'3', name:'Barishal', price:'50', quantotal : '50gram', product_code:'124'},
  {id:'4', name:'Dhaka', price:'150', quantotal : '50gram', product_code:'125'},
  {id:'5', name:'Abilify', price:'170', quantotal : '50gram', product_code:'126'},
  {id:'6', name:'Chottogram',price:'60', quantotal : '50gram', product_code:'127'},
  {id:'7', name:'Acamprosate Barishal',price:'10', quantotal : '50gram', product_code:'128'},
  {id:'8', name:'Dhaka',price:'10', quantotal : '50gram', product_code:'129'},
  {id:'9', name:'Chottogram',price:'10', quantotal : '50gram', product_code:'130'},
  {id:'10', name:'Accretropin',price:'10', quantotal : '50gram', product_code:'131'},
  {id:'11', name:'Chottogram',price:'10', quantotal : '50gram', product_code:'132'},
  {id:'12', name:'Accupril',price:'10', quantotal : '50gram', product_code:'133'},
  {id:'13', name:'Accutane',price:'10', quantotal : '50gram', product_code:'134'},
  {id:'14', name:'Dhaka', price:'10', quantotal : '50gram', product_code:'135'},
  {id:'15', name:'Barishal', price:'10', quantotal : '50gram', product_code:'136'},
  {id:'16', name:'Chottogram', price:'10', quantotal : '50gram', product_code:'137'},
  {id:'17', name:'Acetaminophen', price:'10', quantotal : '50gram', product_code:'138'},
  {id:'18', name:'Acetic Acid', price:'10', quantotal : '50gram', product_code:'139'},
  {id:'19', name:'Aci-Jel', price:'10', quantotal : '50gram', product_code:'140'},
  {id:'20', name:'Aciphex', price:'10', quantotal : '50gram', product_code:'141'},
  {id:'21', name:"Barishal", price:'10', quantotal : '50gram', product_code:'142'},
  {id:'22', name:'Dhaka', price:'10', quantotal : '50gram', product_code:'143'},
  {id:'23', name:'Acrivastine and Pseudoephedrine', price:'10', quantotal : '50gram', product_code:'144'},
  {id:'24', name:'Chottogram', price:'10', quantotal : '50gram', product_code:'145'},
  {id:'25', name:'Acthrel', price:'10', quantotal : '50gram', product_code:'146'},
  {id:'26', name:'Acticin', price:'10', quantotal : '50gram', product_code:'147'},
  {id:'27', name:'Barishal', price:'10', quantotal : '50gram', product_code:'148'},
  {id:'28', name:'Dhaka', price:'10', quantotal : '50gram', product_code:'149'},
  {id:'29', name:'Activase', price:'10', quantotal : '50gram', product_code:'150'},
  {id:'30', name:'Activella', price:'10', quantotal : '50gram', product_code:'151'},
  {id:'31', name:'Actonel', price:'10', quantotal : '50gram', product_code:'152'},
  {id:'32', name:'Dhaka', price:'10', quantotal : '50gram', product_code:'153'},
  {id:'33', name:'Acular', price:'10', quantotal : '50gram', product_code:'154'},
  {id:'34', name:'Acular LS', price:'10', quantotal : '50gram', product_code:'155'},
  {id:'35', name:'Acuvail', price:'10', quantotal : '50gram', product_code:'156'},
  {id:'36', name:'Acyclovir', price:'10', quantotal : '50gram', product_code:'157'},
  {id:'37', name:'Dhaka', price:'10', quantotal : '50gram', product_code:'158'},
  {id:'38', name:'Adalimumab', price:'10', quantotal : '50gram', product_code:'159'},
  {id:'39', name:'Adapalene', price:'10', quantotal : '50gram', product_code:'160'},
  {id:'40', name:"Adcirca", price:'10', quantotal : '50gram', product_code:'161'},
  {id:'41', name:"Chattogram", price:'10', quantotal : '50gram', product_code:'162'},
  {id:'42', name:"Adderall XR", price:'10', quantotal : '50gram', product_code:'163'},
  {id:'43', name:"Adefovir Dipivoxil", price:'10', quantotal : '50gram', product_code:'164'},
  {id:'44', name:"Adenoscan", price:'10', quantotal : '50gram', product_code:'165'},
  {id:'45', name:"Adenosine", price:'10', quantotal : '50gram', product_code:'166'},
  {id:'46', name:"Adipex-P", price:'10', quantotal : '50gram', product_code:'167'},
  {id:'47', name:'Avodart', price:'10', quantotal : '50gram', product_code:'168'},
  {id:'48', name:'Axert', price:'10', quantotal : '50gram', product_code:'169'},
  {id:'49', name:'Avonex', price:'10', quantotal : '50gram', product_code:'170'},
  {id:'50', name:'Chattogram',  price:'10', quantotal :'50gram', product_code:'171'},
  {id:'51', name:'Aygestin', price:'10', quantotal : '50gram', product_code:'172'},
  {id:'52', name:'Azacitidine', price:'10', quantotal : '50gram', product_code:'173'},
  {id:'53', name:'Chattogram', price:'10', quantotal : '50gram', product_code:'173'},
  {id:'54', name:'Rajshahi', price:'10', quantotal : '50gram', product_code:'174'},
  {id:'55', name:'Azelaic Acid', price:'10', quantotal : '50gram', product_code:'175'},
  {id:'56', name:'Azelastine Hydrochloride', price:'10', quantotal : '50gram', product_code:'176'},
  {id:'57', name:'Azelex', price:'10', quantotal : '50gram', product_code:'177'},
  {id:'58', name:'Azilect', price:'10', quantotal : '50gram', product_code:'177'},
  {id:'59', name:'Rajshahi', price:'10', quantotal : '50gram', product_code:'178'},
  {id:'60', name:'Azor', price:'10', quantotal : '50gram', product_code:'178'},
  {id:'61', name:'Azmacort', price:'10', quantotal : '50gram', product_code:'179'},
  {id:'62', name:'Azopt', price:'10', quantotal : '50gram', product_code:'180'},
  {id:'63', name:'Rajshahi EN-Tabs', price:'10', quantotal : '50gram', product_code:'181'}
]
 

function Showingpost(props) {

 
  const {name} = useParams();

const medicindata = data.filter(function(user) {
        return user.name.match(name);
      });
  

  console.log(medicindata)
   
  return (
  	<div className="">

      	<div className="container-fluid bg-info manushadow">
        	 <Headercomponent/>
        </div>


 
        <div className="container-fluid centercontain">
          {
              medicindata.map(function(bata){
                return <div className="">{bata.name} / {bata.price} / {bata.product_code}</div>
              })

          }
        </div>
 


        <div className="container-fluid bg-info fooderbox">
            <Foodercomponent/>
        </div>

    </div>
  );
}

export default Showingpost
