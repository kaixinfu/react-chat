import axios from 'axios'
import {Toast} from 'antd-mobile'

const info = (error) => {
	console.log(error)
	Toast.info(error, 1);
}

export default {
	info,
}