(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				throw new Error("Cannot find module '" + o + "'");
			}
			var f = (n[o] = { exports: {} });
			t[o][0].call(
				f.exports,
				function(e) {
					var n = t[o][1][e];
					return s(n ? n : e);
				},
				f,
				f.exports,
				e,
				t,
				n,
				r
			);
		}
		return n[o].exports;
	}
	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++) s(r[o]);
	return s;
})(
	{
		1: [
			function(require, module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.handleMessageNotif = handleMessageNotif;

				function handleMessageNotif(data) {
					var message = data.message,
						nickname = data.nickname;
					document.getElementById("test").value = ""
						.concat(nickname, ": said ")
						.concat(message);
				}
				//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLFNBQVNBLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQztBQUFBLE1BQ2hDQyxPQURnQyxHQUNWRCxJQURVLENBQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxRQUR1QixHQUNWRixJQURVLENBQ3ZCRSxRQUR1QjtBQUV4Q0MsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDQyxLQUFoQyxhQUEyQ0gsUUFBM0Msb0JBQTZERCxPQUE3RDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XHJcblx0Y29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIikudmFsdWUgPSBgJHtuaWNrbmFtZX06IHNhaWQgJHttZXNzYWdlfWA7XHJcbn1cclxuIl19
			},
			{}
		],
		2: [
			function(require, module, exports) {
				"use strict";

				var _chat = require("./chat");

				var socket = io("/");

				function sendMessage(message) {
					socket.emit("newMessage", {
						message: message
					});
					console.log("You: ".concat(message));
				}

				function setNickname(nickname) {
					socket.emit("setNickname", {
						nickname: nickname
					});
				}

				socket.on("messageNotif", _chat.handleMessageNotif);
				//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzI2YzgwMjEuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzdCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNBOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzlCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNBOztBQUVEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWYgfSBmcm9tIFwiLi9jaGF0XCI7XHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG5cdGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcclxuXHRzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XHJcbn1cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVNZXNzYWdlTm90aWYpO1xyXG4iXX0=
			},
			{ "./chat": 1 }
		]
	},
	{},
	[2]
);
