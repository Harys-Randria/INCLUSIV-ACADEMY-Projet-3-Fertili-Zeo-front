import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


function Payer({ prix }) {

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,

          amount: prix,

        },
      })
      .then(() => {
        toast.success(" Payement effectué", {
          position: "top-center",
        });
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
      <ToastContainer />
    </div>
  );
}

export default Payer;
