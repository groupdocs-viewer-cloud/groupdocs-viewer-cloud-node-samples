"use strict";

// This example demonstrates how to print out archive contents
class GetInfoForArchiveFile {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/with_folders.zip";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;

		let request = new viewer_cloud.GetInfoRequest(viewOptions);		
        let response = await infoApi.getInfo(request);
        let folders = response.archiveViewInfo.folders;
        for (let i = 0; i < folders.length; i++) {            
            console.log(folders[i]);
        }
		console.log("GetInfoForArchiveFile completed: " + response.pages.length);
	}
}
module.exports = GetInfoForArchiveFile;
