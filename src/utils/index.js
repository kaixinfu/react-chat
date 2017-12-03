
export function pathTo({type, avatar}) {
	console.log('pathTo =========>', type, avatar)
	let url = type === 'boss' ? '/boss' : '/genuis';
	if(!!!avatar)  url += 'info';
	return url
}