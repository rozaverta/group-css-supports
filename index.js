
var parseCss = require('css-parse');
var stringifyCss = require('css-stringify');

function merger(ref, level)
{
	var rules = [], i, len, rule, supports = {};

	for (i = 0, len = ref.length; i < len; i++) {
		rule = ref[i];
		if (rule.type === 'supports') {
			if (!supports[rule.supports]) {
				supports[rule.supports] = [];
			}
			supports[rule.supports] = supports[rule.supports].concat(rule.rules);
		}
		else {
			if (rule.type === 'media' && level < 2) {
				rule.rules = merger(rule.rules, level + 1)
			}
			rules.push(rule);
		}
	}

	Object.keys(supports).forEach(function(key) {
		rules.push({
			type: "supports",
			supports: key,
			rules: supports[key]
		})
	});

	return rules;
}

module.exports = function (css) {
	var parsed = parseCss(css);
	parsed.stylesheet.rules = merger(parsed.stylesheet.rules, 0);
	return stringifyCss(parsed);
};
