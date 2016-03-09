"use strict";
module.exports = prefixKeys;

function prefixKeys(prefix, object) {
	return Object.keys(object).reduce(function (result, key) {
		result[prefix + key] = object[key];
		return result;
	}, {});
}
