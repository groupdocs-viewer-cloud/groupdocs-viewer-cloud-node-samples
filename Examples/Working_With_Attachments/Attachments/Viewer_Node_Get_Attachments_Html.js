"use strict";
class Viewer_Node_Get_Attachments_Html {
	static Run() {
		var request = new groupdocs_viewer_cloud_1.HtmlGetAttachmentsRequest("with-attachment.msg");
		request.folder = "viewerdocs";
		viewerApi.htmlGetAttachments(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Attachments_Html;