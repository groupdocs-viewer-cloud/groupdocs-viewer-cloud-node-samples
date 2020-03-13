"use strict";

// This example demonstrates how to reorder pages
class ReorderPages {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        // Pass page numbers in the order you want to render them
        viewOptions.renderOptions.pagesToRender = [2, 1];

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("ReorderPages completed: " + response.pages.length);
	}
}
module.exports = ReorderPages;
