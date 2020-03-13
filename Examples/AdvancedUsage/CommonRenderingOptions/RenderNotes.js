"use strict";

// This example demonstrates how to render documents with notes
class RenderNotes {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_notes.pptx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.renderNotes = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderNotes completed: " + response.pages.length);
	}
}
module.exports = RenderNotes;
