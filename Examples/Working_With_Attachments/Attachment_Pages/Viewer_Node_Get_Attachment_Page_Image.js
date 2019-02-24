"use strict";
class Viewer_Node_Get_Attachment_Page_Image {
	static Run() {
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var attachmentPassword = null;
		var folder = "viewerdocs";
		var pageNumber = 1;
		var request = new groupdocs_viewer_cloud_1.ImageGetAttachmentPageRequest(fileName, attachmentName, pageNumber);
		request.attachmentPassword = attachmentPassword;
		request.folder = folder;
		viewerApi.imageGetAttachmentPage(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_Page_Image;