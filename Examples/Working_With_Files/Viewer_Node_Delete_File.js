"use strict";
class Viewer_Node_Delete_File {
	static Run() {
		var request = new groupdocs_viewer_cloud_1.DeleteFileRequest("viewerdocs1/one-page1.docx", myStorage);
		fileApi.deleteFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'viewerdocs1/one-page1.docx' deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Delete_File;
