"use strict";
class Viewer_Node_Download_Document_Page_Image {
	static Run() {
		var fileName = "sample-one-page.docx";
		var folderName = "viewerdocs";
		var pageNumber = 1;
		var format = "jpg";
		var request = new groupdocs_viewer_cloud_1.ImageGetPageRequest(fileName, pageNumber);
		request.folder = folderName;
		request.format = format;
		viewerApi.imageGetPage(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Download_Document_Page_Image;