"use strict";
class Viewer_Node_Get_ZIP_With_Pages_HTML {
	static Run() {
		var fileName = "sample-one-page.docx";
		var folderName = "viewerdocs";
		var resourcesPath = "./r/{resource-name}";
		var request = new groupdocs_viewer_cloud_1.HtmlGetZipWithPagesRequest(fileName);
		request.resourcePath = resourcesPath;
		request.folder = folderName;
		viewerApi.htmlGetZipWithPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_ZIP_With_Pages_HTML;