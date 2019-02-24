"use strict";
class Viewer_Node_Create_Attachment_Pages_Cache_HTML {
	static Run() {
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.AttachmentPassword = "";
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var attachmentPassword = "";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlCreateAttachmentPagesCacheRequest(fileName, attachmentName, htmlOptions);
		request.attachmentPassword = attachmentPassword;
		request.folder = folder;
		viewerApi.htmlCreateAttachmentPagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Attachment_Pages_Cache_HTML;