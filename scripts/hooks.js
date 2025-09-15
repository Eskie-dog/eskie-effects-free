import { DATABASE_TAG} from './settings.js';
import { moduleFolder } from './settings.js';
import { database } from './sequencer-database.js';
import { createDatabase } from './sequencer-database.js';

Hooks.once('init', async function () {
  await createDatabase(moduleFolder);
});

Hooks.on('sequencerReady', () => {
  Sequencer.Database.registerEntries(`${DATABASE_TAG}`, database);
});