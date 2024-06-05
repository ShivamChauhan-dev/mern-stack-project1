import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState('')
    const [services , setServices] = useState('');
    
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("islogedin",isLoggedIn);

    // tackling the logout functionality
    const LogoutUser =() =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    // KWT AUTHENTICATION - To get the currently user data
    
    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization:`Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data ", data.userData);
                setUser(data.userData);
               
              } else {
                console.error("Error fetching user data");
              }
        } catch (error) {
            console.error("Error fetching user data")
        }
    };

    // to fetch the services data from the database
    const getServicesData = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

            if(response.ok){
                const services = await response.json();
                console.log(services.data);
                setServices(services.data)
            }
        } catch (error) {
            console.log(`services frontend error : ${error}`);
        }
    }

    useEffect(() => {
        getServicesData();
        userAuthentication();
    },[]);

    return <AuthContext.Provider value ={{  isLoggedIn, storeTokenInLS, LogoutUser, user, services }}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) {
        throw new Error("useAuth user outside of the Provider");
    }
    return AuthContextValue;
}
