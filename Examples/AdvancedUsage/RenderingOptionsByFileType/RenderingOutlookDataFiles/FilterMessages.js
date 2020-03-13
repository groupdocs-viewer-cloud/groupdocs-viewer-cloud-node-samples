"use strict";

// This example demonstrates how to render Outlook Data File with filtering the rendered messages
class FilterMessages {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.ost";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.outlookOptions = new viewer_cloud.OutlookOptions();     
        viewOptions.renderOptions.outlookOptions.textFilter = "Microsoft";
        viewOptions.renderOptions.outlookOptions.addressFilter = "susan";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("FilterMessages completed: " + response.pages.length);
	}
}
module.exports = FilterMessages;
