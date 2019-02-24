"use strict";
class Viewer_Node_Get_Pdf_File_from_Url_HTML {
	static Run() {
		var fileUrl = "https://www.dropbox.com/s/umokluz338w4ng7%2fone-page.docx";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlGetPdfFileFromUrlRequest(fileUrl);
		request.folder = folderName;
		viewerApi.htmlGetPdfFileFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Pdf_File_from_Url_HTML;