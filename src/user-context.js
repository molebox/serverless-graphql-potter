import React from "react";

const UserHouseStateContext = React.createContext();
const UserHouseDispatchContext = React.createContext();

function houseReducer(state, action) {
  switch (action.type) {
    case "griffindor": {
      return {
        state,
        isSelected: true,
      };
    }
    case "hufflepuff": {
      return {
        state,
        isSelected: true,
      };
    }
    case "slytherin": {
      return {
        state,
        isSelected: true,
      };
    }
    case "ravenclaw": {
      return {
        state,
        isSelected: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserHouseContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(houseReducer, {
    selectedHouse: "",
  });
  console.log("CONTEXT STATE: ", state);

  return (
    <UserHouseStateContext.Provider value={state}>
      <UserHouseDispatchContext.Provider value={dispatch}>
        {children}
      </UserHouseDispatchContext.Provider>
    </UserHouseStateContext.Provider>
  );
}

function useHouseState() {
  const context = React.useContext(UserHouseStateContext);
  if (context === undefined) {
    throw new Error("useHouseState must be used within a Provider");
  }
  return context;
}

function useHouseDispatch() {
  const context = React.useContext(UserHouseDispatchContext);
  if (context === undefined) {
    throw new Error("useHouseDispatch must be used within a CountProvider");
  }
  return context;
}

export { UserHouseContextProvider, useHouseState, useHouseDispatch };
