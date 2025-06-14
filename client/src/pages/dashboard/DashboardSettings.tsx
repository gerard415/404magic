// SettingsPage.tsx
import React, { useState } from 'react';
import AccountSettingsPage from './Settings/AccountSettingsPage';
import AppearanceSettingsPage from './Settings/AppearanceSettingsPage';
import NotificationsSettingsPage from './Settings/NotificationsSettingsPage';
import BillingSettingsPage from './Settings/BillingSettingsPage';

const tabs = ['Account', 'Billing'];

const DashboardSettings = () => {
  const [activeTab, setActiveTab] = useState('Account');

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-xs mt-1 text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mt-6 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-2 px-1 cursor-pointer border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <section className=" ">
        {activeTab === 'Account' && (
          <div>
            <AccountSettingsPage/>
          </div>
        )}
        {/* {activeTab === 'Appearance' && (
          <div>
            <AppearanceSettingsPage/>
          </div>
        )}
        {activeTab === 'Notifications' && (
          <div>
            <NotificationsSettingsPage/>
          </div>
        )} */}
        {activeTab === 'Billing' && (
          <div>
            <BillingSettingsPage/>
          </div>
        )}
      </section>
    </div>
  );
};

export default DashboardSettings;
