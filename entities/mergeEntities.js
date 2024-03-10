const getSubEntities = require('./getSubEntities');

function mergeEntities(entities, priorities) {
    let mergeEntity = {};
    for (let property in priorities) {
        if (typeof priorities[property] === 'object') {
            let subEntities = getSubEntities(entities, property);
            mergeEntity[property] = mergeEntities(subEntities, priorities[property]);
        } else {
            mergeEntity[property] = entities[priorities[property]][property];
        }
    }
    return mergeEntity;
}

module.exports = mergeEntities;
