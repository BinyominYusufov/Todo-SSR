'use client'
import React, { useState } from 'react'
import axios from 'axios'

const API = 'https://67f7d60d2466325443eaf213.mockapi.io/todo'

const AddUser = () => {
	const [name, setName] = useState('')

	const add = async () => {
		try {
			await axios.post(API, { name })
			setName('')
			location.reload()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-2xl space-y-6 transition-all duration-500">
			<p className="text-3xl font-bold text-center">Add New User</p>

			<div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter name"
					className="flex-1 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300 text-gray-800 text-lg shadow-inner"
				/>

				<button
					onClick={add}
					className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-md"
				>
					Add User
				</button>
			</div>
		</div>

	)
}

export default AddUser
