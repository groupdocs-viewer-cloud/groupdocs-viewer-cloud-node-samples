"use strict";

// This example demonstrates how to adjust image quality when rendering PDF to HTML
class AdjustImageQuality {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.pdf";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.pdfDocumentOptions = new viewer_cloud.PdfDocumentOptions();     
        viewOptions.renderOptions.pdfDocumentOptions.imageQuality = viewer_cloud.PdfDocumentOptions.ImageQualityEnum.Medium;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("AdjustImageQuality completed: " + response.pages.length);
	}
}
module.exports = AdjustImageQuality;
