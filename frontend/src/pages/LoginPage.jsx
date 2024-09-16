import { Link } from "react-router-dom"
import GoogleSignin from "../components/GoogleSignIn"
import Login from "../components/Login"

export const LoginPage = () => {
    return (
        <>
                <div className="center">
                    <div className="form">
                        <div style={{width:"100%" ,  marginBottom:"1em"}}><h1>Login</h1></div>
                        <Login />
                        <GoogleSignin />
                    </div>
                </div>
                
        </>
    )
}