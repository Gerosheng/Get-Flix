
const Login: React.FC = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
        <div className="50-w p-5 rounded bg-white"> 
            <form>
            <h3 className="text-center">Sign in</h3>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email" required/>  
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" className="form-control" required/>  
            </div>
<div className="mb-2">
    <input type="checkbox" className="custom-control custom-checkbox" id="check" />
    <label htmlFor="check" className="custom-input-label ms-2">
        Remember me
    </label>
</div>
<div className="d-grid">
    <button className="btn btn-primary">Sign in</button>

</div>
<p className="text-right">
Forgot <a href="">Password?</a> <a href="signup" className= 'ms-2'>Sign up</a>
</p>
        </form>
                        
                    </div>
                </div>
            );
        }
export default Login