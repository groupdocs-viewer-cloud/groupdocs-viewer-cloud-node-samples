"use strict";
class Viewer_Node_Get_Attachments_Image {
	static Run() {
		var filename = "with-attachment.msg";
		var request = new groupdocs_viewer_cloud_1.ImageGetAttachmentsRequest(filename);
		request.folder = "viewerdocs";
		viewerApi.imageGetAttachments(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachments_Image;