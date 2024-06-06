import React, { createContext, useContext ,useState} from 'react'


export const AuthContext= createContext();
export default function authProvider({children}) {
    //localstorage se apne user ko layenge
    const initialAuthUser= localStorage.getItem("Users");
    //state mangage
    const [authUser,setAuthUser]=useState(
        initialAuthUser? JSON.parse(initialAuthUser): undefined
    )
    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
    )
    
}

//hook
export const useAuth=()=>useContext(AuthContext)

//isko main.app m wrap krna hoga
