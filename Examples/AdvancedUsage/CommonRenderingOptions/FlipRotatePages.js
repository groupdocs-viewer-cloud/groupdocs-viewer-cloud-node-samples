"use strict";

// This example demonstrates how to rotate output pages when viewing a document as PDF
class FlipRotatePages {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.docx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PDF;
        viewOptions.renderOptions = new viewer_cloud.PdfOptions();
        let pageRotation = new viewer_cloud.PageRotation();
        pageRotation.pageNumber = 1;
        pageRotation.rotationAngle = viewer_cloud.PageRotation.RotationAngleEnum.On90Degree;
        viewOptions.renderOptions.pageRotations = [pageRotation];

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("FlipRotatePages completed: " + response.file.path);
	}
}
module.exports = FlipRotatePages;
