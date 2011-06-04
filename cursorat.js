(function($) {
$.fn.cursorat = function($s, $e) {
	return this.filter('textarea,input').each(function() {
		var _s = $s || 0, _e;
		if (_s === -1) { _s = this.value.length; }

		_e = $e || _s;
		if (_e === -1) { _e = this.value.length; }

		if (this.setSelectionRange) {
			this.focus();
			this.setSelectionRange(_s, _e);
		} else if (this.createTextRange) {
			var _r = this.createTextRange();
			_r.collapse(true);
			_r.moveEnd('character', _e);
			_r.moveStart('character', _s);
			_r.select();
		}
		return true;
	});
};
})(jQuery);
