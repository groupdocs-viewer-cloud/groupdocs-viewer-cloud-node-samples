"use strict";
class Viewer_Node_Create_Project_Page_Cache_Image {
	static Run() {
		var fileName = "sample2.mpp";
		var folderName = "viewerdocs";
		var projectOptions = new groupdocs_viewer_cloud_1.ProjectOptions();
		projectOptions.PageSize = "A4";
		projectOptions.TimeUnit = "Unknown";
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		imageOptions.Format = "jpg";
		imageOptions.Quality = 100;
		imageOptions.projectOptions = projectOptions;
		var request = new groupdocs_viewer_cloud_1.ImageCreatePagesCacheRequest(fileName);
		request.folder = folderName;
		request.imageOptions = imageOptions;
		viewerApi.imageCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Project_Page_Cache_Image;