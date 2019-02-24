"use strict";
class Viewer_Node_Get_Watermark_Pdf_File_Image {
	static Run() {
		var fileName = "sample-one-page.docx";
		var folderName = "viewerdocs";
		var pdfFileOptions = new groupdocs_viewer_cloud_1.PdfFileOptions();
		var watermark = new groupdocs_viewer_cloud_1.Watermark();
		watermark.Text = "GroupDocs";
		pdfFileOptions.Watermark = watermark;
		var request = new groupdocs_viewer_cloud_1.ImageCreatePdfFileRequest(fileName, pdfFileOptions);
		request.folder = folderName;
		viewerApi.imageCreatePdfFile(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Watermark_Pdf_File_Image;