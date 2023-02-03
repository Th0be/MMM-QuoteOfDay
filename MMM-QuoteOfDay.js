Module.register("MMM-QuoteOfDay", {
	defaults: {
		api_key: "",
		language: "en",
		showTitle: true,
		showAuthor: true,
		animationSpeed: 2.5 * 1000
	},

	getTranslations: function () {
		return {
			en: "translations/en.json",
			cs: "translations/cs.json"
		};
	},

	start: function () {
		this.loaded = false;
		this.error = false;
		this.quote = null;
		this.sendSocketNotification("GET_QUOTE", this.config);
	},

	socketNotificationReceived: function (notification, payload) {
		if (notification === "QUOTE") {
			this.quote = payload;
			this.loaded = true;
		} else if (notification === "ERROR") {
			this.error = true;
		}
		this.updateDom(this.config.animationSpeed);
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		var quote = document.createElement("div");
		var quoteTitle = document.createElement("div");

		quoteTitle.className = "light small dimmed";
		quote.className = "bright medium light";

		wrapper.appendChild(quoteTitle);
		wrapper.appendChild(quote);

		if (this.error) {
			quoteTitle.innerHTML = this.translate("FETCH_ERROR");
		} else if (!this.loaded) {
			quoteTitle.innerHTML = this.translate("LOADING");
		} else if (this.loaded) {
			if (this.config.showTitle) quoteTitle.innerHTML = this.translate("TITLE");
			quote.innerHTML = "„" + this.quote.content + "“";
			if (this.config.showAuthor && this.quote.originator !== null) {
				quote.innerHTML += " - " + this.quote.originator.name;
			}
		}

		return wrapper;
	}
});
