import React, { createContext, useState } from 'react'


// export the const : two pieces : 1 the actual storage itself the literal context 
//build a context a pass the default value to it
//actual value u wnt to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Provider : the actual component the literal functional compoent we receeive children
// we need to return <UserContext.Provider></UserContext.Provider>
//raps around every compoent that need access to state of context

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
     //generate the value thats going to be passed in the value
    const value = { currentUser, setCurrentUser };
    //returns user context.provider
    //receive the value (states that needs to be passed)
    // call the setter and get the value anywhere inside the component tree
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}