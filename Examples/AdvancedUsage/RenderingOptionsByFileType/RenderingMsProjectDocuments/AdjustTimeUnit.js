"use strict";

// This example demonstrates how to render MS Project document by time interval
class AdjustTimeUnit {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.mpp";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.projectManagementOptions = new viewer_cloud.ProjectManagementOptions();     
        viewOptions.renderOptions.projectManagementOptions.timeUnit = viewer_cloud.ProjectManagementOptions.TimeUnitEnum.Days;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("AdjustTimeUnit completed: " + response.pages.length);
	}
}
module.exports = AdjustTimeUnit;
