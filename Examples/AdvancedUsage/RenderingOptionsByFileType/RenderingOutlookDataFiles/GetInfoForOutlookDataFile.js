"use strict";

// This example demonstrates how to retrieve view information for outlook data file
class GetInfoForOutlookDataFile {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.ost";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;        

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        console.log(" Folders count: " + response.outlookViewInfo.folders.length);
		console.log("GetInfoForOutlookDataFile completed: " + response.pages.length);
	}
}
module.exports = GetInfoForOutlookDataFile;
