import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
			<header className='px-8 md:px-12 lg:px-24 py-4 flex items-center bg-white justify-between shadow'>
				<h1 className='text-lg font-semibold'>
					<Link to='/'>Team Manager</Link>
				</h1>
				<nav>
					<ul className='flex items-center gap-8'>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
								to='/players/list'>
								Manage Players
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
								to='/status/game/1'>
								Manage Player Status
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		)
}