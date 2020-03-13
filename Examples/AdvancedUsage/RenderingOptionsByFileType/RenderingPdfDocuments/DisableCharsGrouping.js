"use strict";

// This example demonstrates how to improve content positioning when rendering into PDF
class DisableCharsGrouping {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.pdf";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.pdfDocumentOptions = new viewer_cloud.PdfDocumentOptions();     
        viewOptions.renderOptions.pdfDocumentOptions.disableCharsGrouping = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("DisableCharsGrouping completed: " + response.pages.length);
	}
}
module.exports = DisableCharsGrouping;
