import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [payment , setPayment] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xs sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" id="" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" id="" placeholder='Last Name' />
        </div>

        <div>
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" name="" id="" placeholder='Email address' />
          <input className=' border border-gray-300 rounded py-1.5 px-3.5 w-full mt-4' type="text" name="" id="" placeholder='Street' />
        </div>


        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" id="" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" id="" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" min={1} name="" id="" placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text" name="" id="" placeholder='Country' />
        </div>

        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" name="" id="" placeholder='Phone number' />
          
      </div>

      {/* ------------------Right Side----------------- */}
     
             <div className='mt-8' >
                  <div className='mt-8 min-w-80'>
                     <CartTotal/>
                  </div>
                  <div className='mt-12'>
                      <Title text1={'PAYMENT'} text2={'METHOD'}/>
                        {/* Payment method Selection */}
                      <div className='flex gap-3 flex-col lg:flex-row'>
                            <div onClick={()=>setPayment('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                              <p  className={`min-w-3.5 h-3.5 border rounded-full ${payment ==='stripe' ? 'bg-green-500' : ''}`}> </p>
                              <img className='mx-4 h-5' src={assets.stripe_logo} alt="" />
                             </div>

                             <div onClick={()=>setPayment('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                              <p className={`min-w-3.5 h-3.5 border rounded-full ${payment==='razorpay' ? 'bg-green-500' : ''}`}></p>
                              <img className='mx-4 h-5' src={assets.razorpay_logo} alt="" />
                             </div>

                             <div onClick={()=>setPayment('cod')} className='flex items-center gap-3 border  p-2 px-2 cursor-pointer'>
                              <p className={`min-w-3.5 h-3.5 border rounded-full ${payment === 'cod' ? 'bg-green-500' : ''}`}></p>
                              <p className='text-gray-500 text-sm font-normal mx-4'>Cash On Delivery</p>
                             </div>
                      </div>
                      <div className='w-full flex rounded justify-end mt-3'>
                        <button onClick={()=>navigate('/order')}  className='bg-black text-white px-16 py-3 text-sm   '>PLACE ORDER</button>
                      </div>
                  </div>
             </div>

    </div>
  )
}

export default PlaceOrder
