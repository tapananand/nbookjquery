import $ from "jquery";
import Toolbar from "./toolbar/Toolbar";
import Sidebar from "./sidebar/Sidebar";

class App {
	constructor() {
		this.mainTemplate = require("./templates/main.mustache");
		this.render();
	}

	render() {
		$("body").html(this.mainTemplate());
		this.container = $("div#container");
		this.renderAppUI();
	}

	renderAppUI() {
		this.renderToolbar();
		this.renderSideBar();
		this.renderContentArea();
	}

	renderToolbar() {
		this.toolbar = new Toolbar(this.container);
		this.toolbar.addTool({
			"title": "New Note"
		}, () => {
			console.log("New Note");
		});
		this.toolbar.addTool({
			"title": "New Notebook"
		}, () => {
			console.log("New Notebook");
		});
	}

	renderSideBar() {
		this.sidebar = new Sidebar(this.container);
		this.sidebar.addItem({
			"content": "Note 1"
		}, () => {
			console.log("Note 1 clicked");
		});
		this.sidebar.addItem({
			"content": "Note 2"
		}, () => {
			console.log("Note 2 clicked");
		});
	}

	renderContentArea() {

	}
}

export default App;