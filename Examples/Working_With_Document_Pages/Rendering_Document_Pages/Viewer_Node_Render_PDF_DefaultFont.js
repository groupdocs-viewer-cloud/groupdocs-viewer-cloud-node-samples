"use strict";
class Viewer_Node_Render_PDF_DefaultFont {
	static Run() {
		var fileName = "sample2.pdf";
		var folderName = "viewerdocs";
		var pdfFileOptions = new groupdocs_viewer_cloud_1.PdfFileOptions();
		pdfFileOptions.defaultFontName = "Arial";
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePdfFileRequest(fileName);
		request.folder = folderName;
		request.pdfFileOptions = pdfFileOptions;
		viewerApi.htmlCreatePdfFile(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Render_PDF_DefaultFont;