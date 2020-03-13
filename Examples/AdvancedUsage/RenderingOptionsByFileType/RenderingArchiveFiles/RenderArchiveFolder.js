"use strict";

// This example demonstrates how to print out archive contents
class RenderArchiveFolder {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_folders.zip";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.archiveOptions = new viewer_cloud.ArchiveOptions();
        viewOptions.renderOptions.archiveOptions.folder = "ThirdFolderWithItems";

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenderArchiveFolder completed: " + response.pages.length);
	}
}
module.exports = RenderArchiveFolder;
