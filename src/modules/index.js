import { combineReducers } from 'redux'
import counter from './counter'
import game from './game'
//initial state when combined reducers?


export default combineReducers({
  counter,
  game
})
