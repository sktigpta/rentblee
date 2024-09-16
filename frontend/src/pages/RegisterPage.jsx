import GoogleSignin from "../components/GoogleSignIn"
import Register from "../components/Register"

export const RegisterPage = () => {
    return (
        <>
            <div className="center">
                <div className="form">
                    <div style={{ width: "100%", marginBottom: "1em" }}><h1>Register</h1></div>

                    <Register />
                    <GoogleSignin />
                </div>
            </div>

        </>
    )
}