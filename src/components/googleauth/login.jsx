import { GoogleLogin } from "@react-oauth/google";
const clientID="813308362434-06gj12366fs5uphq25ui5cu3jor9ot5h.apps.googleusercontent.com";

function  Login(){

    const onSuccess = (res) => {
        console.log("Login in", res.profilObj);
    }

    const onFailure = (err) => {
        console.log("Login failed", err);
    }

    return(
        <div id="signInButton">
            <GoogleLogin clientId={clientID} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
        </div>
    )

}
export default Login;