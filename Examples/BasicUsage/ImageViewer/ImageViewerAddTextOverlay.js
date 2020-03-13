"use strict";

// This example demonstrates how to render document for display with text
class ImageViewerAddTextOverlay {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PNG;
        viewOptions.renderOptions = new viewer_cloud.ImageOptions();
        viewOptions.renderOptions.extractText = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("ImageViewerAddTextOverlay completed: " + response.pages.length);
	}
}
module.exports = ImageViewerAddTextOverlay;
