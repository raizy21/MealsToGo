import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe("pk_test_51KJuIYFTlRH9Jq62I694r8Lt1FOHcE5qOYoyr0EbZta1mAZqYz6hrFl0nIbSUMThkBXj9dwwAJcIabOwLb8PtN4H00ZVjMzsxr");

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};