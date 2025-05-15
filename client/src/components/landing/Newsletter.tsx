import { Checkbox } from "../ui/checkbox"


const Newsletter = () => {
  return (
    <section className='bg-secondary px-4 lg:px-10 py-16 space-y-16  '>
        <div className='text-center md:flex-center md:justify-between md:gap-8 '>
            <div className=' mb-10 md:m-0'>
                <h2 className='text-3xl font-bold mb-6'>Subscribe to our newsletter</h2>
                <p className=' text-gray-600'>A monthly digest of the latest 404magic news, articles and resources</p>
            </div>
            <div className='space-y-4  w-full md:w-[400px] '>
                <div className='flex items-center space-x-2 text-sm '>
                    <input type='email' placeholder='Your email address' style={{fontSize: "12px"}} className='bg-gray-200 p-2 rounded-md w-full lg:w-[300px] focus:outline-1 focus:outline-gray-500 ' />
                    <button  className='btn-primary-100'>Subscribe</button>
                </div>
                <div className="flex items-center text-gray-600 text-[12px] space-x-2">
                    <Checkbox id="newsletter" defaultChecked style={{backgroundColor: "#4EAD8D"}} className='text-white' />
                    <label htmlFor="newletter" className='text-[11px] sm:text-[13px] '>I agree to receive marketing emails from 404magic</label>
                </div>
            </div>
        </div>
        <hr className='border border-solid' />
    </section>
  )
}

export default Newsletter