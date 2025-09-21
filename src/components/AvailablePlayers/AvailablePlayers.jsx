import React, { use } from 'react'
import Container from '../Container/Container'
import AvailablePlayerCard from '../AvailablePlayerCard/AvailablePlayerCard'

const AvailablePlayers = ({players,blance,setBlance,handelSelect,selected}) => {
    const playersData = use(players)
  return (
    <>
        <div className="">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        playersData.map(player=>(
                            <AvailablePlayerCard
                            key={player.id}
                            player={player}
                            handelSelect={handelSelect}
                            blance={blance}
                            setBlance={setBlance}
                            selected={selected}
                            />
                        ))
                    }
                </div>
            </Container>
        </div>
    </>
  )
}

export default AvailablePlayers