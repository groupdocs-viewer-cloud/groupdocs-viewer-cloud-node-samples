"use strict";
class Viewer_Node_Create_View_With_Spreadsheet_Render_Hidden_Rows_Option {
	static Run() {

		var viewOptions = new groupdocs_viewer_cloud_1.ViewOptions();

		var fileInfo = new groupdocs_viewer_cloud_1.FileInfo();
		fileInfo.filePath = "viewerdocs/with-hidden-rows-and-columns.xlsx";
		fileInfo.password = "";
		fileInfo.storageName = myStorage;

		viewOptions.fileInfo = fileInfo;

		var renderOptions = new groupdocs_viewer_cloud_1.RenderOptions();
		var spreadsheetOptions = new groupdocs_viewer_cloud_1.SpreadsheetOptions();
		spreadsheetOptions.aginateSheets = true;
		spreadsheetOptions.countRowsPerPage = 5;
		spreadsheetOptions.renderHiddenRows = true;

		renderOptions.spreadsheetOptions = spreadsheetOptions;
		viewOptions.renderOptions = renderOptions;

		var request = new groupdocs_viewer_cloud_1.CreateViewRequest(viewOptions);

		viewerApi.createView(request)
			.then(function (response) {
				console.log("Expected response type is ViewResult: " + response.pages.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_View_With_Spreadsheet_Render_Hidden_Rows_Option;
