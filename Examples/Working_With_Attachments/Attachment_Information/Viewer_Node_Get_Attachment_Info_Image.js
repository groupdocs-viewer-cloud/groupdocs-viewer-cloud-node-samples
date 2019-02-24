"use strict";
class Viewer_Node_Get_Attachment_Info_Image {
	static Run() {
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var password = null;
		var attachmentPassword = null;
		var folder = "viewerdocs";
		var storage = "MyStorage";
		var request = new groupdocs_viewer_cloud_1.ImageGetAttachmentInfoRequest(fileName, attachmentName, password, attachmentPassword, storage, folder);
		viewerApi.imageGetAttachmentInfo(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_Info_Image;