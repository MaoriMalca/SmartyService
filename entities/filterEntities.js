const getSubEntities = require('./getSubEntities');

function filterEntities(entities, priorities) {
    for (let property in priorities) {
        if (typeof priorities[property] === 'object') {
            let subEntities = getSubEntities(entities, property);
            if (Object.keys(subEntities).length === 0) {
                delete priorities[property];
            } else {
                filterEntities(subEntities, priorities[property]);
            }
        } else if (!entities[priorities[property]][property]) {
            delete priorities[property];
        }
    }
    return priorities;
}

module.exports = filterEntities;