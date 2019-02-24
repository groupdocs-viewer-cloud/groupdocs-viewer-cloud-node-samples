"use strict";
class Viewer_Node_Get_Attachment_Pages_Image {
	static Run() {
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var attachmentPassword = null;
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageGetAttachmentPagesRequest(fileName, attachmentName);
		request.attachmentPassword = attachmentPassword;
		request.folder = folder;
		viewerApi.imageGetAttachmentPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_Pages_Image;