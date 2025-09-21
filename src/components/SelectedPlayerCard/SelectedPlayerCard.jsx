import React from 'react'
import { MdDelete } from 'react-icons/md'

const SelectedPlayerCard = ({player,removeItem}) => {
    const {name,image,id,batting_style} = player;
    return (
        <>
            <div className="p-3 rounded-xl border border-gray-300">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img className='w-20 rounded-lg' src={image} alt={name} />
                        <div className="">
                            <h4 className='font-bold'> {name} </h4>
                            <p className='text-black/70 text-sm'> {batting_style} </p>
                        </div>
                    </div>
                    <button onClick={()=>removeItem(player)} className='text-2xl cursor-pointer text-red-500 duration-300 hover:scale-105'><MdDelete /></button>
                </div>
            </div>
        </>
    )
}

export default SelectedPlayerCard