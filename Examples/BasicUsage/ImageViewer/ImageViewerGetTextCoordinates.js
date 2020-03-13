"use strict";

// This example demonstrates how to retrieve and print out text with coordinates
class ImageViewerGetTextCoordinates {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PNG;
        viewOptions.renderOptions = new viewer_cloud.ImageOptions();
        viewOptions.renderOptions.extractText = true;    

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        for (let i = 0; i < 3; i++) {
            const line = response.pages[0].lines[i];
            console.log(" x: " + line.x + " y: " + line.y);
        }
		console.log("ImageViewerGetTextCoordinates completed: " + response.pages.length);
	}
}
module.exports = ImageViewerGetTextCoordinates;

