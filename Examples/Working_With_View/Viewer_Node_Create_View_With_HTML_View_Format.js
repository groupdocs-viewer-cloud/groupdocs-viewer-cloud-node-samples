"use strict";
class Viewer_Node_Create_View_With_HTML_View_Format {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/one-page.docx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;
		viewOptions.ViewFormat = groupdocs_viewer_cloud_1.ViewOptions.Html;

		var request = new groupdocs_viewer_cloud_1.CreateViewRequest(viewOptions);

		viewApi.createView(request)
			.then(function (response) {
				console.log("Expected response type is ViewResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_View_With_HTML_View_Format;
