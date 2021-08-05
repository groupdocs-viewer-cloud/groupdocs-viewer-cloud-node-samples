"use strict";

// This example demonstrates how to to filter Lotus Notes database messages
class FilterMailStorage {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.nsf";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.mailStorageOptions = new viewer_cloud.MailStorageOptions();     
        viewOptions.renderOptions.mailStorageOptions.textFilter = "April 2015";
        viewOptions.renderOptions.mailStorageOptions.addressFilter = "test@test.com";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("FilterMailStorage completed: " + response.pages.length);
	}
}
module.exports = FilterMailStorage;
