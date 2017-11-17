
export function addUser(obj) {
	return {
		type: 'ADD_USER',
		payload: obj
	}
}

export function removeUser() {
	return {
		type: 'REMOVE_USER'
	}
}

export const addUserAsync = obj => dispatch => {
	setTimeout(() => {
		dispatch(addUser(obj))
	}, 1500)
}