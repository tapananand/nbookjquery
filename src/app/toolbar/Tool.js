import $ from "jquery";

class Tool {
	constructor(toolbar, toolInfo, handler) {
		this.toolbar = toolbar;
		this.toolInfo = toolInfo;
		this.handler = handler;
		this.renderTool();
	}

	renderTool() {
		let toolTemplate = require("./templates/tool.mustache");
		this.toolInfo = this.toolInfo || {"title": ""};
		let outputHtml = $(toolTemplate(this.toolInfo));
		outputHtml.filter("button.tool").click(this.handler);
		$(this.toolbar).append(outputHtml);
	}
}

export default Tool;