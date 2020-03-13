"use strict";

// This example demonstrates how to apply the watermark to the output pages
class AddWatermark {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.watermark = new viewer_cloud.Watermark();
        viewOptions.watermark.text = "This is a watermark";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("AddWatermark completed: " + response.pages.length);
	}
}
module.exports = AddWatermark;
