"use strict";

// This example demonstrates how to render a specific layer of a CAD drawing
class RenderLayers {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_layers_and_layouts.dwg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.cadOptions = new viewer_cloud.CadOptions();
        viewOptions.renderOptions.cadOptions.layers = ["TRIANGLE", "QUADRANT"];

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderLayers completed: " + response.pages.length);
	}
}
module.exports = RenderLayers;
