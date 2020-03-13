"use strict";

// This example demonstrates how to adjust output page size
class AdjustPageSize {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.msg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PDF;
        viewOptions.renderOptions = new viewer_cloud.PdfOptions();
        viewOptions.renderOptions.emailOptions = new viewer_cloud.EmailOptions();
        viewOptions.renderOptions.emailOptions.pageSize = viewer_cloud.EmailOptions.PageSizeEnum.A4;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("AdjustPageSize completed: " + response.file.path);
	}
}
module.exports = AdjustPageSize;
