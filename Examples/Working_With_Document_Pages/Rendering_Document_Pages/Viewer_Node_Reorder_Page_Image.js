"use strict";
class Viewer_Node_Reorder_Page_Image {
	static Run() {
		var fileName = "sample.docx";
		var folderName = "viewerdocs";
		var transformOptions = new groupdocs_viewer_cloud_1.ReorderOptions();
		transformOptions.pageNumber = 1;
		transformOptions.newPosition = 2;
		var request = new groupdocs_viewer_cloud_1.ImageTransformPagesRequest(fileName);
		request.transformOptions = transformOptions;
		request.folder = folderName;
		viewerApi.imageTransformPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Reorder_Page_Image;