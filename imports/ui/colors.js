import lodash from 'lodash';

import colors from './colors.scss';


// parse the style sheet manually
const exportPart = colors.innerHTML
				.split(':export {')[1].split('}')[0]
				.replace(/^ +/gm, '') // remove leading spaces
				.replace(/\:\s/g,':') // remove spaces after ':'
				.replace(/(\r\n|\n|\r)/gm, '') // remove newlines
				.split(';');

// create a new empty object for the colors
const colorsObj = {};

// iterate over each color and convert each css into a key value pairs
for (let i = 0; i < exportPart.length; i++) {
	aColor = exportPart[i].split(':');
    colorsObj[aColor[0]] = aColor[1];
}

const colorKeys = lodash
    .chain(colorsObj)
    .keys()
    .filter((colorKey) => (
        colorKey.indexOf('bg-') === -1 &&
        colorKey.indexOf('fg-') === -1
    ))
    .value();

export default lodash.pick(colorsObj, colorKeys);