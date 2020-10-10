/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// config.filebrowserBrowseUrl = '/libs/kcfinder/3.12/browse.php?opener=ckeditor&type=files';
	// config.filebrowserImageBrowseUrl = '/libs/kcfinder/3.12/browse.php?opener=ckeditor&type=images';
	// config.filebrowserFlashBrowseUrl = '/libs/kcfinder/3.12/browse.php?opener=ckeditor&type=flash';
	// config.filebrowserUploadUrl = '/libs/kcfinder/3.12/upload.php?opener=ckeditor&type=files';
	// config.filebrowserImageUploadUrl = '/libs/kcfinder/3.12/upload.php?opener=ckeditor&type=images';
	// config.filebrowserFlashUploadUrl = '/libs/kcfinder/3.12/upload.php?opener=ckeditor&type=flash';
	config.resize_enabled 				= false;
	config.filebrowserBrowseUrl         = '/libs/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl    = '/libs/ckfinder/ckfinder.html?type=Images';
    config.filebrowserFlashBrowseUrl    = '/libs/ckfinder/ckfinder.html?type=Flash';
    config.filebrowserUploadUrl         = '/libs/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl    = '/libs/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl    = '/libs/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
};
