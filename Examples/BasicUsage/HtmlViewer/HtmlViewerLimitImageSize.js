"use strict";

// This example demonstrates how to set output image size limits when rendering single image to PDF/HTML.
class HtmlViewerLimitImageSize {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.jpg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.imageMaxWidth = 800;
		viewOptions.renderOptions.imageMaxHeight = 600;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("HtmlViewerLimitImageSize completed: " + response.pages.length);
	}
}
module.exports = HtmlViewerLimitImageSize;
