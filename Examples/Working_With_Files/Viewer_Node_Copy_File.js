"use strict";
class Viewer_Node_Copy_File {
	static Run() {
		var request = new groupdocs_viewer_cloud_1.CopyFileRequest("viewerdocs/one-page1.docx", "viewerdocs/one-page-copied.docx", myStorage, myStorage);
		fileApi.copyFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'viewerdocs/one-page1.docx' file copied as 'viewerdocs/one-page-copied.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Copy_File;
