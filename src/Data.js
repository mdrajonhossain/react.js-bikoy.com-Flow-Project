import React from 'react';
import { connect } from 'react-redux';
import Filee from './File';

 

function Data(props) {
 

  return (   
      <div className="">
      <div className="">{props.name}</div>
      <div className="">{props.fname}</div>

      </div>
    
  );
}


const mapStateToProps = (state) => {
	return {
		name : state.name
	}
}


export default connect(mapStateToProps)(Data)

