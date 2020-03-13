"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
		viewOptions.fileInfo = fileInfo;
		let request = new viewer_cloud.GetInfoRequest(viewOptions);		

		let response = await infoApi.getInfo(request);
		console.log("GetDocumentInformation completed: " + response.pages.length);
	}
}
module.exports = GetDocumentInformation;
