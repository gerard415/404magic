import React from 'react';

interface StepMasterProps {
  currentStep: number;
}

const StepMaster: React.FC<StepMasterProps> = ({ currentStep }) => {
  const steps = ['Theme', 'Customize', 'Preview', 'Launch'];

  return (
    <div className='flex px-8 py-6 border-b border-b-gray-200 relative'>
      <p className='text-2xl font-semibold w-full'>
        Create a new 404 page
      </p>
      <ol className="flex w-full relative pr-2">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isLastStep = index === steps.length - 1;

          return (
            <li key={step} className={`flex-1  relative ${isLastStep ? 'flex-none' : ''}`}>
              {/* Step connector and circle */}
              <div className={`flex items-center w-full ${
                isCompleted || isActive 
                  ? 'text-primary' 
                  : 'text-gray-300'
              }`}>
                <div className={`flex items-center w-full relative ${!isLastStep ? 'w-full' : ''}`}>
                  <div className="flex flex-col items-center relative">
                    <span className={`flex items-center justify-center size-7 border-3 text-xs rounded-full shrink-0 ${
                      isCompleted || isActive
                        ? 'bg-primary/75 border-green-500/25 '
                        : 'bg-gray-100 border-gray-300'
                    }`}>
                      <span className={`font-bold ${
                        isCompleted || isActive
                          ? 'text-white'
                          : 'text-gray-500'
                      }`}>
                        0{index + 1}
                      </span>
                    </span>
                    
                    {/* Step label - absolutely positioned */}
                    <span className={`absolute top-full mt-1 text-xs font-medium whitespace-nowrap transform -translate-x-1/2 left-1/2 ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-500'
                    }`}>
                      {step}
                    </span>
                  </div>
                  
                  {!isLastStep && (
                    <div className={`w-full h-1 border-b border-4 ${
                      isCompleted 
                        ? 'border-primary/25' 
                        : 'border-gray-100'
                    }`}></div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepMaster;