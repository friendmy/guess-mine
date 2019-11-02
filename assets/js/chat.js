export function handleMessageNotif(data) {
	const { message, nickname } = data;
	document.getElementById("test").value = `${nickname}: said ${message}`;
}
