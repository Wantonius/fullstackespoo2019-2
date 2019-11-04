const initialState = {
	list:[],
	id:100
}

const shoppingReducer = (state = initialState, action) => {
	console.log("ShoppingReducer, action:",action.type);
	let tempState = {}
	let tempList = []
	switch(action.type) {
		case "ADD_TO_LIST":
			action.item.id = state.id+1;
			let tempId = state.id+1;
			tempList = state.list.concat(action.item);
			tempState = {
				list:tempList,
				id:tempId
			}
			console.log("Action",action.type);
			console.log("State",tempState);
			return tempState;
		case "REMOVE_FROM_LIST":
			let id = parseInt(action.id,10);
			for(let i=0;i<state.list.length;i++) {
				if(state.list[i].id !== id) {
					tempList.push(state.list[i]);
				}
			}
			tempState = {
				...state,
				list:tempList
			}
			console.log("Action",action.type);
			console.log("State",tempState);
			return tempState;			
		default:
			return state
	}
}

export default shoppingReducer;