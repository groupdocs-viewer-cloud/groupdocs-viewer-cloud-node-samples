"use strict";
class Viewer_Node_Render_Email_Image_PageSize {
	static Run() {
		var fileName = "with-attachment.msg";
		var folderName = "viewerdocs";
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		var emailOptions = new groupdocs_viewer_cloud_1.EmailOptions();
		emailOptions.PageSize = "A0";
		imageOptions.EmailOptions = emailOptions;
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
module.exports = Viewer_Node_Render_Email_Image_PageSize;