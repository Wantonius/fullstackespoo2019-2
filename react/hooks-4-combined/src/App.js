import React,{useReducer,useState,useEffect} from 'react';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

const initialState = {
	list:[],
	loading:false
}

const listReducer = (state,action) => {
	let tempState = {};
	switch(action.type) {
		case "FETCH_LOADING": 
			tempState = {
				...state,
				loading:true
			}
			return tempState;
		case "FETCH_DONE":
			tempState = {
				...state,
				loading:false
			}
			return tempState;
		case "LIST_LOADED":
			tempState = {
				list:action.list,
				loading:false
			}
			return tempState;
		default:
			return state;
	}
}

function App() {
	const [state,dispatch] = useReducer(listReducer,initialState);
	const [urlRequest,setUrlRequest] = useState({
		request:{},
		url:""
	});
	
	useEffect(() =>{
		const fetchData = async () => {
			dispatch({type:"FETCH_LOADING"})
			try {
				const response = await fetch(urlRequest.url,urlRequest.request);
				if(response.ok) {
					if(urlRequest.request.method === "GET") {
						const data = await response.json();
						dispatch({type:"LIST_LOADED",list:data})
					} else {
						dispatch({type:"FETCH_DONE"})
						getList();
					}
				}
			} catch(error) {
				console.log(error);
			}
		}
		fetchData();
	},[urlRequest])
	
	const addToList = (item) => {
		setUrlRequest({
			request: {
				method:"POST",
				mode:"cors",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(item)
			},
			url:"/api/shopping"
		})
	}
	
	const removeFromList = (id) => {
		setUrlRequest({
			request: {
				method:"DELETE",
				mode:"cors",
				headers:{"Content-Type":"application/json"}
			},
			url:"/api/shopping/"+id
		})
	}
	
	const getList = () => {
		setUrlRequest({
			request: {
				method:"GET",
				mode:"cors",
				headers:{"Content-Type":"application/json"}
			},
			url:"/api/shopping"
		})		
	}
	
	let ui = <h2>Shopping App</h2>
	if(state.loading) {
		ui = <h2>Loading ...</h2>
	}
	
	return (
		<div className="App">
			{ui}
			<ShoppingForm addToList={addToList}/>
			<hr/>
			<ShoppingList list={state.list} removeFromList={removeFromList}/>
		</div>
	)
}

export default App;
