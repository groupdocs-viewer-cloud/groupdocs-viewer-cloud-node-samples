"use strict";
class Viewer_Node_Create_Attachment_Pages_Cache_Image {
	static Run() {
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		imageOptions.AttachmentPassword = "";
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var attachmentPassword = "";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageCreateAttachmentPagesCacheRequest(fileName, attachmentName, groupdocs_viewer_cloud_1.ImageOptions);
		request.attachmentPassword = attachmentPassword;
		request.folder = folder;
		viewerApi.imageCreateAttachmentPagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Attachment_Pages_Cache_Image;