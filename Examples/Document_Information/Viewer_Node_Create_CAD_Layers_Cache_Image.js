"use strict";
class Viewer_Node_Create_CAD_Layers_Cache_Image {
	static Run() {
		var fileName = "sample.DXF";
		var folderName = "viewerdocs";
		var cadOptions = new groupdocs_viewer_cloud_1.CadOptions();
		cadOptions.layers = new Array("SLD_0", "DEFAULT_3");
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		imageOptions.format = "jpg";
		imageOptions.quality = 100;
		imageOptions.cadOptions = cadOptions;
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
module.exports = Viewer_Node_Create_CAD_Layers_Cache_Image;