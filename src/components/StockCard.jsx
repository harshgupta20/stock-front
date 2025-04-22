import React from 'react'

const StockCard = ({ id, name, price, amountToSell = null, showBuyOption = true, showSellOption = true, showOwnedOption = false, onBuy, onSell }) => {

  const handleBuy = ({ id, name, price }) => {
    const InAccount = JSON.parse(localStorage.getItem('portfolio'));

    const amountToSell = prompt('Enter the amount you want to sell at?');

    if(amountToSell <= price) {
      alert('Sell amount should be greater than amount of stock.');
      return;
    }

    if (InAccount) {
      localStorage.setItem('portfolio', JSON.stringify([...InAccount, { id, name, price, amountToSell }]))
    }
    else {
      localStorage.setItem('portfolio', JSON.stringify([{ id, name, price, amountToSell }]))
    }
    onBuy();
    alert('You have successfully bought this stock')
  }

  const handleSell = ({ id, name, price }) => {
    const InAccount = JSON.parse(localStorage.getItem('portfolio'));
    const isExist = InAccount.find(item => item.id === id);

    if (isExist) {
      localStorage.setItem('portfolio', JSON.stringify(InAccount.filter(item => item.id !== id)));
      alert('You have successfully sold this stock')
      onSell();
    }
    else {
      alert('You don\'t have this stock in your portfolio')
    }
  }

  return (
    <div className='flex flex-col justify-between p-2 border-2 border-gray-500 sm:w-1/5 w-[90%] rounded'>
      <div className='w-full flex justify-between'>
        <h2 className='text-2xl'>{name}</h2>
        <p className='text-xs text-gray-500'>#{id}</p>
      </div>
      <p className='italic font-bold text-left'>${price}</p>
      {
        amountToSell && <p className='italic font-bold text-left'>Sell at Price : ${amountToSell}</p>
      }

      <div className='w-full flex flex-col gap-1 pt-4'>
        {
          showBuyOption && <button onClick={() => handleBuy({ id, name, price })} className='bg-green-500 rounded cursor-pointer'>Buy</button>
        }
        {
          showOwnedOption && <button className='bg-green-900 text-white rounded cursor-not-allowed'>Owned</button>
        }
        {
          showSellOption && <button onClick={() => handleSell({ id, name, price })} className='bg-red-500 rounded cursor-pointer'>Sell</button>
        }

      </div>
    </div>
  )
}

export default StockCard