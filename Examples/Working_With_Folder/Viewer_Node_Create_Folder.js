"use strict";
class Viewer_Node_Create_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.CreateFolderRequest("viewerdocs", myStorage);
		folderApi.createFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'viewerdocs' folder created.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Folder;
