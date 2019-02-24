"use strict";
class Viewer_Node_Get_Fonts_Resources {
	static Run() {
		viewerApi.getFonts()
			.then(function (result) {
				result.families.forEach(function (family) {
					console.log(family.name);
				});
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Fonts_Resources;