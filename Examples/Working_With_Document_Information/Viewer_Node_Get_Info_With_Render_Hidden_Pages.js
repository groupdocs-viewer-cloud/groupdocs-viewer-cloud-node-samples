"use strict";
class Viewer_Node_Get_Info_With_Render_Hidden_Pages {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/two-hidden-pages.vsd";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

		var renderOptions = new groupdocs_viewer_cloud_1.RenderOptions();
		renderOptions.renderHiddenPages = true;

		viewOptions.renderOptions = renderOptions;

		var request = new groupdocs_viewer_cloud_1.GetInfoRequest(viewOptions);

		infoApi.getInfo(request)
			.then(function (response) {
				console.log("Expected response type is InfoResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Info_With_Render_Hidden_Pages;
