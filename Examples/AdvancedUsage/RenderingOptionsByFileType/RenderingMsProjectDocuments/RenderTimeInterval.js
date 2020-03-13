"use strict";

// This example demonstrates how to render MS Project document using StartDate and EndDate
class RenderTimeInterval {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.mpp";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.projectManagementOptions = new viewer_cloud.ProjectManagementOptions();     
        viewOptions.renderOptions.projectManagementOptions.startDate = new Date(Date.UTC(2008, 6, 1, 0, 0, 0));
        viewOptions.renderOptions.projectManagementOptions.endDate = new Date(Date.UTC(2008, 7, 1, 0, 0, 0));

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderTimeInterval completed: " + response.pages.length);
	}
}
module.exports = RenderTimeInterval;
