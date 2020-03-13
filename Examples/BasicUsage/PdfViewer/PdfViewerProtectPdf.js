"use strict";

// This example demonstrates how to protect output PDF document
class PdfViewerProtectPdf {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_jpg_image.pptx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PDF;
        viewOptions.renderOptions = new viewer_cloud.PdfOptions();
        viewOptions.renderOptions.permissions = viewer_cloud.PdfOptions.PermissionsEnum.DenyModification,
        viewOptions.renderOptions.permissionsPassword = "p123";
        viewOptions.renderOptions.documentOpenPassword = "o123";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("PdfViewerProtectPdf completed: " + response.file.path);
	}
}
module.exports = PdfViewerProtectPdf;
