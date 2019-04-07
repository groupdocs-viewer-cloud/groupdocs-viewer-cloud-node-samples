"use strict";
class Viewer_Node_Get_File_Versions {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.GetFileVersionsRequest("viewerdocs/one-page.docx", myStorage);
		storageApi.getFileVersions(request)
			.then(function (response) {
				console.log("Expected response type is FileVersions: " + response.value.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_File_Versions;
