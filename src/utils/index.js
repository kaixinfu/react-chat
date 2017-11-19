
export function pathTo({type, avatar}) {
	console.log(type, avatar)
	let url = type === 'boss' ? '/boss' : '/genius';
	if(!!!avatar)  url += 'info';
	return url
}