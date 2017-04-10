import Tool from "./Tool";
import $ from "jquery";

class Toolbar {
	constructor(container) {
		this.tools = {};
		this.toolCounter = 0;
		this.container = container;

		this.createToolbar();
	}

	createToolbar() {
		let toolbarTemplate = require("./templates/toolbar.mustache");
		$(this.container).append(toolbarTemplate());
		this.toolbarContainer = $("div#toolbar");
	}

	addTool(toolInfo, handler) {
		let tool = new Tool(this.toolbarContainer, toolInfo, handler);
		this.tools[this.toolCounter] = tool;
		return this.toolCounter++; 
	}
}

export default Toolbar;