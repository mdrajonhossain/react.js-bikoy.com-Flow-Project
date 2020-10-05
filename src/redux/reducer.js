const initialstate = {
	name : []
}


const reducer = (state=initialstate, action) => {

	switch(action.type){
		case "dd" :
			return {name: [...state.name, action.playload]}		
	default:
		return state
	}
}

export default reducer;
