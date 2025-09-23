import { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify';

const AvailablePlayerCard = ({ player, blance, setBlance, handelSelect, selected }) => {
    const { role, rating, price, name, image, country, batting_style, id } = player;
    const isSelect = selected.find(item=>item.id===id);
    const selectHandler = () => {
        if (blance < price) {
            return toast.warn('Your balance is too low');
        }
        if (selected.length >= 6) {
            return toast.warn('You can select a maximum of 6 players only.');
        }
        setBlance(blance - price);
        handelSelect(player);
        toast.success(`${name} has been selected successfully!`);
    }
    return (
        <>
            <div className="p-6 rounded-xl border border-gray-300 space-y-3">
                <img className='w-full rounded-lg' src={image} alt={name} />
                <div className="flex gap-2 items-center font-semibold text-xl">
                    <FaUser className='text-gray-600' />
                    <h4> {name} </h4>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-2 text-gray-700'><FaFlag /> {country} </p>
                    <button className='bg-gray-100 rounded-md px-5 py-2'> {role} </button>
                </div>
                <hr className='text-gray-300' />
                <div className="flex justify-between items-center">
                    <h4 className='font-bold'>Rating</h4>
                    <p className='text-black/70'> {rating} </p>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className='font-bold'>Batting Style</h4>
                    <p className='text-black/70'> {batting_style} </p>
                </div>
                <div className="flex justify-between items-center">
                    <h4 className='font-bold'>Price: </h4>
                    <p className='text-black/70'> ${price} </p>
                </div>
                <button disabled={isSelect} onClick={selectHandler} className={`${isSelect && 'bg-green-600 text-gray-100 opacity-60'} bg-gray-100 rounded-md px-5 py-2 border border-gray-200 cursor-pointer duration-300 hover:bg-green-600 hover:text-gray-100 disabled:cursor-not-allowed w-full`}>{isSelect ? 'Selected' : 'Choose Player'}</button>
            </div>
        </>
    )
}

export default AvailablePlayerCard