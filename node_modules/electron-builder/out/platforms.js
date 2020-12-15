"use strict";

const mapping = {
    osx: "../lib/osx",
    win: "../lib/win",
    win32: "../lib/win",
    linux: "../lib/linux"
};
module.exports = function (platform) {
    const result = mapping[platform];
    if (result == null) {
        throw new Error(`Building for ${ platform } is not supported`);
    }
    return require(result);
};
//# sourceMappingURL=platforms.js.map