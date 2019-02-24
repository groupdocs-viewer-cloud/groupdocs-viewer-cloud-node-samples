"use strict";
global.groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
global.StorageApi = require("asposestoragecloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-viewer-cloud/lib/serializer");

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// REPLACE YOUR APP KEY AND APP SID HERE /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get your app_sid and app_key at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "xxxxx-xxxx";
global.appKey = "xxxxxx";

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// construct ViewerApi
global.viewerApi = groupdocs_viewer_cloud_1.ViewerApi.fromKeys(appSid, appKey);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Executing Upload Test Files...");
require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

require('./Supported_File_Formats/Viewer_Node_Get_All_Supported_Formats').Run();
//require('./Working_With_Attachments/Attachments/Viewer_Node_Get_Attachment_From_Email_HTML').Run();
//require('./Working_With_Attachments/Attachments/Viewer_Node_Get_Attachment_From_Email_Image').Run();
//require('./Working_With_Attachments/Attachments/Viewer_Node_Get_Attachments_Html').Run();
//require('./Working_With_Attachments/Attachments/Viewer_Node_Get_Attachments_Image').Run();
////require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Attachment_Info_HTML').Run();
//require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Attachment_Info_Image').Run();
//require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Attachment_Info_WithOptions_HTML').Run();
//require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Attachment_Info_WithOptions_Image').Run();
//require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Document_Info_WithOptions_URL_HTML').Run();
//require('./Working_With_Attachments/Attachment_Information/Viewer_Node_Get_Document_Info_WithOptions_URL_Image').Run();
////require('./Working_With_Attachments/Attachment_Page_Resources/Viewer_Node_Get_Attachment_Page_Resource_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Create_Attachment_Pages_Cache_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Create_Attachment_Pages_Cache_Image').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Delete_Attachment_Pages_Cache_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Delete_Attachment_Pages_Cache_Image').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Page_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Page_Image').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Pages_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Pages_Image').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Pages_Zip_HTML').Run();
//require('./Working_With_Attachments/Attachment_Pages/Viewer_Node_Get_Attachment_Pages_Zip_Image').Run();
//require('./Fonts_Resource/Viewer_Node_Get_Fonts_Resources').Run();
//require('./Fonts_Resource/Viewer_Node_Delete_Fonts_Resources').Run();
//require('./Page_Resources/Viewer_Node_Get_Responsive_HTML').Run();
////require('./Document_Information/Viewer_Node_Create_CAD_Layers_Cache_HTML').Run();
////require('./Document_Information/Viewer_Node_Create_CAD_Layers_Cache_Image').Run();
////require('./Document_Information/Viewer_Node_Get_CAD_DocumentInfo_Html').Run();
////require('./Document_Information/Viewer_Node_Get_CAD_DocumentInfo_Image').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_HTML').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_Image').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_URL_HTML').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_URL_Image').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_With_Options_HTML').Run();
//require('./Document_Information/Viewer_Node_Get_Document_Info_With_Options_Image').Run();
////require('./Document_Information/Viewer_Node_Get_DocumentInfo_From_Request_Html').Run();
////require('./Document_Information/Viewer_Node_Get_DocumentInfo_From_Request_Image').Run();
//require('./PDF_Rendering/Viewer_Node_Create_Pdf_File_from_Url_HTML').Run();
//require('./PDF_Rendering/Viewer_Node_Create_Pdf_File_from_Url_Image').Run();
////require('./PDF_Rendering/Viewer_Node_Create_Pdf_File_Request_HTML').Run();
////require('./PDF_Rendering/Viewer_Node_Create_Pdf_File_Request_Image').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Pdf_File_from_Url_HTML').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Pdf_File_from_Url_Image').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Pdf_File_HTML').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Pdf_File_Image').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Watermark_Pdf_File_HTML').Run();
//require('./PDF_Rendering/Viewer_Node_Get_Watermark_Pdf_File_Image').Run();
//require('./Working_With_Document_Pages/Minification_Of_HTML_And_SVG/Viewer_Node_Create_Pages_Cache_Minified_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_To_Responsive_HTML/Viewer_Node_Get_Responsive_HTML_Options').Run();
//require('./Working_With_Document_Pages/Rendering_Email_Pages/Viewer_Node_Render_Email_Header').Run();
//require('./Working_With_Document_Pages/Rendering_Email_Pages/Viewer_Node_Render_Email_Image_PageSize').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Document_Cache_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Document_Cache_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Document_Cache_Url_With_HTMLOptions').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Document_Cache_Url_With_ImageOptions').Run();
////require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Pages_Cache_Request_HTML').Run();
////require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Pages_Cache_Request_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Project_Page_Cache_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Create_Project_Page_Cache_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Download_Document_Page_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Download_Document_Page_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Exclude_Fonts').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_Pages_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_Pages_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_Pages_URL_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_Pages_URL_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_ZIP_With_Pages_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Get_ZIP_With_Pages_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Remove_Document_Cache_for_HTML_Pages').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Remove_Document_Cache_for_Image_Pages').Run();
////require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Render_CAD_Tiles').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Render_Hidden_Rows').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Render_PDF_DefaultFont').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Render_PrintArea_Only').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Reorder_Page_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Reorder_Page_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Rotate_Page_HTML').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Rotate_Page_Image').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Set_Image_Quality').Run();
//require('./Working_With_Document_Pages/Rendering_Document_Pages/Viewer_Node_Text_Overflow_Mode').Run();
