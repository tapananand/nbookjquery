import $ from "jquery";

class SidebarItem {
	constructor(sidebar, itemInfo, handler) {
		this.sidebar = sidebar;
		this.itemInfo = itemInfo;
		this.handler = handler;
		this.renderItem();
	}

	renderItem() {
		let itemTemplate = require("./templates/sidebarItem.mustache");
		this.itemInfo = this.itemInfo || {"content": ""};
		let outputHtml = $(itemTemplate(this.itemInfo));
		outputHtml.filter(".sidebarItem").click(this.handler);
		$(this.sidebar).append(outputHtml);
	}
}

export default SidebarItem;