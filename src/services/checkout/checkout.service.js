import createStripe from "stripe-client";

const stripe = createStripe("pk_test_51KJuIYFTlRH9Jq62I694r8Lt1FOHcE5qOYoyr0EbZta1mAZqYz6hrFl0nIbSUMThkBXj9dwwAJcIabOwLb8PtN4H00ZVjMzsxr");

export const cardTokenRequest = (card) => stripe.createToken({ card });