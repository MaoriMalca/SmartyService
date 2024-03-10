const fs = require('fs').promises;

async function parseJsonText(filePath) {
    try {
        let data = await fs.readFile(filePath, 'utf8');
        let jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.error('Failed in JSON parsing:', error);
        throw error;
    }
}

module.exports.parseJsonText = parseJsonText;

function extractInterfaces(priorities) {
    let preferredInterfaces = {};
    for (let property in priorities) {
        if (Array.isArray(priorities[property])) {
            preferredInterfaces[property] = priorities[property][0];
        } else {
            preferredInterfaces[property] = extractInterfaces(priorities[property]);
        }
    }
    return preferredInterfaces;
}

module.exports.extractInterfaces = extractInterfaces;