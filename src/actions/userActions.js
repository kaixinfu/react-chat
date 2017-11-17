
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

export function addUserAsync(obj) {
	return dispatch => {
		setTimeout(() => {
			dispatch(addUser(obj))
		}, 1500)
	}
}