"use strict";

// This example demonstrates how to adjust quality of the output JPG image
class ImageViewerAdjustJpgQuality {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.JPG;
        viewOptions.renderOptions = new viewer_cloud.ImageOptions();
        viewOptions.renderOptions.jpegQuality = 50;        

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("ImageViewerAdjustJpgQuality completed: " + response.pages.length);
	}
}
module.exports = ImageViewerAdjustJpgQuality;
