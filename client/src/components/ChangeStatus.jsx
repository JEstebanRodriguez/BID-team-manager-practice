import axios from 'axios'
import { useEffect, useState } from 'react'

const { VITE_API_URL } = import.meta.env

export default function ChangeStatus({ playerId, gameId }) {
	const [player, setPlayer] = useState('')

	const loadPlayer = async (id) => {
		const { data } = await axios.get(`${VITE_API_URL}/players/${id}`)
		setPlayer(data.player)
	}

	const handleDefinePlay = async (game) => {
		const playerUpdate = {
			...player,
			games: {
				...player.games,
				[`game${gameId}`]: game
			}
		}
        const {data} = await axios.put(`${VITE_API_URL}/players/edit/${playerId}`, playerUpdate)
		setPlayer(data.player)
	}

	useEffect(() => {
		loadPlayer(playerId)
	}, [playerId])
	return (
		<div className='flex gap-4'>
			<button
				className={
					player && player.games[`game${gameId}`] === 1
						? `px-4 py-2 bg-green-500 text-white border border-gray-400 rounded-md font-medium hover:bg-green-600`
						: `px-4 py-2 bg-white border border-gray-400 rounded-md font-medium hover:bg-gray-100`
				}
                onClick={ () => handleDefinePlay(1) }
            >
				Playing
			</button>
			<button
				className={
					player && player.games[`game${gameId}`] === 2
						? `px-4 py-2 bg-red-400 border text-white border-gray-400 rounded-md font-medium hover:bg-red-600`
						: `px-4 py-2 bg-white border border-gray-400 rounded-md font-medium hover:bg-gray-100`
				}
                onClick={ () => handleDefinePlay(2) }
            >
				No Playing
			</button>
			<button
				className={
					player && player.games[`game${gameId}`] === 0
						? `px-4 py-2 bg-amber-300 border border-gray-400 rounded-md font-medium hover:bg-amber-400`
						: `px-4 py-2 bg-white border border-gray-400 rounded-md font-medium hover:bg-gray-100`
				}
                onClick={ () => handleDefinePlay(0) }
            >
				Undecided
			</button>
		</div>
	)
}
