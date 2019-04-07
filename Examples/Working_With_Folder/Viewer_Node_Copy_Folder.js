"use strict";
class Viewer_Node_Copy_Folder {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.CopyFolderRequest("viewerdocs", "viewerdocs1", myStorage, myStorage);
		folderApi.copyFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'viewerdocs' folder copied as 'viewerdocs1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Copy_Folder;
