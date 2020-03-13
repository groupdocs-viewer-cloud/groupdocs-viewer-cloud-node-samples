"use strict";

// This example demonstrates how to enable rendering of grid lines
class RenderSpreadsheetWithGridLines {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.xlsx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.spreadsheetOptions = new viewer_cloud.SpreadsheetOptions();     
        viewOptions.renderOptions.spreadsheetOptions.renderGridLines = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderSpreadsheetWithGridLines completed: " + response.pages.length);
	}
}
module.exports = RenderSpreadsheetWithGridLines;
