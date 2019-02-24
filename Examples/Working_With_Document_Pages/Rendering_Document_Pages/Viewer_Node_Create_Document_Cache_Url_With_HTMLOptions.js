"use strict";
class Viewer_Node_Create_Document_Cache_Url_With_HTMLOptions {
	static Run() {
		var fileUrl = "https://www.dropbox.com/s/umokluz338w4ng7%2fone-page.docx";
		var folderName = null;
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.EmbedResources = true;
		var wordsOptions = new groupdocs_viewer_cloud_1.WordsOptions();
		htmlOptions.wordsOptions = wordsOptions;
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheFromUrlRequest(fileUrl, htmlOptions);
		request.folder = folderName;
		viewerApi.htmlCreatePagesCacheFromUrl(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Document_Cache_Url_With_HTMLOptions;