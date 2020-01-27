const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../config.xml');
const oldContents = fs.readFileSync(filePath).toString();

function bumpSemver(match, widget, semver, major, minor, patch) {
    patch = parseInt(patch);
    semver = semver.replace(/\d+$/, patch + 1);
    console.log(`New version: ${semver}`);
    return `${widget}${semver}"`;
}

const newContents = oldContents.replace(/(<widget[^>]*version=")((\d+)\.(\d+)\.(\d+))"/, bumpSemver);

fs.writeFileSync(filePath, newContents);
