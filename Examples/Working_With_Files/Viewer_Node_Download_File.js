"use strict";
class Viewer_Node_Download_File {
	static Run() {
		var request = new groupdocs_viewer_cloud_1.DownloadFileRequest("viewerdocs/one-page.docx", myStorage);
		fileApi.downloadFile(request)
			.then(function (response) {
				console.log("Expected response type is Stream: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Download_File;
