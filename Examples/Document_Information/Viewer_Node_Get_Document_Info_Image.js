"use strict";
class Viewer_Node_Get_Document_Info_Image {
	static Run() {
		var fileName = "one-page.docx";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageGetDocumentInfoRequest(fileName);
		request.folder = folder;
		viewerApi.imageGetDocumentInfo(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Document_Info_Image;