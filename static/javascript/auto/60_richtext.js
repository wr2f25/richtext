var initTinyMCE = function(id){
	// Remove any old tinymce instance with this id (e.g. in AJAX context)
	tinymce.remove(id);
	tinymce.init({
		selector: id,
		height: 500,
		width: 700,
		menubar: false,
		relative_url: false,
		remove_script_host: false,
		toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu paste code'
		],
	});
};

// For multiple fields
function initMultipleTinyMCEs(basename) {
	for( let i = 1; i <= document.getElementById(basename + '_spaces').value; i++ ) {
		if (document.readyState == 'loading') {
			// If the document is loading (aka the initial creation) then we
			// want to only create the tinyMCE once the document has finished
			// loading, as we do with non-multiple fields.
			document.addEventListener('DOMContentLoaded', (_) => {
				initTinyMCE('#' + basename + '_' + i);
			});
		} else {
			// If the document isn't loading then this is probably an AJAX
			// refresh so we want to delay it to the end of the event cycle
			// with a 0ms timeout as otherwise it will only sometimes load
			// after its required theme information.
			setTimeout(() => { initTinyMCE('#' + basename + '_' + i); }, 0);
		}
	}
}
