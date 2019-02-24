"use strict";
class Viewer_Node_Remove_Document_Cache_for_Image_Pages {
	static Run() {
		var fileName = "sample.docx";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageDeletePagesCacheRequest(fileName);
		request.folder = folderName;
		viewerApi.imageDeletePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Remove_Document_Cache_for_Image_Pages;