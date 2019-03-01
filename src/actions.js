// export const apiCall = (link) => {
// 	fetch(link).then(res => res.json());
// }

export const requestNews = () => (dispatch) => {
	dispatch({
		type: "REQUEST_NEWS_PENDING"
	})
	fetch('https://newsapi.org/v2/everything?q=chemistry&apiKey=5a517ed08ae345d8984821be0aef50b0')
	// https://newsapi.org/v2/everything?q=chemistry&apiKey=5a517ed08ae345d8984821be0aef50b0
	.then(res => res.json())
	.then(data => dispatch({
		type: "REQUEST_NEWS_SUCCESS",
		payload: data
	}))
	.catch(e => dispatch({
		type: "REQUEST_NEWS_FAILED",
		payload: e
	}))
}
