"use strict";

// This example demonstrates how to specify encoding when rendering documents
class SpecifyEncoding {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/shift_jis_encoded.txt";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.defaultEncoding = "shift_jis";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("SpecifyEncoding completed: " + response.pages.length);
	}
}
module.exports = SpecifyEncoding;
