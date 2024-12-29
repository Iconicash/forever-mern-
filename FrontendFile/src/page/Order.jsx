import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Order = () => {
  const { products, currency, price } = useContext(ShopContext);
  return (
    <div className='border-t pt-8'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className='grid grid-cols'>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='border-t border-b py-2 mt-3 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <img className='w-16 sm:20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-normal'>{item.name}</p>
                  <div className='flex items-center mt-2 gap-3 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Size : M</p>
                    <p>Quantity : 1</p>
                  </div>
                  <p className='mt-2'> Date : <span className='text-gray-500'>28 Dec 2024</span></p>
                </div>
               </div>
              <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 bg-green-500 rounded-full'></p>
                    <p className='text-sm md:text-base'>Ready To Ship</p>
                  </div>
                  <button className='border p-2'>Track Order</button>
              </div>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Order
