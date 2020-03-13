"use strict";

// This example demonstrates how to retrieve view information for MS Project document
class GetInfoForProjectFile {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.mpp";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;        

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        console.log(" Start date: " + response.projectManagementViewInfo.startDate);
        console.log(" End date: " + response.projectManagementViewInfo.endDate);
		console.log("GetInfoForProjectFile completed: " + response.pages.length);
	}
}
module.exports = GetInfoForProjectFile;
