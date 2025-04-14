'use client'
import { useState } from 'react'
import axios from 'axios'
import { API } from '@/app/page'

const Editbtn = ({ id, currentName }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newName, setNewName] = useState(currentName)

	const handleSave = async () => {
		try {
			await axios.put(`${API}/${id}`, { name: newName })
			setIsEditing(false)
			location.reload()
		} catch (error) {
			console.error('Edit failed:', error)
		}
	}

	return (
		<div className="inline-flex gap-2 items-center">


			<button
				onClick={() => setIsEditing(true)}
				className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
			>
				Edit
			</button>


			{isEditing && (
				<div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm">
					<div className="w-full max-w-md bg-white rounded-t-2xl shadow-lg p-6 animate-slide-up space-y-4">
						<h2 className="text-lg font-semibold text-gray-800">Edit User</h2>

						<input
							type="text"
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
							className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter new name"
						/>

						<div className="flex justify-end gap-3">
							<button
								onClick={() => {
									handleSave();
									setIsEditing(false);
								}}
								className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
							>
								Save
							</button>

							<button
								onClick={() => {
									setIsEditing(false);
									setNewName(currentName);
								}}
								className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}


		</div>
	)
}

export default Editbtn
