import React, { useState } from 'react'
import StepMaster from '../../components/ui/StepMaster';

type Props = {}

const Create404page = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prev = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="">
      <StepMaster currentStep={currentStep} />
      
      <div className="flex text-xs px-8 items-center justify-between">
        <button className=' btn-primary-300 flex-center border border-gray-300'>
          Cancel
        </button>
        <div className='flex-center gap-4'>
            <button onClick={prev} className="btn-primary-300 flex-center gap-1  ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
              Previous
            </button>
            <button onClick={next} className="btn-primary-100 gap-1 flex-center ">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Create404page