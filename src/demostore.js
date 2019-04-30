import {createStore} from 'redux';

const initState = {
    todos: [],
    posts: [],
}

myreducer = (state = initState, action) => {

}


const store = createStore(myreducer);


const todoAction = { type: 'ADD_TODO', todo: 'buy milk'}

store.dispatch(todoAction);