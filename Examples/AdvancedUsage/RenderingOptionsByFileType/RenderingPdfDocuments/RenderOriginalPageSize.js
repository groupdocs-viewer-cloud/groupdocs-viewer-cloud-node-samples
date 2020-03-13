"use strict";

// This example demonstrates how to convert pages to the same size as the size of pages in a source document
class RenderOriginalPageSize {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.pdf";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PNG;
        viewOptions.renderOptions = new viewer_cloud.ImageOptions();
        viewOptions.renderOptions.pdfDocumentOptions = new viewer_cloud.PdfDocumentOptions();     
        viewOptions.renderOptions.pdfDocumentOptions.renderOriginalPageSize = true

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderOriginalPageSize completed: " + response.pages.length);
	}
}
module.exports = RenderOriginalPageSize;
