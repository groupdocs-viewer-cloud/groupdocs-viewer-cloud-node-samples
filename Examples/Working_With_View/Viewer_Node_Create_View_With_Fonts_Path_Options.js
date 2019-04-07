"use strict";
class Viewer_Node_Create_View_With_Fonts_Path_Options {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/uses-custom-font.pptx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;
		viewOptions.ViewFormat = groupdocs_viewer_cloud_1.ViewOptions.Png;
		viewOptions.fontsPath = "font/ttf";

		var request = new groupdocs_viewer_cloud_1.CreateViewRequest(viewOptions);

		viewerApi.createView(request)
			.then(function (response) {
				console.log("Expected response type is ViewResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_View_With_Fonts_Path_Options;
