"use strict";
class Utils {
	static Upload_Test_File() {
		var storageApi = new StorageApi({
			appSid: appSid,
			apiKey: appKey,
			baseURI: "https://api.groupdocs.cloud/v1"
		});

		var resourcesFolder = './Resources/Viewerdocs/';

		fs.readdir(resourcesFolder, (err, files) => {
			files.forEach(file => {
				storageApi.GetIsExist(file, null, null, (existResponse) => {
					if (existResponse.body.fileExist.isExist === false) {
						storageApi.PutCreate(file, null, null, srcFilePath, (createResponse) => {
							if (createResponse.status === "OK") {
								console.log("Uploaded: " + file);
							} else {
								console.log("ELSE: " + createResponse);
							}
						});
					}
					else {
						console.log("File already exists: " + file);
					}
				});
			});
		});
	}
}
module.exports = Utils;