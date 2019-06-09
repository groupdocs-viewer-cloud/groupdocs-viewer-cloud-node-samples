"use strict";
global.groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-viewer-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Viewer Cloud API Examples
//// ***********************************************************

//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXX-XXXXX-XXXXX";
global.appKey = "XXXXXXXXXX";
global.myStorage = "XXXXX";

// construct ViewApi
global.viewApi = groupdocs_viewer_cloud_1.ViewApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = groupdocs_viewer_cloud_1.InfoApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = groupdocs_viewer_cloud_1.StorageApi.fromKeys(appSid, appKey);

// construct FolderApi
global.folderApi = groupdocs_viewer_cloud_1.FolderApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = groupdocs_viewer_cloud_1.FileApi.fromKeys(appSid, appKey);

// Uploading sample test files from local to storage under folder 'viewers'
console.log("Executing Upload Test Files...");
require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

			//// ***********************************************************
			///// ***** WORKING WITH STORAGE *****
			//// ***********************************************************

//// Is Storage Exist
//require('./Working_With_Storage/Viewer_Node_Storage_Exist').Run();

//// Get Get Disc Usage
//require('./Working_With_Storage/Viewer_Node_Get_Disc_Usage').Run();

//// Get File Versions
//require('./Working_With_Storage/Viewer_Node_Get_File_Versions').Run();

//// Is Object Exists
//require('./Working_With_Storage/Viewer_Node_Object_Exists').Run();


			//// ***********************************************************
			//// ***** WORKING WITH FOLDER *****
			//// ***********************************************************

//// Create Folder
////require('./Working_With_Folder/Viewer_Node_Create_Folder').Run();

//// Copy Folder
////require('./Working_With_Folder/Viewer_Node_Copy_Folder').Run();

//// Move Folder
////require('./Working_With_Folder/Viewer_Node_Move_Folder').Run();

//// Delete Folder
//require('./Working_With_Folder/Viewer_Node_Delete_Folder').Run();

//// Get Files List
//require('./Working_With_Folder/Viewer_Node_Get_Files_List').Run();


			//// ***********************************************************
			//// ***** WORKING WITH FILES *****
			//// ***********************************************************

//// Upload File
//require('./Working_With_Files/Viewer_Node_Upload_File').Run();

//// Copy File
//require('./Working_With_Files/Viewer_Node_Copy_File').Run();

//// Move File
//require('./Working_With_Files/Viewer_Node_Move_File').Run();

//// Delete File
//require('./Working_With_Files/Viewer_Node_Delete_File').Run();

//// Download_File
//require('./Working_With_Files/Viewer_Node_Download_File').Run();


			//// ***********************************************************
			//// ***** WORKING WITH SUPPORTED FORMATS *****
			//// ***********************************************************

// Get All Supported Formats
require('./Supported_File_Formats/Viewer_Node_Get_All_Supported_Formats').Run();

			//// ***********************************************************
			//// ***** WORKING WITH DOCUMENT INFORMATION *****
			//// ***********************************************************

//// Get Document Information With Minimal ViewOptions
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Minimal_ViewOptions').Run();

//// Get Document Information With HTML View Format
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_HTML_View_Format').Run();

//// Get Document Information With Image View Format
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Image_View_Format').Run(groupdocs_viewer_cloud_1.ViewOptions.ViewFormatEnum.Png);

//// Get Document Information With Render Hidden Pages
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Render_Hidden_Pages').Run();

//// Get Document Information With Spreadsheet Options
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_SpreadsheetOptions').Run();

//// Get Document Information With Spreadsheet Render Hidden Rows
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Spreadsheet_Render_Hidden_Rows_Option').Run();

//// Get Document Information With CAD Options
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_CAD_Options').Run();

//// Get Document Information With Project Options
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Project_Options').Run();

//// Get Document Information With Image View Options
//require('./Working_With_Document_Information/Viewer_Node_Get_Info_With_Image_View_Options_Options').Run();

			//// ***********************************************************
			//// ***** WORKING WITH DOCUMENT VIEWS *****
			//// ***********************************************************

//// Create View With Minimal & Default ViewFormat & ViewOptions
//require('./Working_With_View/Viewer_Node_Create_View_With_Minimal_ViewOptions').Run();

//// Create View With HTML View Format
//require('./Working_With_View/Viewer_Node_Create_View_With_HTML_View_Format').Run();

//// Create View With Image View Format
//require('./Working_With_View/Viewer_Node_Create_View_With_Image_View_Format').Run(groupdocs_viewer_cloud_1.ViewOptions.ViewFormatEnum.Png);

//// Create View With Render Hidden Pages
//require('./Working_With_View/Viewer_Node_Create_View_With_Render_Hidden_Pages').Run();

//// Create View With Spreadsheet Options
//require('./Working_With_View/Viewer_Node_Create_View_With_SpreadsheetOptions').Run();

//// Create View With Spreadsheet Render Hidden Rows
//require('./Working_With_View/Viewer_Node_Create_View_With_Spreadsheet_Render_Hidden_Rows_Option').Run();

//// Create View With CAD Options
//require('./Working_With_View/Viewer_Node_Create_View_With_CAD_Options').Run();

//// Create View With Project Options
//require('./Working_With_View/Viewer_Node_Create_View_With_Project_Options').Run();

//// Create View With Fonts Path Options
//require('./Working_With_View/Viewer_Node_Create_View_With_Fonts_Path_Options').Run();

//// Create View With Start Page & To Count Pages
//require('./Working_With_View/Viewer_Node_Create_View_With_StartPage_And_CountPages').Run();

//// Create View With HTML ViewOptions
//require('./Working_With_View/Viewer_Node_Create_View_With_HTML_ViewOptions').Run();

//// Create View With Responsive HTML ViewOptions
//require('./Working_With_View/Viewer_Node_Create_View_With_Responsive_HTML').Run();

//// Create View With Output Path & ViewOptions
//require('./Working_With_View/Viewer_Node_Create_View_With_OutputPath').Run();

			//// ***********************************************************
			//// ***** DELETE VIEWS *****
			//// ***********************************************************

//// Delete View With Default ViewFormat
//require('./Working_With_View/Viewer_Node_Delete_View_With_Default_ViewFormat').Run();
