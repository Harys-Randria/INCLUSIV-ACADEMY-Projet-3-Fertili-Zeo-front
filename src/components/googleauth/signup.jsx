import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


function SignupGoogle() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSuccess = async (credentialResponse) => {
    try {
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log(credentialResponseDecoded);
  
        const { email, name } = credentialResponseDecoded; // Extraire email et name
        const response = await fetch('http://localhost:8080/compte/add/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email, // Email extrait de credentialResponseDecoded
            name, // Nom extrait de credentialResponseDecoded
          }),
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de la requête vers le backend');
        }
  
        const data = await response.json();
        console.log('Réponse du backend :', data);
  
        setUserData(credentialResponseDecoded);
      } catch (error) {
        console.error("Erreur lors de l'envoi des données au backend :", error);
        setError("Une erreur s'est produite lors de la communication avec le serveur");
      }
    };
  

  return (
    <div className="text-center d-flex justify-content-center align-items-center">
      {error && <p>{error}</p>}
      {userData ? (
        <div >
          <h2>Bienvenue, {userData.name}</h2>
          <img src={userData.picture} alt={userData.name} />
          <p>Email : {userData.email}</p>
        </div>
      ) : (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log('Login échoué');
          }}
        />
      )}
    </div>
  );
}





export default SignupGoogle ;