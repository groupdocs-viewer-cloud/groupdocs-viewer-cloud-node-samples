"use strict";

// This example demonstrates how to optimize output HTML for printing
class HtmlViewerOptimizeForPrinting {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.forPrinting = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("HtmlViewerOptimizeForPrinting completed: " + response.pages.length);
	}
}
module.exports = HtmlViewerOptimizeForPrinting;
