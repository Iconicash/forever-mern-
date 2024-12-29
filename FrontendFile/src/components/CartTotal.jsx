import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const CartTotal = () => {
    const {currency,delivery_fees ,getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
    </div>
      
      <div className='flex flex-col mt-2 gap-3'>
          <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{currency} {getCartAmount()}.00</p>
          </div>
          <div className='flex justify-between'>
              <p>Shipping Fee</p>
              <p>{currency} {delivery_fees}.00</p>
          </div>
          <div className='flex justify-between'>
              <b>Total</b>
              <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}</b>
          </div>
      </div>
    </div>
  )
}

export default CartTotal
