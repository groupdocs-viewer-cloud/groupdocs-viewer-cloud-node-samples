"use strict";
class Viewer_Node_Get_Attachment_Page_Resource_HTML {
	static Run() {
		var fileName = "with-attachment.msg";
		var attachmentName = "TestAttachment-File.docx";
		var attachmentPassword = "password";
		var folder = "viewerdocs";
		var pagesRequest = new groupdocs_viewer_cloud_1.HtmlGetAttachmentPagesRequest(fileName, attachmentName);
		pagesRequest.attachmentPassword = attachmentPassword;
		pagesRequest.folder = folder;
		pagesRequest.startPageNumber = 1;
		pagesRequest.countPages = 1;
		viewerApi.htmlGetAttachmentPages(pagesRequest)
			.then(function (result) {
				console.log("Document Pages Processed");
				console.log(result);
				var page = result.pages[0];
				page.resources.forEach(function (resource) {
					var request = new groupdocs_viewer_cloud_1.HtmlGetAttachmentPageResourceRequest(fileName, attachmentName, page.number, resource.name, "MyStorage", folder);
					viewerApi.htmlGetAttachmentPages(request)
						.then(function (resourceResult) {
							console.log(resourceResult);
						})["catch"](function (error) {
							console.log("Error: " + error.message);
						});
				});
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachment_Page_Resource_HTML