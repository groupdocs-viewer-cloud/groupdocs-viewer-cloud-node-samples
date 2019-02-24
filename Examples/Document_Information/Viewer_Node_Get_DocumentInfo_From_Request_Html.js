"use strict";
class Viewer_Node_Get_DocumentInfo_From_Request_Html {
	static Run() {
		var filePath = "D://sample-one-page.docx";
		var fileName = "one-page.docx";
		var folderName = "viewerdocs";
		var options = new groupdocs_viewer_cloud_1.DocumentInfoOptions();
		options.Password = null;
		var json_data = fs.readFileSync(filePath);
		var serialized = serializer_1.Serializer.serialize(json_data, json_data.constructor.name);
		var json = JSON.stringify(serialized, undefined, 2);
		var file_Json_Data = json_data = Buffer(json, "utf-8");
		serialized = serializer_1.Serializer.serialize(options, options.constructor.name);
		json = JSON.stringify(serialized, undefined, 2);
		var options_Json_Data = json_data = Buffer(json, "utf-8");
		var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheFromContentRequest(file_Json_Data, options_Json_Data);
		request.folder = folderName;
		//request.fileName = fileName;
		viewerApi.htmlCreatePagesCacheFromContent(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_DocumentInfo_From_Request_Html;