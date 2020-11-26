"use strict";

global.viewer_cloud = require("groupdocs-viewer-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-viewer-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Viewer Cloud API Examples
//// ***********************************************************

//TODO: Get your Client Id and Client Secret at https://dashboard.groupdocs.cloud (free registration is required).

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new viewer_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct ViewApi
global.viewApi = viewer_cloud.ViewApi.fromConfig(config);

// construct InfoApi
global.infoApi = viewer_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = viewer_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = viewer_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Basic usage Examples

    await require('./BasicUsage/GetSupportedFormats').Run();    
    await require('./BasicUsage/GetDocumentInformation').Run();
    await require('./BasicUsage/GetAttachments').Run();
    await require('./BasicUsage/HtmlViewer/HtmlViewerExcludeFonts').Run();
    await require('./BasicUsage/HtmlViewer/HtmlViewerMinifyHtml').Run();
    await require('./BasicUsage/HtmlViewer/HtmlViewerResponsiveLayout').Run();
    await require('./BasicUsage/ImageViewer/ImageViewerAddTextOverlay').Run();
    await require('./BasicUsage/ImageViewer/ImageViewerAdjustImageSize').Run();
    await require('./BasicUsage/ImageViewer/ImageViewerAdjustJpgQuality').Run();
    await require('./BasicUsage/ImageViewer/ImageViewerGetTextCoordinates').Run();
    await require('./BasicUsage/PdfViewer/PdfViewerAdjustJpgQuality').Run();
    await require('./BasicUsage/PdfViewer/PdfViewerProtectPdf').Run();

    // Advanced usage Examples

    await require('./AdvancedUsage/CommonRenderingOptions/AddWatermark').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/FlipRotatePages').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderComments').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderConsecutivePages').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderHiddenPages').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderNotes').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderSelectedPages').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/RenderWithCustomFonts').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/ReorderPages').Run();
    await require('./AdvancedUsage/CommonRenderingOptions/ReplaceMissingFont').Run();
    await require('./AdvancedUsage/LoadingOptions/SpecifyEncoding').Run();
    await require('./AdvancedUsage/LoadingOptions/ViewProtectedDocument').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingArchiveFiles/GetInfoForArchiveFile').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingArchiveFiles/RenderArchiveFolder').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingCadDrawings/AdjustOutputImageSize').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingCadDrawings/GetInfoForCadDrawing').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingCadDrawings/RenderAllLayouts').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingCadDrawings/RenderLayers').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingCadDrawings/RenderSingleLayout').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingEmailMessages/AdjustPageSize').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingEmailMessages/RenameEmailFields').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingMsProjectDocuments/AdjustTimeUnit').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingMsProjectDocuments/GetInfoForProjectFile').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingMsProjectDocuments/RenderTimeInterval').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingOutlookDataFiles/FilterMessages').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingOutlookDataFiles/GetInfoForOutlookDataFile').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingOutlookDataFiles/LimitCountOfItemsToRender').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingOutlookDataFiles/RenderFolder').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/AdjustImageQuality').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/DisableCharsGrouping').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/EnableFontHinting').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/EnableLayeredRendering').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/GetInfoForPdfFile').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingPdfDocuments/RenderOriginalPageSize').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/AdjustTextOverflowInCells').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/RenderHiddenColumnsAndRows').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/RenderPrintAreas').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/RenderSpreadsheetWithGridLines').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/SkipRenderingOfEmptyColumns').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/SkipRenderingOfEmptyRows').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingSpreadsheets/SplitWorksheetsIntoPages').Run();
    await require('./AdvancedUsage/RenderingOptionsByFileType/RenderingWordProcessingDocuments/RenderTrackedChanges').Run();
}

examples();
