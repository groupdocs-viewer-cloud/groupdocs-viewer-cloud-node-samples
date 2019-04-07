"use strict";
class Viewer_Node_Create_View_With_StartPage_And_CountPages {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/four-pages.docx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

		var renderOptions = new groupdocs_viewer_cloud_1.RenderOptions();
		renderOptions.startPageNumber = 2;
		renderOptions.countPagesToRender = 2;

		viewOptions.renderOptions = renderOptions;

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
module.exports = Viewer_Node_Create_View_With_StartPage_And_CountPages;
