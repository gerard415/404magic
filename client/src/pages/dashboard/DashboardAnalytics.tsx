import React, { useState } from 'react'
import Select from '../../components/ui/Select';
import { ArrowDownRightIcon, ArrowUpAndDown, ArrowUpRightIcon, CrookedUpAngleArrow, UsersIcon } from '../../components/ui/Icons';
import PageViewsChart from '../../components/dashboard/PageViewsChart';

const DashboardAnalytics = () => {
  const [selected404Page, setSelected404Page] = useState<string>('');
  const [selectedTimeDisplay, setSelectedTimeDisplay] = useState<string>('');

  const PageOptions = [
  { label: '404 Page', value: '' },
  { label: 'Name', value: 'name' },
  { label: 'Date', value: 'createdAt' },
  { label: 'Views', value: 'views' },
];

const TimeDisplayOptions = [
  { label: 'Last 30 days', value: '30' },
  { label: 'Name', value: 'name' },
  { label: 'Date', value: 'createdAt' },
  { label: 'Views', value: 'views' },
];

  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <div className='flex-center gap-4 '>
          <Select
            options={PageOptions}
            value={selected404Page}
            onChange={(e) => setSelected404Page(e.target.value)}
          />
          <Select
            options={TimeDisplayOptions}
            value={selectedTimeDisplay}
            onChange={(e) => setSelectedTimeDisplay(e.target.value)}
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-5 mb-6 '>
        <div className='border flex flex-col justify-center w-full h-30 rounded-md border-gray-300 py-3 px-4' >
          <div className='flex justify-between items-center'>
            <p className='text-[11px] font-semibold '>Avg. Session Duration</p>
            <span className='text-green-400/50 rounded-full flex-center size-6 bg-green-600/10 '>
              <CrookedUpAngleArrow/>
            </span>
          </div>
          <p className='text-xl font-semibold'>
            4m 12s
          </p>
          <div className='flex justify-between text-center'>
            <p className='text-gray-400 font-semibold text-[10px]'>Up from last week</p>
            <span className='text-green-700 font-semibold flex-center gap-1'>
              <ArrowUpRightIcon/>
              <p className='text-xs'>18.0%</p>
            </span>
          </div>
        </div>
        <div className='border w-full h-30 rounded-md border-gray-300 py-3 px-4' >
          <div className='flex justify-between items-center'>
            <p className='text-[11px] font-semibold '>Bounce Rate</p>
            <span className='text-red-400/50 rounded-full flex-center size-6 bg-red-600/10 '>
              <ArrowUpAndDown/>
            </span>
          </div>
          <p className='text-xl font-semibold'>
            32.8%
          </p>
          <div className='flex justify-between text-center'>
            <p className='text-gray-400 font-semibold text-[10px]'>Down from last week</p>
            <span className='text-red-500 font-semibold flex-center gap-1'>
              <ArrowDownRightIcon/>
              <p className='text-xs'>12.0%</p>
            </span>
          </div>
        </div>
        <div className='border w-full h-30 rounded-md border-gray-300 py-3 px-4' >
          <div className='flex justify-between items-center'>
            <p className='text-[11px] font-semibold '>Engangement Rate</p>
            <span className='text-blue-400/50 rounded-full flex-center size-6 bg-blue-600/10 '>
              <UsersIcon/>
            </span>
          </div>
          <p className='text-xl font-semibold'>
            58.2%
          </p>
          <div className='flex justify-between text-center'>
            <p className='text-gray-400 font-semibold text-[10px]'>Up from last week</p>
            <span className='text-green-700 font-semibold flex-center gap-1'>
              <ArrowUpRightIcon/>
              <p className='text-xs'>18.0%</p>
            </span>
          </div>
        </div>
      </div>

      <div>
        <PageViewsChart />
      </div>
    </div>
  )
}

export default DashboardAnalytics