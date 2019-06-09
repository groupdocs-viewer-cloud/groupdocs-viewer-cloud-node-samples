"use strict";
class Viewer_Node_Create_View_With_Project_Options {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/sample.mpp";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

		var renderOptions = new groupdocs_viewer_cloud_1.RenderOptions();
		var projectManagementOptions = new groupdocs_viewer_cloud_1.ProjectManagementOptions();
		projectManagementOptions.pageSize = "Unknown";
		projectManagementOptions.timeUnit = "Months";
		projectManagementOptions.startDate = new Date("2008/07/01");
		projectManagementOptions.endDate = new Date("2008/07/31");

		renderOptions.projectManagementOptions = projectManagementOptions;
		viewOptions.renderOptions = renderOptions;

		var request = new groupdocs_viewer_cloud_1.CreateViewRequest(viewOptions);

		viewApi.createView(request)
			.then(function (response) {
				console.log("Expected response type is ViewResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_View_With_Project_Options;
