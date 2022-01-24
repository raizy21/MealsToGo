import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe("pk_test_51KJuIYFTlRH9Jq62I694r8Lt1FOHcE5qOYoyr0EbZta1mAZqYz6hrFl0nIbSUMThkBXj9dwwAJcIabOwLb8PtN4H00ZVjMzsxr");

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: "244",
      name: "Andrei",
    };
    const info = await stripe.createToken({ card });
    console.log(info);
  };
  return <LiteCreditCardInput onChange={onChange} />;
};