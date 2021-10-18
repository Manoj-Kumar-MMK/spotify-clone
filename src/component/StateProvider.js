import React, { useReducer, useContext } from "react";

export const State = React.createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
	<State.Provider value={useReducer(reducer, initialState)}>
		{children}
	</State.Provider>
);

export const useDetails = () => useContext(State);
