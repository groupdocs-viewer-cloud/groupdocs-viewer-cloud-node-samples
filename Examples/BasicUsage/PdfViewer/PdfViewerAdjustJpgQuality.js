"use strict";

// This example demonstrates how to adjust JPG image quality in the output PDF document
class PdfViewerAdjustJpgQuality {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_jpg_image.pptx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PDF;
        viewOptions.renderOptions = new viewer_cloud.PdfOptions();
		viewOptions.renderOptions.pdfOptimizationOptions = new viewer_cloud.PdfOptimizationOptions();
		viewOptions.renderOptions.pdfOptimizationOptions.compressImages = true;
		viewOptions.renderOptions.pdfOptimizationOptions.imageQuality = 80;			  
		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("PdfViewerAdjustJpgQuality completed: " + response.file.path);
	}
}
module.exports = PdfViewerAdjustJpgQuality;
