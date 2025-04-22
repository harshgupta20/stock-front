import React, { useEffect, useState } from 'react'
import StockCard from '../components/StockCard'

const Portfolio = () => {

    const [stockList, setStockList] = useState([]);
    const [reFetch, setReFetch] = useState(false);

    useEffect(() => {
        const InAccount = JSON.parse(localStorage.getItem('portfolio'));
        setStockList(InAccount || []);
    }, [reFetch])

  return (
    <>
        <div className='p-5'>
            <h1 className='text-2xl font-bold py-4 underline'>My Portfolio</h1>

            <div className="flex flex-wrap sm:justify-start justify-center gap-5 text-center">
                {stockList.map((stock) => {
                        return <StockCard key={stock.id} id={stock.id} name={stock.name} price={stock.price} showBuyOption={false} amountToSell={stock.amountToSell} onBuy={setReFetch} onSell={setReFetch} />
                    })
                }</div>
        </div>
    </>
  )
}

export default Portfolio