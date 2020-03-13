"use strict";

// This example demonstrates how to render only the print areas from worksheets
class RenderPrintAreas {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_four_print_areas.xlsx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.spreadsheetOptions = new viewer_cloud.SpreadsheetOptions();     
        viewOptions.renderOptions.spreadsheetOptions.renderPrintAreaOnly = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderPrintAreas completed: " + response.pages.length);
	}
}
module.exports = RenderPrintAreas;
