"use strict";
class Viewer_Node_Get_Pages_URL_Image {
	static Run() {
		var fileUrl = "https://www.dropbox.com/s/umokluz338w4ng7%2fone-page.docx";
		var folderName = null;
		var format = "jpg";
		var request = new groupdocs_viewer_cloud_1.ImageGetPagesFromUrlRequest(fileUrl);
		request.folder = folderName;
		request.format = format;
		viewerApi.imageGetPagesFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Pages_URL_Image;