"use strict";

// This example demonstrates how to  to set custom font source when rendering documents
class RenderWithCustomFonts {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_missing_font.odg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        // NOTE: Upload fonts to the folder using storage API before rendering
        viewOptions.fontsPath = "Fonts";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderWithCustomFonts completed: " + response.pages.length);
	}
}
module.exports = RenderWithCustomFonts;
