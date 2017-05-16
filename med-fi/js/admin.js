$(document).ready(function() {

	// Semantic UI
	$('.menu .item').tab();
	$('.ui.checkbox').checkbox();
	$('.ui.selection.dropdown').dropdown();
	$('.special.cards .image').dimmer({
		on: 'hover'
	});

	// Froala Editor
	$.FroalaEditor.ICON_DEFAULT_TEMPLATE = 'semantic_ui';
	$.FroalaEditor.DefineIconTemplate( 'semantic_ui', '<i class="[NAME] icon"></i>');
	$.FroalaEditor.DefineIcon( 'color', { NAME: 'theme' } ); // tint
	$.FroalaEditor.DefineIcon( 'undo', { NAME: 'undo' } ); // rotate-left
	$.FroalaEditor.DefineIcon( 'redo', { NAME: 'repeat' } ); // rotate-right
	$.FroalaEditor.DefineIcon( 'clearFormatting', { NAME: 'erase' } ); // eraser
	$.FroalaEditor.DefineIcon( 'selectAll', { NAME: 'move' } ); // mouse-pointer NA in SUI yet
	$.FroalaEditor.DefineIcon( 'align', { NAME: 'align left' } ); // align-left
	$.FroalaEditor.DefineIcon( 'align-left', { NAME: 'align left' } ); // align-left
	$.FroalaEditor.DefineIcon( 'align-right', { NAME: 'align right' } ); // align-right
	$.FroalaEditor.DefineIcon( 'align-center', { NAME: 'align center' } ); // align-center
	$.FroalaEditor.DefineIcon( 'align-justify', { NAME: 'align justify' } ); // align-justify
	$.FroalaEditor.DefineIcon( 'colors', { NAME: 'theme' } ); // tint
	$.FroalaEditor.DefineIcon( 'colorsBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'emoticons', { NAME: 'smile' } ); // smile-o
	$.FroalaEditor.DefineIcon( 'emoticonsBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'insertFile', { NAME: 'file outline' } ); // file-outline
	$.FroalaEditor.DefineIcon( 'fileBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'fontSize', { NAME: 'text height' } ); // text-height
	$.FroalaEditor.DefineIcon( 'insertImage', { NAME: 'picture' } ); // picture-o
	$.FroalaEditor.DefineIcon( 'imageByURL', { NAME: 'linkify' } ); // link
	$.FroalaEditor.DefineIcon( 'imageAlign', { NAME: 'align center' } ); // align-center
	$.FroalaEditor.DefineIcon( 'imageBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'imageStyle', { NAME: 'wizard' } ); // magic
	$.FroalaEditor.DefineIcon( 'imageSize', { NAME: 'maximize' } ); // arrows-alt
	$.FroalaEditor.DefineIcon( 'imageManager', { NAME: 'folder' } ); // fa fa-folder (bug?)
	$.FroalaEditor.DefineIcon( 'inlineStyle', { NAME: 'paint brush' } ); // paint-brush
	$.FroalaEditor.DefineIcon( 'insertLink', { NAME: 'linkify' } ); // link
	$.FroalaEditor.DefineIcon( 'linkOpen', { NAME: 'external' } ); // external-link
	$.FroalaEditor.DefineIcon( 'linkBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'imageLink', { NAME: 'linkify' } ); // link
	$.FroalaEditor.DefineIcon( 'linkStyle', { NAME: 'wizard' } ); // magic
	$.FroalaEditor.DefineIcon( 'formatUL', { NAME: 'unordered list' } ); // list-ul
	$.FroalaEditor.DefineIcon( 'formatOL', { NAME: 'ordered list' } ); // list-ol
	$.FroalaEditor.DefineIcon( 'paragraphStyle', { NAME: 'wizard' } ); // magic
	$.FroalaEditor.DefineIcon( 'quote', { NAME: 'quote left' } ); // quote-left
	$.FroalaEditor.DefineIcon( 'save', { NAME: 'save' } ); // floppy-o
	$.FroalaEditor.DefineIcon( 'tableRows', { NAME: 'sidebar' } ); // bars
	$.FroalaEditor.DefineIcon( 'tableColumns', { NAME: 'clockwise rotated sidebar' } ); // bars fa-rotate-90
	$.FroalaEditor.DefineIcon( 'tableCells', { NAME: 'square outline' } ); // square-o
	$.FroalaEditor.DefineIcon( 'tableStyle', { NAME: 'paint brush' } ); // paint-brush
	$.FroalaEditor.DefineIcon( 'tableCellBackground', { NAME: 'theme' } ); // tint
	$.FroalaEditor.DefineIcon( 'tableBack', { NAME: 'arrow left' } ); // arrow-left
	$.FroalaEditor.DefineIcon( 'tableCellVerticalAlign', { NAME: 'resize vertical' } ); // arrows-v
	$.FroalaEditor.DefineIcon( 'tableCellHorizontalAlign', { NAME: 'align left' } ); // align-left
	$.FroalaEditor.DefineIcon( 'tableCellStyle', { NAME: 'wizard' } ); // magic
	$.FroalaEditor.DefineIcon( 'insertVideo', { NAME: 'record' } ); // video-camera
	$.FroalaEditor.DefineIcon( 'videoByURL', { NAME: 'linkify' } ); // link
	$.FroalaEditor.DefineIcon( 'videoAlign', { NAME: 'align center' } ); // align-center
	$.FroalaEditor.DefineIcon( 'videoSize', { NAME: 'maximize' } ); // arrows-alt
	$.FroalaEditor.DefineIcon( 'videoBack', { NAME: 'arrow left' } ); // arrow-left

	$('.froala').froalaEditor({
		heightMin: 200,
		placeholderText: '',
		toolbarButtons: ['undo', 'redo' , '|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html']
	});

});
