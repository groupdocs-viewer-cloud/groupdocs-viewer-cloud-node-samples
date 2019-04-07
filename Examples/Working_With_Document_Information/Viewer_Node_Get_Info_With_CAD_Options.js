"use strict";
class Viewer_Node_Get_Info_With_CAD_Options {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/three-layouts.dwf";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

		var renderOptions = new groupdocs_viewer_cloud_1.RenderOptions();
		var cadOptions = new groupdocs_viewer_cloud_1.CadOptions();
		cadOptions.ScaleFactor = 50;

		renderOptions.cadOptions = cadOptions;
		viewOptions.renderOptions = renderOptions;

		var request = new groupdocs_viewer_cloud_1.GetInfoRequest(viewOptions);

		viewerApi.getInfo(request)
			.then(function (response) {
				console.log("Expected response type is InfoResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Info_With_CAD_Options;
