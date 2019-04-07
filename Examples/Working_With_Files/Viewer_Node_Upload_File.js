"use strict";
class Viewer_Node_Upload_File {
	static Run() {

		// Open file in IOStream from local/disc.
		var resourcesFolder = './Resources/viewerdocs/one-page.docx';
		fs.readFile(resourcesFolder, (err, fileStream) => {

			var request = new groupdocs_viewer_cloud_1.UploadFileRequest("viewerdocs/one-page1.docx", fileStream, myStorage);
			fileApi.uploadFile(request)
				.then(function (response) {
					console.log("Expected response type is FilesUploadResult: " + response.uploaded.length);
				})
				.catch(function (error) {
					console.log("Error: " + error.message);
				});
		});
	}
}
module.exports = Viewer_Node_Upload_File;
