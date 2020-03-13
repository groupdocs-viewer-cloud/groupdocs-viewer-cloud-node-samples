"use strict";

// This example demonstrates how to render consecutive pages
class RenderConsecutivePages {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.startPageNumber = 1;
        viewOptions.renderOptions.countPagesToRender = 2;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderConsecutivePages completed: " + response.pages.length);
	}
}
module.exports = RenderConsecutivePages;
