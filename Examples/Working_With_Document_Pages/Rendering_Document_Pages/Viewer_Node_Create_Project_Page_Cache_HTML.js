"use strict";
class Viewer_Node_Create_Project_Page_Cache_HTML {
	static Run() {
		var fileName = "sample2.mpp";
		var folderName = "viewerdocs";
		var projectOptions = new groupdocs_viewer_cloud_1.ProjectOptions();
		projectOptions.PageSize = "A4";
		projectOptions.TimeUnit = "Unknown";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.EmbedResources = true;
		htmlOptions.projectOptions = projectOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheRequest(fileName);
		request.folder = folderName;
		request.htmlOptions = htmlOptions;
		viewerApi.htmlCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Project_Page_Cache_HTML;