// BillingSettingsPage.tsx
import React from 'react';

const BillingSettingsPage = () => {
  return (
    <div className="space-y-8">
      {/* Section: Header */}
      <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <div>
          <h3 className="font-bold ">Billing</h3>
          <p className="text-xs mt-1 font-semibold text-gray-400">
            Manage your plan, invoices, and payment methods
          </p>
        </div>
        <button className="btn-primary-100">Upgrade</button>
      </div>

      {/* Section: Current Plan */}
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-sm mb-2">Current Plan</h4>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Starter Plan</p>
            <p className="text-xs text-gray-500">Renews on Jul 22, 2025</p>
          </div>
          <button className="text-sm text-primary font-semibold underline">Change plan</button>
        </div>
      </div>

      {/* Section: Payment Method */}
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-sm mb-2">Payment Method</h4>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Visa ending in 4242</p>
            <p className="text-xs text-gray-500">Expires 08/26</p>
          </div>
          <button className="text-sm text-primary font-semibold underline">Update card</button>
        </div>
      </div>

      {/* Section: Invoices */}
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <h4 className="font-semibold text-sm mb-4">Invoices</h4>
        <table className="w-full text-sm">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">May 22, 2025</td>
              <td>$9.99</td>
              <td>Paid</td>
              <td>
                <a href="#" className="text-primary underline">Download</a>
              </td>
            </tr>
            <tr>
              <td className="py-2">Apr 22, 2025</td>
              <td>$9.99</td>
              <td>Paid</td>
              <td>
                <a href="#" className="text-primary underline">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingSettingsPage;
