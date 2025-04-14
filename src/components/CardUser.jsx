import React from 'react'
import Deletebtn from '@/components/Deletebtn'
import Editbtn from '@/components/EditUser'

const CardUser = ({ e }) => {
	return (
		<div className="flex items-center justify-between p-6 mb-5  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
			<div className="flex flex-col space-y-2">
				<p className="text-2xl font-bold text-gray tracking-tight">{e.name}</p>
				<span className="inline-flex items-center text-xs text-teal-500 font-medium bg-white bg-opacity-10 rounded-full px-3 py-1 backdrop-blur-sm">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
					</svg>
					ID: {e.id}
				</span>
			</div>

			<div className="flex gap-3">
				<Editbtn id={e.id} currentName={e.name} />
				<Deletebtn id={e.id} />
			</div>
		</div>
	)
}

export default CardUser
