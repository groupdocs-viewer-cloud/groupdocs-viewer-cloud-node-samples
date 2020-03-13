"use strict";

// This example demonstrates how to exclude fonts from output HTML
class HtmlViewerExcludeFonts {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.fontsToExclude = ["Times New Roman"];

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("HtmlViewerExcludeFonts completed: " + response.pages.length);
	}
}
module.exports = HtmlViewerExcludeFonts;
