"use strict";

// This example demonstrates how to retrieve view information for pdf file
class GetInfoForPdfFile {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.pdf";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;        

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        console.log(" PrintingAllowed: " + response.pdfViewInfo.printingAllowed);
		console.log("GetInfoForPdfFile completed: " + response.pages.length);
	}
}
module.exports = GetInfoForPdfFile;
