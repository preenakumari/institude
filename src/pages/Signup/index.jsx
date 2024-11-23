import googleicon from "../media/google.png"
import githubicon from "../media/github.png"
import facebook from "../media/facebook.png"
import logo from "../media/form logo.jpg"
const Signup = () => {
  return (
<>
<body>
  <div className="signup-container">
    <form className="signup-form">
      <div className="formlogo">
      <img src={logo} />
      </div>
      <h2>Create an account</h2>
      <input type="text" placeholder=" Name" />
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password" />
      <button type="submit">SignUp</button>
      <h5>Or Sign up with</h5>
      <div className="icons">
      <img src={facebook}/>
      <img src={googleicon}/>
      <img src={githubicon}/>
      </div>
      <p>Already have an account? <span>Log in</span></p>
    </form>
  </div>
</body>

  </>
  )
}

export default Signup


{/* <body>
    <div className="mainCards">
      <div className="card-Container">
        <h2>Create an account</h2>
        <form className="formss">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <button>Next</button>

        </form>
      </div>
      </div>
</body> */}


