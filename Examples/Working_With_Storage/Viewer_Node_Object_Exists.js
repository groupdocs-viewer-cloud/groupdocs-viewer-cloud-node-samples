"use strict";
class Viewer_Node_Object_Exists {
	static Run() {
		// retrieve supported file-formats
		var request = new groupdocs_viewer_cloud_1.ObjectExistsRequest("viewerdocs/one-page.docx", myStorage);
		storageApi.objectExists(request)
			.then(function (response) {
				console.log("Expected response type is ObjectExist: " + response.exists);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Object_Exists;
