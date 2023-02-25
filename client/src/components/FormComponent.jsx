import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const { VITE_API_URL } = import.meta.env

const schema = yup
	.object({
		name: yup.string().required().min(2, 'This fields must be at least 2 characters')
	})
	.required()

export default function FormComponent() {
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const onSubmit = async (values) => {
		try {
			const { data } = await axios.post(`${VITE_API_URL}/players/add`, values)
			toast(data.message, {
				icon: '👏',
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff'
				}
			})
			setTimeout(() => {
				navigate('/players/list')
			}, 2000)
        } catch (err) {
            alert(err.response.data)
        }
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col md:flex-row md:gap-4'>
				<div className='my-4 flex-1'>
					<label htmlFor='name'>Player Name</label>
					<input
						{...register('name')}
						placeholder='Enter player name'
						className='block py-2 w-full px-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500'
					/>
					<p>{errors.name?.message}</p>
				</div>
				<div className='my-4 flex-1'>
					<label htmlFor='preferred_position'>Preferred Position</label>
					<input
						{...register('preferred_position')}
						placeholder='Enter preferred position'
						className='block w-full py-2 px-4 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-blue-500'
					/>
				</div>
			</div>
			<button className='p-2 px-12 rounded-lg hover:bg-blue-800 bg-blue-600 text-white font-semibold'>
				ADD
			</button>
		</form>
	)
}
