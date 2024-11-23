import facebook from "../media/facebook.png"
import google from "../media/google.png"
import github from "../media/github.png"
const Login = () => {
  return (
    <>
<div className="login-card">
       <h2>Log In</h2>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button className="login-btn" >Login</button>
         <h3>or log in with</h3>
        <div className="button-container">
            <img src={facebook}/>
            <img src={google}/>
            <img src={github}/>
        </div>
        <p>create your new account? <span>Sign in</span></p>
   
</div>
    </>
    
  )
}

export default Login