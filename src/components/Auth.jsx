
import { useState } from 'react';
import {auth,} from '../Config';
import {createUserWithEmailAndPassword,} from "firebase/auth"

export const Auth = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  
  
   const signIn = async ()=>{
    
    try {
      await createUserWithEmailAndPassword(auth,email,password);
    } catch (error) {
       console.error(error);
    }
  }

  // const  logout = async () =>{
  //   try {
  //     await signOut(auth)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  

   return (
    <div> 
      <h2> form test</h2>
      {/*  sign up form */}
      <div>
                <h2> signin </h2>      
        <input placeholder="emaill"
         id="email" 
         type="text"
         onChange= {(e) => setEmail(e.target.value)}
         
         />
        <input 
        placeholder="password" 
        id="password" 
        type="password"
        onChange= {(e) => setPassword(e.target.value)}
        />
         <button onClick={signIn}>  sign in</button>
         {/* <button onClick={logout}> logout</button> */}
      </div>
      {/*  sign in form */}
      <h2> Login</h2>
      <input  placeholder='email' type='email' id='email'/>
      <input placeholder='password' type='password' id='password'/>
      <button> sign out</button>

      
    </div>
  )
}
