"use strict";

// This example demonstrates how to render password-protected documents
class ViewProtectedDocument {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
        fileInfo.filePath = "SampleFiles/password_protected.docx";
        fileInfo.password = "12345";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("ViewProtectedDocument completed: " + response.pages.length);
	}
}
module.exports = ViewProtectedDocument;
