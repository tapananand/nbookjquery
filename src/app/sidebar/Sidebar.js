import $ from "jquery";
import SidebarItem from "./SidebarItem";

class Sidebar {
	constructor(container) {
		this.container = container;
		this.items = {};
		this.itemCounter = 0;
		this.render();
	}

	render() {
		let sidebarTemplate = require("./templates/sidebar.mustache");
		$(this.container).append(sidebarTemplate());
		this.sidebarContainer = $("div#sidebar");
	}

	addItem(itemInfo, handler) {
		let item = new SidebarItem(this.sidebarContainer, itemInfo, handler);
		this.items[this.itemCounter] = item;
		return this.itemCounter++;
	}

}

export default Sidebar;