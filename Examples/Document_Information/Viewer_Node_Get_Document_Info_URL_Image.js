"use strict";
class Viewer_Node_Get_Document_Info_URL_Image {
	static Run() {
		var url = "https://www.dropbox.com/s/j260ve4f90h1p41/one-page.docx?dl=1";
		var fileName = "one-page-url.docx";
		var folder = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageGetDocumentInfoFromUrlRequest(url);
		request.fileName = fileName;
		request.folder = folder;
		viewerApi.imageGetDocumentInfoFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Document_Info_URL_Image;