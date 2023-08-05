'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
function AuthContextProvider(props) {

const[UserDetails,setUserDetails]=useState(null);
  async function getuser() {
    try {
    const user_details=await axios.get("/auth/isauthentic");
    setUserDetails(user_details.data);  
  // console.log("Context : ",user_details.data);
  } catch (err) {
    setUserDetails(null);
      // console.error("Not Authenticated :",err);
    }
  }
  
  useEffect(() => {
    getuser();
  }, []);
  
  const [call_again_getuser, setcall_again_getuser] = useState(false);
  useEffect(() => {
    // console.log("Recall : GetUser");
    getuser();
  }, [call_again_getuser]);

  return (
    <AuthContext.Provider value={{UserDetails,setUserDetails,call_again_getuser,setcall_again_getuser}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };