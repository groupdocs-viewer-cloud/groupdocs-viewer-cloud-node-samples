"use strict";
class Viewer_Node_Get_Document_Info_With_Options_HTML {
	static Run() {
		var documentInfoOptions = new groupdocs_viewer_cloud_1.DocumentInfoOptions();
		documentInfoOptions.Password = null;
		var fileName = "one-page.docx";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlGetDocumentInfoWithOptionsRequest(fileName);
		request.folder = folder;
		request.documentInfoOptions = documentInfoOptions;
		viewerApi.htmlGetDocumentInfoWithOptions(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Document_Info_With_Options_HTML;