import { Divider } from '@mui/material'
import React from 'react';

const PricingCard = () => {
  
  return (
    <div>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>8000 €</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>
            30 %
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>2.98 €</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Plateform fee</span>
          <span className="text-teal-600">0.00 €</span>
        </div>
      </div>
      <Divider />

      <div className="font-medium px-5 py-2 flex justify-between items-center">
        <span>Total</span>
        <span>89 €</span>
      </div>
    </div>
  );
 };

export default PricingCard