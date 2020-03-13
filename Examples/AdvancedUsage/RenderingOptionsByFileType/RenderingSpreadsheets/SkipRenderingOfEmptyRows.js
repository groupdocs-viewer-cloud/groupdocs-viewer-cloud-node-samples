"use strict";

// This example demonstrates how to omit to render empty rows
class SkipRenderingOfEmptyRows {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_empty_row.xlsx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.spreadsheetOptions = new viewer_cloud.SpreadsheetOptions();     
        viewOptions.renderOptions.spreadsheetOptions.renderEmptyRows = false;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("SkipRenderingOfEmptyRows completed: " + response.pages.length);
	}
}
module.exports = SkipRenderingOfEmptyRows;
