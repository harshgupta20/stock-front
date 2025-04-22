import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Welcome to Super Stocks</h1>
                <p>You can buy and sell stocks here</p>
                <Link to={'/stocks'}><button className='mt-4 bg-indigo-500 p-2 rounded-md text-white cursor-pointer'>Explore Stocks</button></Link>
            </div>
        </div>
    )
}

export default Home