import React from 'react'
import { GoogleIcon } from '../../../components/ui/Icons';

type Props = {}

const AccountSettingsPage = (props: Props) => {
  const [twoFactor, setTwoFactor] = React.useState(false);
  const handletwoFactorToggle = (value: boolean) => {
    setTwoFactor(value);
  };

  return (
    <div>
      <div className='flex justify-between items-center border-b border-gray-300 pb-4 mb-4'>
        <div>
          <h3 className='font-bold'>Account</h3>
          <p className='text-xs mt-1 font-semibold text-gray-400'>Manage your account settings</p>
        </div>
        <button className='btn-primary-100'>
          Reset
        </button>
      </div>
      {/* Email */}
      <div className='flex items-center border-b border-gray-300 pb-4 mb-4'>
        <div className='space-x-26 flex w-full'>
          <div>
            <h3 className='font-semibold text-sm'>Email</h3>
            <p className='text-xs mt-1 font-semibold text-gray-400 w-full'>Your account's email address</p>
          </div>
          <input type="email" className='text-xs text-gray-400 font-semibold w-40 ' value={'chinedumike85@gmail.com'} disabled/>
        </div>
      </div>
      {/* Change Password */}
      <div className='flex items-center border-b border-gray-300 pb-4 mb-4 justify-between'>
        <div className='space-x-12 flex'>
          <div>
            <h3 className='font-semibold text-sm'>Password</h3>
            <p className='text-xs mt-1 font-semibold text-gray-400'>Set a password to protect your account</p>
          </div>
          <input type="password" value={'dkdkddkdkd'} />
        </div>
        <button className='btn-primary-300'>
          Edit
        </button>
      </div>
      {/* Two-step verification */}
      <div className='flex items-center border-b border-gray-300 pb-4 mb-4'>
        <div className='space-x-14 flex items-center'>
          <div>
            <h3 className='font-semibold text-sm'>Two-step verification</h3>
            <p className='text-xs mt-1 font-semibold text-gray-400'>We recommend requiring a verification <br /> code in addition to your password</p>
          </div>
          <label className="inline-flex items-center cursor-pointer text-xs">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={(e) => handletwoFactorToggle(e.target.checked)}
              className="sr-only peer"
            />
            <div className="relative w-10 h-5 mr-2 bg-gray-200 rounded-full peer
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                peer-checked:after:border-white peer-checked:after:start-[6px]
                after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4
                after:transition-all dark:border-gray-600
                peer-checked:bg-primary dark:peer-checked:bg-primary">
            </div>
            Two-step verification
          </label>
        </div>
      </div>
      {/* Connected accounts */}
      <div className='flex items-center border-b border-gray-300 pb-4 mb-4 justify-between'>
        <div className='space-x-34 flex'>
          <div>
            <h3 className='font-semibold text-sm'>Connected Accounts</h3>
            <p className='text-xs mt-1 font-semibold text-gray-400'>Your connected accounts</p>
          </div>
          <div>
            <div className='flex items-center'>
              <div className='flex items-center space-x-2'>
                <GoogleIcon className={'w-5 h-5'}/>
                <p className='text-xs font-semibold text-gray-400'>Google</p>
              </div>
              <p>•</p>
              <p className='text-xs font-semibold text-gray-400'>chinedumike85@gmail.com</p>
            </div>
            <p className='flex items-center text-xs font-semibold text-gray-400'> <span className='text-lg mr-2'>+</span> add account</p>
          </div>
        </div>
        <button className='btn-primary-300'>
          Edit
        </button>
      </div>
      {/* Delete account */}
      <div className='flex items-center border-b border-gray-300 pb-4 mb-4 justify-between'>
        <div className='space-x-30 flex'>
          <div>
            <h3 className='font-semibold text-sm'>Delete Account</h3>
            <p className='text-xs mt-1 font-semibold text-gray-400'>Delete your account forever</p>
          </div>
          <button className='px-5 rounded-md text-xs py-1 cursor-pointer bg-red-500 text-white'>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage