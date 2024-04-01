"use strict";

// This example demonstrates how to convert and download document without using cloud storage
class ConvertAndDownload {
	static async Run() {
		  
		var format = "jpg";
		let filebuf = fs.readFileSync("./Resources/SampleFiles/sample.docx");

		var request = new ConvertAndDownloadRequest(format, filebuf);
		let response = await viewApi.convertAndDownload(request);

		console.log("ConvertAndDownload completed: " + response.length);
	}
}
module.exports = ConvertAndDownload;
