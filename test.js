"use strict";
var test = require("tape");
var prefixKeys = require("./");

test("prefixes keys", function (t) {
	var original = {
		"foo": "foo"
	};
	var prefix = "bar.";
	var expected = {
		"bar.foo": "foo"
	};

	var result = prefixKeys(prefix, original);

	t.deepEqual(result, expected, "the key got prefixed");

	t.end();
});

test("prefixes multiple keys", function (t) {
	var original = {
		"foo": "foo",
		"baz": "baz"
	};
	var prefix = "bar.";
	var expected = {
		"bar.foo": "foo",
		"bar.baz": "baz"
	};

	var result = prefixKeys(prefix, original);

	t.deepEqual(result, expected, "All keys got prefixed");

	t.end();
});

test("orginal object doesn't get modified", function (t) {
	var original = {
		"foo": "foo"
	};
	var prefix = "bar.";
	var expected = {
		"foo": "foo"
	};

	prefixKeys(prefix, original);

	t.deepEqual(original, expected, "Original still looks the same");

	t.end();
});

test("allows empty prefix", function (t) {
	var original = {
		"foo": "foo"
	};
	var prefix = "";
	var expected = {
		"foo": "foo"
	};

	var result = prefixKeys(prefix, original);

	t.deepEqual(result, expected, "No changes to the keys");

	t.end();
});

test("allows empty objects", function (t) {
	var original = {};
	var prefix = "bar.";

	var expected = {};

	var result = prefixKeys(prefix, original);

	t.deepEqual(result, expected, "Created an empty object");

	t.end();
});
