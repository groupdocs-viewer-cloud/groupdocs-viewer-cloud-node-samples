"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new viewer_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new viewer_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("Fonts/terminal-grotesque_open.otf");
		await this.UploadTestFile("SampleFiles/password_protected.docx");
		await this.UploadTestFile("SampleFiles/sample.docx");
		await this.UploadTestFile("SampleFiles/sample.mpp");
		await this.UploadTestFile("SampleFiles/sample.msg");
		await this.UploadTestFile("SampleFiles/sample.ost");
		await this.UploadTestFile("SampleFiles/sample.pdf");
		await this.UploadTestFile("SampleFiles/sample.xlsx");
		await this.UploadTestFile("SampleFiles/sample.jpg");
		await this.UploadTestFile("SampleFiles/sample.txt");
		await this.UploadTestFile("SampleFiles/sample.nsf");
		await this.UploadTestFile("SampleFiles/sample.vssx");
		await this.UploadTestFile("SampleFiles/shift_jis_encoded.txt");
		await this.UploadTestFile("SampleFiles/with_attachments.msg");
		await this.UploadTestFile("SampleFiles/with_comment.docx");
		await this.UploadTestFile("SampleFiles/with_empty_column.xlsx");
		await this.UploadTestFile("SampleFiles/with_empty_row.xlsx");
		await this.UploadTestFile("SampleFiles/with_external_image.doc");
		await this.UploadTestFile("SampleFiles/with_folders.zip");
		await this.UploadTestFile("SampleFiles/with_four_print_areas.xlsx");
		await this.UploadTestFile("SampleFiles/with_hidden_page.pptx");
		await this.UploadTestFile("SampleFiles/with_hidden_row_and_column.xlsx");
		await this.UploadTestFile("SampleFiles/with_jpg_image.pptx");
		await this.UploadTestFile("SampleFiles/with_layers_and_layouts.dwg");
		await this.UploadTestFile("SampleFiles/with_missing_font.odg");
		await this.UploadTestFile("SampleFiles/with_missing_font.pptx");
		await this.UploadTestFile("SampleFiles/with_notes.pptx");
		await this.UploadTestFile("SampleFiles/with_overflowing_text.xlsx");
		await this.UploadTestFile("SampleFiles/with_tracked_changes.docx");
	}	
}

module.exports = Utils;
