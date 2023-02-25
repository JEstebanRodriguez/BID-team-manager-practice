import { NavLink } from "react-router-dom";

export default function PlayersSubMenu() {
    return (
			<ul className='mb-4 shadow-sm w-96 flex items-center justify-center gap-8 p-4 rounded-full border border-gray-200 bg-white'>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'py-2 px-4 bg-gray-200 rounded-full'
								: 'py-2 px-4 bg-white rounded-full'
						}
						to='/players/list'>
						List
					</NavLink>
				</li>{' '}
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive
								? 'py-2 px-4 bg-gray-200 rounded-full'
								: 'py-2 px-4 bg-white rounded-full'
						}
						to='/players/addplayer'>
						Add Player
					</NavLink>
				</li>
			</ul>
		)
}