"use strict";

// This example demonstrates how to split worksheets into pages
class SplitWorksheetsIntoPages {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.xlsx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.spreadsheetOptions = new viewer_cloud.SpreadsheetOptions();     
        viewOptions.renderOptions.spreadsheetOptions.paginateSheets = true;
        viewOptions.renderOptions.spreadsheetOptions.countRowsPerPage = 45;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("SplitWorksheetsIntoPages completed: " + response.pages.length);
	}
}
module.exports = SplitWorksheetsIntoPages;
