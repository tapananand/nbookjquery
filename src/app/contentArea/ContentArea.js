import $ from "jquery";

class ContentArea {
	constructor(container) {
		this.container = container;
		this.render();
	}

	render() {
		let template = require("./templates/contentArea.mustache");
		$(this.container).append($(template()));
		this.contentAreaContainer = $("div#contentArea");
	}
}

export default ContentArea;