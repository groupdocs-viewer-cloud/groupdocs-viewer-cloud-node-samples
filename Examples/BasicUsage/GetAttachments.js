"use strict";

// This example demonstrates how get attachments
class GetAttachments {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_attachments.msg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PNG;
		let request = new viewer_cloud.CreateViewRequest(viewOptions);		

		let response = await viewApi.createView(request);
		console.log("GetAttachments completed: " + response.attachments.length);
	}
}
module.exports = GetAttachments;
