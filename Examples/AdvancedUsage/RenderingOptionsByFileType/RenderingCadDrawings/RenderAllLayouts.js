"use strict";

// This example demonstrates how to render layouts along with the Model of a CAD drawing
class RenderAllLayouts {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_layers_and_layouts.dwg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.cadOptions = new viewer_cloud.CadOptions();
        viewOptions.renderOptions.cadOptions.renderLayouts = true;

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderAllLayouts completed: " + response.pages.length);
	}
}
module.exports = RenderAllLayouts;
