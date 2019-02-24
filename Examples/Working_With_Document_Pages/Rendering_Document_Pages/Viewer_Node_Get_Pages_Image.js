"use strict";
class Viewer_Node_Get_Pages_Image {
	static Run() {
		var fileName = "sample.docx";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageGetPagesRequest(fileName);
		request.folder = folderName;
		viewerApi.imageGetPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Pages_Image;