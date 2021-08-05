"use strict";

// This example demonstrates how to render Visio documents figures
class RenderVisioDocumentFigures {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.vssx";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.PNG;
        viewOptions.renderOptions = new viewer_cloud.ImageOptions();
        viewOptions.renderOptions.visioRenderingOptions = new viewer_cloud.VisioRenderingOptions();
		viewOptions.renderOptions.visioRenderingOptions.renderFiguresOnly = true;
		viewOptions.renderOptions.visioRenderingOptions.figureWidth = 250;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderVisioDocumentFigures completed: " + response.pages.length);
	}
}
module.exports = RenderVisioDocumentFigures;
