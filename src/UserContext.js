import React, { useState } from "react";

let UsersContext = React.createContext()

export default UsersContext;

// Provider

export const UserProvider = ({children}) => {
    const [userList, setUserList] = useState([])
    return <UsersContext.Provider value = {{userList, setUserList}}>
        {children}
    </UsersContext.Provider>
}