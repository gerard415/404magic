import React from 'react';
import { SettingsIcon } from '../ui/Icons';

type IntegrationsCardProps = {
  name: string;
  description: string;
  Icon: React.FC<{ className?: string }>;
  enabled: boolean;
  onToggle: (value: boolean) => void;
  onSettingsClick?: () => void;
};

const IntegrationsCard: React.FC<IntegrationsCardProps> = ({
  name,
  description,
  Icon,
  enabled,
  onToggle,
  onSettingsClick,
}) => {
  return (
    <div className="w-70 h-30 border border-gray-300 rounded-md flex flex-col justify-between p-2">
      <div className="flex justify-between items-center">
        <Icon />
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => onToggle(e.target.checked)}
            className="sr-only peer"
          />
          <div className="relative w-10 h-5 bg-gray-200 rounded-full peer
              peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              peer-checked:after:border-white
              after:content-[''] after:absolute after:top-[2px] after:start-[2px]
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4
              after:transition-all dark:border-gray-600
              peer-checked:bg-primary dark:peer-checked:bg-primary">
          </div>
        </label>
      </div> 

      <div className="space-y-1">
        <p className="text-xs font-semibold">{name}</p>
        <p className="text-[10px] leading-none m-0 text-gray-600">{description}</p>
      </div>

      <div
        className="flex items-center space-x-1 font-semibold cursor-pointer"
        onClick={onSettingsClick}
      >
        <SettingsIcon />
        <p className="text-xs">Settings</p>
      </div>
    </div>
  );
};

export default IntegrationsCard;
