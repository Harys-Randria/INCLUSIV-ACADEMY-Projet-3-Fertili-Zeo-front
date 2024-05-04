import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 200,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}} className="App">
      <Stripe style={{padding: "10px"}}
        stripeKey="pk_test_51PCQ0ERr9SFVCAJbZvTN8tMfT4zrTFv89b3ZF88dkrqhUWCEsnTQdXKX89tJb8DpoA6hjC6aZ2F33o3AqAuglzN500eZgKngaO"
        token={handleToken}
      />
    </div>
  );
}

export default Payment;