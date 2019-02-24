"use strict";
class Viewer_Node_Create_Pdf_File_from_Url_HTML {
	static Run() {
		var fileUrl = "https://www.dropbox.com/s/umokluz338w4ng7%2fone-page.docx";
		var folderName = "viewerdocs";
		var pdfFileOptions = new groupdocs_viewer_cloud_1.PdfFileOptions();
		var wordsOptions = new groupdocs_viewer_cloud_1.WordsOptions();
		pdfFileOptions.WordsOptions = wordsOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePdfFileFromUrlRequest(fileUrl, pdfFileOptions);
		request.folder = folderName;
		viewerApi.htmlCreatePdfFileFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Pdf_File_from_Url_HTML;