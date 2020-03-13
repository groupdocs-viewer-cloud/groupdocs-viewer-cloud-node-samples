"use strict";

// This example demonstrates how to enable rendering of hidden rows and columns
class RenderHiddenColumnsAndRows {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_hidden_row_and_column.xlsx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.spreadsheetOptions = new viewer_cloud.SpreadsheetOptions();     
        viewOptions.renderOptions.spreadsheetOptions.renderHiddenColumns = true;
        viewOptions.renderOptions.spreadsheetOptions.renderHiddenRows = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderHiddenColumnsAndRows completed: " + response.pages.length);
	}
}
module.exports = RenderHiddenColumnsAndRows;
