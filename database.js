let users = [
    { id: "1", name: "John Smith", bio: "22 years old from New York New York" },
    { id: "2", name: "David Jones", bio: "45 years old from Seatle Washington" },
    { id: "3", name: "Michael Johnson", bio: "32 years old from Dallas Texas" },
    { id: "4", name: "Chris Lee", bio: "23 years old from Sanfrancisco California"}
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}