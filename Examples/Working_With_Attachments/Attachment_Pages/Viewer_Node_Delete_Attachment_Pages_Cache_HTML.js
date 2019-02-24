"use strict";
class Viewer_Node_Delete_Attachment_Pages_Cache_HTML {
	static Run() {
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlDeleteAttachmentPagesCacheRequest(fileName, attachmentName, folder);
		viewerApi.htmlDeleteAttachmentPagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Delete_Attachment_Pages_Cache_HTML;