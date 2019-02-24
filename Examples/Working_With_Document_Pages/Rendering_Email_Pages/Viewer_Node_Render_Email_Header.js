"use strict";
class Viewer_Node_Render_Email_Header {
	static Run() {
		var fileName = "with-attachment.msg";
		var folderName = "viewerdocs";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		var emailOptions = new groupdocs_viewer_cloud_1.EmailOptions();
		htmlOptions.EmbedResources = true;
		var arrayFieldLabel = Array(new groupdocs_viewer_cloud_1.FieldLabel());
		var fieldLabel = new groupdocs_viewer_cloud_1.FieldLabel();
		fieldLabel.Field = "From";
		fieldLabel.Label = "Sender";
		arrayFieldLabel.push(fieldLabel);
		fieldLabel.Field = "To";
		fieldLabel.Label = "Receiver";
		arrayFieldLabel.push(fieldLabel);
		emailOptions.FieldLabels = arrayFieldLabel;
		htmlOptions.EmailOptions = emailOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheRequest(fileName);
		request.folder = folderName;
		request.htmlOptions = htmlOptions;
		viewerApi.htmlCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Render_Email_Header;