"use strict";
class Viewer_Node_Get_Pdf_File_Image {
	static Run() {
		var fileName = "one-page.docx";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.ImageGetPdfFileRequest(fileName);
		request.folder = folderName;
		viewerApi.imageGetPdfFile(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Pdf_File_Image;