"use strict";
class Viewer_Node_Delete_Fonts_Resources {
	static Run() {
		viewerApi.deleteFontsCache();
		console.log("Fonts cache removed");
	}
}
module.exports = Viewer_Node_Delete_Fonts_Resources;