"use strict";

// This example demonstrates how to render a Word document including tracked changes
class RenderTrackedChanges {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_tracked_changes.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.wordProcessingOptions = new viewer_cloud.WordProcessingOptions();     
        viewOptions.renderOptions.wordProcessingOptions.renderTrackedChanges = true   

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderTrackedChanges completed: " + response.pages.length);
	}
}
module.exports = RenderTrackedChanges;
