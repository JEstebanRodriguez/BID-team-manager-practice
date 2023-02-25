export default function Footer() {
    return (
			<div className='bg-gray-100 px-8 md:px-12 lg:px-24'>
				<div className='container mx-auto py-4 px-5 flex items-center flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-500 text-sm text-center sm:text-left'>
						2023 Juan Rodriguez —
						<a
							href='#'
							rel='noopener noreferrer'
							className='text-gray-600 ml-1'
							target='_blank'>
							@jestebanrodriguez
						</a>
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<a
							href='https://github.com/jestebanrodriguez'
							className='github'
							target='_blank'
							rel='noopener noreferrer'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z'></path>
							</svg>
							GitHub
						</a>
					</span>
				</div>
			</div>
		)
}