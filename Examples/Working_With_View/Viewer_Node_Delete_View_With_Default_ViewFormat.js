"use strict";
class Viewer_Node_Delete_View_With_Default_ViewFormat {
	static Run() {

		var deleteViewOptions = new groupdocs_viewer_cloud_1.DeleteViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/one-page.docx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		deleteViewOptions.fileInfo = fileInfo;

		var request = new groupdocs_viewer_cloud_1.DeleteViewRequest(deleteViewOptions);

		viewerApi.deleteView(request)
			.then(function (response) {
				console.log("Expected response type is Void: View deleted with default View Format.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Delete_View_With_Default_ViewFormat;
