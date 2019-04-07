"use strict";
class Viewer_Node_Get_Info_With_Image_View_Format {
	static Run(format) {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/one-page.docx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;
		viewOptions.ViewFormat = format;

		var request = new groupdocs_viewer_cloud_1.GetInfoRequest(viewOptions);

		viewerApi.getInfo(request)
			.then(function (response) {
				console.log("Expected response type is InfoResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Info_With_Image_View_Format;
