import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  // numeral handles the conversion and formatting
  const formattedAmount = numeral(amount).format('$0,0.00');
  
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;