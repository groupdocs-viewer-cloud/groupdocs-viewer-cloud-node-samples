"use strict";
class Viewer_Node_Create_Document_Cache_Url_With_ImageOptions {
	static Run() {
		var fileUrl = "https://www.dropbox.com/s/umokluz338w4ng7%2fone-page.docx";
		var folderName = null;
		var imageOptions = new groupdocs_viewer_cloud_1.ImageOptions();
		imageOptions.Format = "jpg";
		var wordsOptions = new groupdocs_viewer_cloud_1.WordsOptions();
		imageOptions.wordsOptions = wordsOptions;
		var request = new groupdocs_viewer_cloud_1.ImageCreatePagesCacheFromUrlRequest(fileUrl, imageOptions);
		request.folder = folderName;
		viewerApi.imageCreatePagesCacheFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Document_Cache_Url_With_ImageOptions;