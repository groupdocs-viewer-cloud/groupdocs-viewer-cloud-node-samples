"use strict";
class Viewer_Node_Delete_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.DeleteFolderRequest("viewerdocs/viewerdocs1", myStorage, true);
		folderApi.deleteFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'viewerdocs/viewerdocs1' folder deleted recursively.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Delete_Folder;
