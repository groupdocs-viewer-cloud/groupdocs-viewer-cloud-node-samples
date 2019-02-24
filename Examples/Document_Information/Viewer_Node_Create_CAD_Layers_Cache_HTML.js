"use strict";
class Viewer_Node_Create_CAD_Layers_Cache_HTML {
	static Run() {
		var fileName = "sample.DXF";
		var folderName = "viewerdocs";
		var cadOptions = new groupdocs_viewer_cloud_1.CadOptions();
		cadOptions.layers = Array("SLD-0", "DEFAULT_3");
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.embedResources = true;
		htmlOptions.cadOptions = cadOptions;
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
module.exports = Viewer_Node_Create_CAD_Layers_Cache_HTML;