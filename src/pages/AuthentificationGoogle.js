import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const AuthentificationGoogle = () => {
  const clientId = "Entrez votre identifiant client";

  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onFailure={onError} />
    </GoogleOAuthProvider>
  );
};

export default AuthentificationGoogle;
