import React, { useState } from 'react';
import IntegrationsCard from '../../components/dashboard/IntegrationsCard';
import { StripeIcon, GithubIcon, GoogleIcon, SlackIcon, ZapierIcon } from '../../components/ui/Icons';

const recommendedIntegrations = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Connect your Stripe account',
    Icon: StripeIcon,
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Sync your 404s with repo deployments',
    Icon: GithubIcon,
  },
  {
    id: 'googleAnalytics',
    name: 'Google Analytics',
    description: 'Analyze 404 traffic in real-time',
    Icon: GoogleIcon,
  },
];

const allIntegrations = [
  ...recommendedIntegrations,
  {
    id: 'slack',
    name: 'Slack',
    description: 'Get 404 error alerts in Slack',
    Icon: SlackIcon,
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Automate actions on 404 triggers',
    Icon: ZapierIcon,
  },
];

const DashboardIntegrations = () => {
  const [integrationStates, setIntegrationStates] = useState<Record<string, boolean>>({
    stripe: false,
    github: false,
    googleAnalytics: false,
    slack: false,
    zapier: false,
  });

  const handleToggle = (id: string, value: boolean) => {
    setIntegrationStates((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-6">
      <div>
        <h1 className="text-2xl font-semibold">Integrations and connected apps</h1>
        <p className="text-xs mt-1 text-gray-600">
          Supercharge your workflow and connect the tools you use every day.
        </p>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Recommended Integrations</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedIntegrations.map((integration) => (
            <IntegrationsCard
              key={integration.id}
              name={integration.name}
              description={integration.description}
              Icon={integration.Icon}
              enabled={integrationStates[integration.id]}
              onToggle={(val) => handleToggle(integration.id, val)}
              onSettingsClick={() => console.log(`Open ${integration.name} settings`)}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">All Integrations</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allIntegrations.map((integration) => (
            <IntegrationsCard
              key={integration.id}
              name={integration.name}
              description={integration.description}
              Icon={integration.Icon}
              enabled={integrationStates[integration.id]}
              onToggle={(val) => handleToggle(integration.id, val)}
              onSettingsClick={() => console.log(`Open ${integration.name} settings`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardIntegrations;
