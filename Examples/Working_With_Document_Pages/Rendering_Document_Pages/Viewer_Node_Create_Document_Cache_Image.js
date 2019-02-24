"use strict";
class Viewer_Node_Create_Document_Cache_Image {
	static Run() {
		var fileName = "sample-one-page.docx";
		var folderName = "viewerdocs";
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		imageOptions.Format = "jpg";
		var request = new groupdocs_viewer_cloud_1.ImageCreatePagesCacheRequest(fileName);
		request.folder = folderName;
		request.imageOptions = imageOptions;
		viewerApi.imageCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Document_Cache_Image;