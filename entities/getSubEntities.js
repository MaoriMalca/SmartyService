function getSubEntities(entities, property) {
    let subEntities = {};
    for (let interface in entities) {
        if (entities[interface][property]) {
            subEntities[interface] = entities[interface][property];
        }
    }
    return subEntities;
}

module.exports = getSubEntities;