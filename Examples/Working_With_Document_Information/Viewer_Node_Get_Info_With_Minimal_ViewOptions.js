"use strict";
class Viewer_Node_Get_Info_With_Minimal_ViewOptions {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/password-protected.docx";
		fileInfo.password = "password";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

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
module.exports = Viewer_Node_Get_Info_With_Minimal_ViewOptions;
