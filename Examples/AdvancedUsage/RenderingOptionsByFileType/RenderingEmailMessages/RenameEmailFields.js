"use strict";

// This example demonstrates how to use custom field labels
class RenameEmailFields {
	static async Run() {
		let fileInfo = new viewer_cloud.FileInfo();
		fileInfo.filePath = "SampleFiles/sample.msg";
		let viewOptions = new viewer_cloud.ViewOptions();
        viewOptions.fileInfo = fileInfo;
        viewOptions.viewFormat = viewer_cloud.ViewOptions.ViewFormatEnum.HTML;
        viewOptions.renderOptions = new viewer_cloud.HtmlOptions();
        viewOptions.renderOptions.emailOptions = new viewer_cloud.EmailOptions();
        let fieldLabel1 = new viewer_cloud.FieldLabel();
        fieldLabel1.field = "From";
        fieldLabel1.label = "Sender";
        let fieldLabel2 = new viewer_cloud.FieldLabel();
        fieldLabel2.field = "To";
        fieldLabel2.label = "Receiver";        
        viewOptions.renderOptions.emailOptions.fieldLabels = [fieldLabel1, fieldLabel2];

		let request = new viewer_cloud.CreateViewRequest(viewOptions);		
		let response = await viewApi.createView(request);
		console.log("RenameEmailFields completed: " + response.pages.length);
	}
}
module.exports = RenameEmailFields;
