"use strict";
class Viewer_Node_Move_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.MoveFolderRequest("viewerdocs1", "viewerdocs/viewerdocs1", myStorage, myStorage);
		folderApi.moveFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'viewerdocs1' folder moved to 'viewerdocs/viewerdocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Move_Folder;
