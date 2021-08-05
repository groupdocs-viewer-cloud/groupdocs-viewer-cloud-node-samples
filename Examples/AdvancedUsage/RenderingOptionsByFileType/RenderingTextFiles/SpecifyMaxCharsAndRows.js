"use strict";

// This example demonstrates how to render a text files using rows and pages restrictions
class SpecifyMaxCharsAndRows {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.txt";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.textOptions = new viewer_cloud.TextOptions();     
        viewOptions.renderOptions.textOptions.maxCharsPerRow = 100;
        viewOptions.renderOptions.textOptions.maxRowsPerPage = 100;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("SpecifyMaxCharsAndRows completed: " + response.pages.length);
	}
}
module.exports = SpecifyMaxCharsAndRows;
