"use strict";
class Viewer_Node_Set_Image_Quality {
	static Run() {
		var fileName = "sample2.pdf";
		var folderName = "viewerdocs";
		var pdfOptions = new groupdocs_viewer_cloud_1.PdfOptions();
		pdfOptions.ImageQuality = "High";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.pdfOptions = pdfOptions;
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
module.exports = Viewer_Node_Set_Image_Quality;