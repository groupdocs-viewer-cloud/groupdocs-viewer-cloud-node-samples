"use strict";

// This example demonstrates how to retrieve view information for CAD drawing
class GetInfoForCadDrawing {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_layers_and_layouts.dwg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;        

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        console.log(" Layers count: " + response.cadViewInfo.layers.length);
        console.log(" Layouts count: " + response.cadViewInfo.layouts.length);
		console.log("GetInfoForCadDrawing completed: " + response.pages.length);
	}
}
module.exports = GetInfoForCadDrawing;
