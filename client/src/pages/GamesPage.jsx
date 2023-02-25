import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { playerApater } from '../adapters/players.adapter'
import ChangeStatus from '../components/ChangeStatus'


const games = [
    {
        id: 1,
        name: 'Game 1'
    },
    {
        id: 2,
        name: 'Game 2'
    },
    {
        id: 3,
        name: 'Game 3'
    }
]

export default function GamesPage() {
	const [playing, setPlaying] = useState(false)
    const [notPlaying, setNotPlaying] = useState(false)
	const [players, setPlayers] = useState([])

	const { id } = useParams()

	const loadPlayers = async () => {
		const { data } = await axios.get('http://localhost:5000/api/players')
		const playersArr = await playerApater(data.players)
		setPlayers(playersArr)
	}


	useEffect(() => {
		loadPlayers()
    }, [players])

	return (
		<Layout>
			<h1 className='text-3xl font-semibold my-4'>Player Status - Game {id}</h1>
			<ul className='mb-4 shadow-sm w-96 flex items-center justify-center gap-8 p-4 rounded-full border border-gray-200 bg-white'>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'py-2 px-4 bg-gray-200 rounded-full'
								: 'py-2 px-4 bg-white rounded-full'
						}
						to='/status/game/1'>
						Game 1
					</NavLink>
				</li>{' '}
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'py-2 px-4 bg-gray-200 rounded-full'
								: 'py-2 px-4 bg-white rounded-full'
						}
						to='/status/game/2'>
						Game 2
					</NavLink>
				</li>{' '}
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'py-2 px-4 bg-gray-200 rounded-full'
								: 'py-2 px-4 bg-white rounded-full'
						}
						to='/status/game/3'>
						Game 3
					</NavLink>
				</li>
			</ul>
			<div className='p-4 bg-white rounded-lg shadow-sm'>
				<table className='table-auto w-full text-left whitespace-no-wrap'>
					<thead>
						<tr>
							<th className='lg:w-[600px] px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
								Team Name
							</th>
							<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{players.map((player) => (
							<tr className='border border-b-gray-200' key={player.id}>
								<td className='px-4 py-3'>{player.name}</td>
								<td className='px-4 py-3'>
									<ChangeStatus playerId={player.id} gameId={id} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	)
}
