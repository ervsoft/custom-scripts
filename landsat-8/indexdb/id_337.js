//VERSION=3
// Simple Ratio 1650/2218  (abbrv. TM5/TM7)
//
// General formula: 1650nm/2218nm
// This is an auto-generated script. Double checking with the URL below is recommended.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=168&rsindex_id=337

let index = B06 / B07;
let min = 0.059;
let max = 17.498;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

var underflow_color = [1, 1, 1];
var low_color = [208/255, 88/255, 126/255];
var high_color = [241/255, 234/255, 200/255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);
