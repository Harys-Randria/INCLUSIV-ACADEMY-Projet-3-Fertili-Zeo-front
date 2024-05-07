import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payer() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 15,
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
    <div className="App">
      <Stripe
        stripeKey="pk_test_51PDSi0HGXSt2b5Zns2Dq6U6NynFtOHdPoWyEHjyBR2Kgq5mFEgbbLhWqJGKh7QSJudfQ7fw0qDe8hi4NBl1hKdTl00IDUjW83z"
        token={handleToken}
      />
    </div>
  );
}

export default Payer;
