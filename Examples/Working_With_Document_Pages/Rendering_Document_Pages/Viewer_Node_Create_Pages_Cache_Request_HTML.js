"use strict";
class Viewer_Node_Create_Pages_Cache_Request_HTML {
	static Run() {
		var filePath = "D://sample-one-page.docx";
		var fileName = "sample-one-page.docx";
		var folderName = "viewerdocs";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.EmbedResources = true;
		var json_data = fs.readFileSync(filePath);
		var serialized = serializer_1.Serializer.serialize(json_data, json_data.constructor.name);
		var json = JSON.stringify(serialized, undefined, 2);
		var file_Json_Data = json_data = Buffer(json, "utf-8");
		serialized = serializer_1.Serializer.serialize(htmlOptions, htmlOptions.constructor.name);
		json = JSON.stringify(serialized, undefined, 2);
		var options_Json_Data = json_data = Buffer(json, "utf-8");
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheFromContentRequest(file_Json_Data, options_Json_Data);
		request.folder = folderName;
		viewerApi.htmlCreatePagesCacheFromContent(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Create_Pages_Cache_Request_HTML;