"use strict";
class Viewer_Node_Render_CAD_Tiles {
	static Run() {
		var fileName = "sample.DXF";
		var folderName = "viewerdocs";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		var cadOptions = new groupdocs_viewer_cloud_1.CadOptions();
		htmlOptions.embedResources = true;
		var arrayTiles = Array(new groupdocs_viewer_cloud_1.Tile());
		var tile = new groupdocs_viewer_cloud_1.Tile();
		tile.height = 800;
		tile.width = 1300;
		tile.startPointX = 0;
		tile.startPointY = 0;
		arrayTiles.push(tile);
		tile.height = 800;
		tile.width = 1300;
		tile.startPointX = 1300;
		tile.startPointY = 0;
		arrayTiles.push(tile);
		tile.height = 800;
		tile.width = 1300;
		tile.startPointX = 0;
		tile.startPointY = 800;
		arrayTiles.push(tile);
		tile.height = 800;
		tile.width = 1300;
		tile.startPointX = 130;
		tile.startPointY = 800;
		arrayTiles.push(tile);
		cadOptions.tiles = arrayTiles;
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
module.exports = Viewer_Node_Render_CAD_Tiles;