import React, { createContext, useReducer } from 'react';



export const DarkModeContext= createContext();

const initialState = {darkMode: false}

const ThemeReducer = (state, action)=>{

switch(action.type){
  case 'toggle':
    return{darkMode: !state.darkMode}
    default:
      return state;
}
}
export const ThemeProvider=(props)=>{
  const [state, dispatch] = useReducer(ThemeReducer, initialState)
  return(
    <DarkModeContext.Provider value={{state, dispatch}}>
      {props.children}
    </DarkModeContext.Provider>
  )
}