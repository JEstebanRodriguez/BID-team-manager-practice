import FormComponent from '../components/FormComponent'
import Layout from '../components/Layout'
import PlayersSubMenu from '../components/PlayersSubMenu'

export default function PlayerAddPage() {
	return (
		<Layout>
			<PlayersSubMenu />
			<div className='shadow-sm rounded-lg bg-white p-4'>
                <h2 className='font-semibold text-4xl'>Add Player</h2>
                <FormComponent />
			</div>
		</Layout>
	)
}
