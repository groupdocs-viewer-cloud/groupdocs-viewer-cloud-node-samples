"use strict";
class Viewer_Node_Get_Attachment_Info_WithOptions_HTML {
	static Run() {
		var options = new groupdocs_viewer_cloud_1.DocumentInfoOptions();
		options.AttachmentPassword = null;
		var filename = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlGetAttachmentInfoWithOptionsRequest(filename, attachmentName, options, folder);
		viewerApi.htmlGetAttachmentInfoWithOptions(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_Info_WithOptions_HTML;