"use strict";
class Viewer_Node_Get_Attachment_From_Email_Image {
	static Run() {
		var filename = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var request = new groupdocs_viewer_cloud_1.ImageGetAttachmentRequest(filename, attachmentName);
		request.folder = "viewerdocs";
		viewerApi.imageGetAttachment(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_From_Email_Image;