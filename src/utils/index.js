
export function pathTo({type, avatar}) {
	console.log('pathTo =========>', type, avatar)
	let url = type === 'leader' ? '/leader' : '/genuis';
	if(!!!avatar)  url += 'info';
	return url
}

export function getChatId(userId, chatId) {
	return [userId, chatId].sort().join('_')
}