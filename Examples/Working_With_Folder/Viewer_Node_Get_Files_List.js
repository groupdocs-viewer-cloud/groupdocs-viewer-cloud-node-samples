"use strict";
class Viewer_Node_Get_Files_List {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.GetFilesListRequest("viewerdocs/sample.docx", myStorage);
		folderApi.getFilesList(request)
			.then(function (response) {
				console.log("Expected response type is FilesList: " + response.value.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Files_List;
