import React, { useEffect, useState } from "react";

const RazorpayIntegration = () => {
  const [loading, setLoading] = useState(false);
 const [premiumUser,setPremiumUser]=useState(false)
 useEffect(()=>{
const premiumUserConfirmed=JSON.parse(localStorage.getItem("premium-user"))
setPremiumUser(premiumUserConfirmed)
 },[])
  const purchaseMembership = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:30001/api/payment/purchase-membership",
        {
          method: "POST",
          body: JSON.stringify({ amount: "50000" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message}`);
      }

      const { order, key_id } = await response.json();

      const options = {
        key: key_id,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "radheshyam shop",
        description: "Membership Purchase",
        handler: function (response) {
          fetch("http://localhost:30001/api/payment/transaction-update", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: order.id,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
         
                           
              if (data.status) {
                alert("Transaction Successfull You are premium user now");
                setPremiumUser(true)
                const {paymentid} =data.updateOrder

                localStorage.setItem("premium-user",JSON.stringify(paymentid))
              } else {
                alert("Transaction Failed");
              }
            })
            .catch((error) => {
              console.error("Error updating transaction:", error);
              alert("Transaction Failed");
            });
        },
        // Failure handler
        // Failure handler
        modal: {
          ondismiss: function (response) {
            // Handle failure when the modal is dismissed

            fetch(
              "http://localhost:30001/api/payment/fail-transaction-update",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  order_id: order.id,
                }),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                alert("Transaction Failed");
              })
              .catch((error) => {
                console.error("Error updating transaction:", error);
                alert("Transaction Failed");
              });
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error purchasing membership:", error);
      alert("Error purchasing membership");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={purchaseMembership} disabled={loading}>
    {loading ? "Processing..." : (
  premiumUser ? " You are  Premium Member" : "Premium Membership"
)}

    </div>
  );
};

export default RazorpayIntegration;
