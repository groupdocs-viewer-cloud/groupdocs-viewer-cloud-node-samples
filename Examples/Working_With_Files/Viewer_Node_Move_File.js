"use strict";
class Viewer_Node_Move_File {
	static Run() {
		var request = new groupdocs_viewer_cloud_1.MoveFileRequest("viewerdocs/one-page1.docx", "viewerdocs1/one-page1.docx", myStorage, myStorage);
		fileApi.moveFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'viewerdocs/one-page1.docx' file moved to 'viewerdocs1/one-page1.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Move_File;
