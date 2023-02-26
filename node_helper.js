const NodeHelper = require("node_helper");
const schedule = require("node-schedule");
const axios = require("axios");

module.exports = NodeHelper.create({
	start: function () {
		console.log("Starting module: " + this.name);
		this.quote = null;
	},

	socketNotificationReceived: function (notification, payload) {
		this.config = payload;
		if (notification === "GET_QUOTE") {
			if (this.config.apiKey !== "") {
				if (this.quote === null) {
					this.fetchQuote();
					schedule.scheduleJob("0 0 * * *", () => {
						this.fetchQuote();
					});
				} else this.sendSocketNotification("QUOTE", this.quote);
			} else {
				this.sendSocketNotification("ERROR");
				console.log("API key is missing");
			}
		}
	},

	fetchQuote: async function () {
		const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=" + this.config.language;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": this.config.apiKey,
				"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
			}
		};
		try {
			const response = await axios.request(url, options);
			this.quote = await response.data;
			this.sendSocketNotification("QUOTE", this.quote);
			console.log("Quote fetch was successful");
		} catch (error) {
			this.sendSocketNotification("ERROR");
			console.log("Error due fetch process - ", error);
		}
	}
});
