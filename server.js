const express = require('express');
const router = require('./routes');
const { parseJsonText, extractInterfaces } = require('./config/configPriorities');

require('dotenv').config();
const prioritiesPath = process.env.PRIORITIES_FILE_PATH;

const serviceApp = express();
serviceApp.use(express.json());

async function startupService() {
    try {
        const priorities = await parseJsonText(prioritiesPath);
        const preferredInterfaces = extractInterfaces(priorities.priorities);

        serviceApp.use('/serviceAPI', router(preferredInterfaces));

        serviceApp.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error(error);
    }
}

startupService();

