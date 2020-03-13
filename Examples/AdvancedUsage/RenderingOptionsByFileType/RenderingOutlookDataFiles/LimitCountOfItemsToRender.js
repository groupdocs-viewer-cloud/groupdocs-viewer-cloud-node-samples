"use strict";

// This example demonstrates how to  render the items in an Outlook Data File by setting a maximum limit
class LimitCountOfItemsToRender {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.ost";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.outlookOptions = new viewer_cloud.OutlookOptions();     
        viewOptions.renderOptions.outlookOptions.maxItemsInFolder = 1000;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("LimitCountOfItemsToRender completed: " + response.pages.length);
	}
}
module.exports = LimitCountOfItemsToRender;
