import axios from 'axios'
import Swal from 'sweetalert2'
import toast from "react-hot-toast"
import Layout from '../components/Layout'
import 'react-tabs/style/react-tabs.css'
import { useEffect, useState } from 'react'
import { playerApater } from '../adapters/players.adapter'
import PlayersSubMenu from '../components/PlayersSubMenu'

const { VITE_API_URL } = import.meta.env

export default function PlayerListPage() {
	const [players, setPlayers] = useState([])

	const loadPlayers = async () => {
		const { data } = await axios.get(`${VITE_API_URL}/players`)
		const playersArr = await playerApater(data.players)
		setPlayers(playersArr)
	}

	const handleDelete = (id, name) => {
		Swal.fire({
			title: `Are you sure you want to remove ${name}?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then(async(result) => {
			if (result.isConfirmed) {
				const { data } = await axios.delete(
					`${VITE_API_URL}/players/delete/${id}`
				)
				toast(data.message, {
					icon: '👏',
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff'
					}
				})
			}
		})
	}

	useEffect(() => {
		loadPlayers()
	}, [players])

	return (
		<Layout>
			<PlayersSubMenu />
			<div className='p-4 bg-white shadow-sm rounded-lg'>
				<table className='table-auto w-full text-left whitespace-no-wrap'>
					<thead>
						<tr>
							<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
								Name
							</th>
							<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
								Preferred Position
							</th>
							<th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{players?.map((player) => (
							<tr key={player.id} className='border border-b-gray-200'>
								<td className='px-4 py-3'>{player.name}</td>
								<td className='px-4 py-3'>{player.pref}</td>
								<td className='w-10 text-center'>
									<button onClick={ () => handleDelete(player.id, player.name) } className='px-4 mr-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Layout>
	)
}
