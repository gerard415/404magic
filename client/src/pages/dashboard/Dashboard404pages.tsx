import React, { useState } from 'react';
import { ElipsisIcon, LinkIcon, PencilIcon, SearchIcon } from '../../components/ui/Icons';
import { Link } from 'react-router';
import CustomSelect from '../../components/ui/CustomSelect';

const pages = [
  {
    name: 'Funny Ghost',
    status: 'Active',
    domain: 'example.com',
    createdAt: 'Apr 10, 2024',
    views: 1542,
  },
  {
    name: 'Minimal',
    status: 'Active',
    domain: 'd.com',
    createdAt: 'Mar 22, 2024',
    views: 897,
  },
  {
    name: 'Glitchy',
    status: 'Pending',
    domain: 'glitch.me',
    createdAt: 'Mar 8, 2024',
    views: 430,
  },
  {
    name: 'Halloween',
    status: 'Active',
    domain: '—',
    createdAt: 'Oct 31, 2023',
    views: 3210,
  },
];

const options = [
  { label: '  List View', value: '' },
  { label: 'Name', value: 'name' },
  { label: 'Date', value: 'createdAt' },
  { label: 'Views', value: 'views' },
];

const statusColor = (status: string) => {
  return status === 'Active' ? 'bg-green-500/15' : 'bg-yellow-500/15';
};

const Dashboard404pages = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">404 Pages</h1>
        <div className='flex-center gap-4 '>
          <div className="relative w-50 ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                <SearchIcon/>
            </div>
            <input type="search" id="default-search" className="block cursor-pointer hover:bg-gray-100 outline-none w-full p-2 ps-10 text-xs  border border-gray-300 rounded-md bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
        <CustomSelect
          options={options}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        />
        <Link to={'/dashboard/404pages/create'} className="btn-primary-100">
          New Page
        </Link>
        </div>
        
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-sm">
        <table className="min-w-full shadow-sm ">
          <thead>
            <tr className="text-left text-sm border-b border-b-gray-300 ">
              <th className="px-4 py-1 ">Name</th>
              <th className="px-4 py-1 ">Status</th>
              <th className="px-4 py-1 ">Domain</th>
              <th className="px-4 py-1 ">Created At</th>
              <th className="px-4 py-1 ">Views</th>
              <th className="px-4 py-1 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, idx) => (
              <tr key={idx} className= " text-xs  border-b border-b-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">{page.name}</td>
                <td className= {`px-4 py-3 flex items-center gap-2 `}>
                  <span className={`${statusColor(page.status)} px-2 py-1 text-[11px] font-semibold text-gray-700 rounded-sm `}>
                    {page.status}
                  </span>
                </td>
                <td className="px-4 py-3">{page.domain}</td>
                <td className="px-4 py-3">{page.createdAt}</td>
                <td className="px-4 py-3">{page.views.toLocaleString()}</td>
                <td className="px-4 py-3 space-x-3 text-gray-600">
                  <button className="cursor-pointer">
                    <PencilIcon/>
                  </button>
                  <button className="cursor-pointer">
                    <LinkIcon/>
                  </button>
                  <button className="cursor-pointer">
                    <ElipsisIcon/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard404pages;

