"use strict";
class Viewer_Node_Render_Hidden_Rows {
	static Run() {
		var fileName = "with-overflowed-text.xlsx";
		var folderName = "viewerdocs";
		var cellsOptions = new groupdocs_viewer_cloud_1.CellsOptions();
		cellsOptions.RenderHiddenRows = true;
		cellsOptions.RenderHiddenColumns;
		true;
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.cellsOptions = cellsOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheRequest(fileName);
		request.folder = fileName;
		request.htmlOptions = htmlOptions;
		viewerApi.htmlCreatePagesCache(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Render_Hidden_Rows;