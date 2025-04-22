import React, { useEffect, useState } from 'react'
import StockCard from '../components/StockCard'

const Stocks = () => {

    const [searchText, setSearchText] = useState('');
    const [stockList, setStockList] = useState([]);

    const STOCK_LIST = [
        { id: 1, name: 'Tesla', price: 1000 },
        { id: 2, name: 'Apple', price: 2000 },
        { id: 3, name: 'Google', price: 3000 },
        { id: 4, name: 'Microsoft', price: 4000 },
        { id: 5, name: 'Amazon', price: 5000 },
        { id: 6, name: 'Meta', price: 6000 },
        { id: 7, name: 'Netflix', price: 7000 },
        { id: 8, name: 'Twitter', price: 8000 },
        { id: 9, name: 'SpaceX', price: 9000 },
    ]

    const checkPortfolioStocksStatus = (stock) => {
        const InAccount = JSON.parse(localStorage.getItem('portfolio'));
        InAccount.forEach((stock) => {
            stockList.forEach((item) => {
                if (stock.id === item.id && Number(stock?.amountToSell) <= item.price) {
                    alert(`Your ${item.name} stock price has reached ${item.price}`);
                    localStorage.setItem('portfolio', JSON.stringify(InAccount.filter((item) => item.id !== stock.id)));
                }
            })
        })
    }
    const CheckIfStockExistInPortfolio = (stock) => {
        const InAccount = JSON.parse(localStorage.getItem('portfolio'));
        return InAccount.find((item) => item.id === stock.id);
    }

    useEffect(() => {
        const stocks = JSON.parse(localStorage.getItem('stocks'));
        setStockList(stocks || STOCK_LIST);
    }, []);

    // TIMER to increase the price of all stocks every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedStockList = stockList.map((stock) => {
                if (Math.floor(Math.random() * 100) < 50) {
                    return {
                        ...stock,
                        price: stock.price + Math.floor(Math.random() * 100),
                    }
                }
                else {
                    return {
                        ...stock,
                        price: stock.price + Math.floor(Math.random() * 100),
                    }
                }
            });

            localStorage.setItem('stocks', JSON.stringify(updatedStockList));
            setStockList(updatedStockList);
            checkPortfolioStocksStatus(updatedStockList);
        }, 5000);

        return () => clearInterval(interval);
    }, [stockList]);



    return (
        <>
            <div className='p-5'>
                <h1 className='text-2xl font-bold py-4 underline'>All Stocks</h1>

                <input className='w-full my-6 outline-none p-2 border-[1px] border-gray-500 rounded' type='text' placeholder='Search Stocks...' onChange={(e) => setSearchText(e.target.value)} />

                <div className="flex flex-wrap sm:justify-between justify-center gap-5 text-center">
                    {stockList.filter((stock) => stock.name.toLowerCase().includes(searchText.toLowerCase())).map((stock) => {
                        return <StockCard key={stock.id} id={stock.id} name={stock.name} price={stock.price} showBuyOption={!CheckIfStockExistInPortfolio(stock)} showOwnedOption={CheckIfStockExistInPortfolio(stock)}/>
                    })
                    }</div>

            </div>
        </>
    )
}

export default Stocks