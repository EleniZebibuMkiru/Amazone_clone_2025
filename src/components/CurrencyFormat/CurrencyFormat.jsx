import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount, displayType = "text" }) => {
  // Format the amount using numeral
  const formattedAmount = numeral(amount).format("$0,0.00");

  if (displayType === "text") {
    // ✅ Safe for inline usage (inside <p>)
    return <span>{formattedAmount}</span>;
  }

  // Optional block display
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
