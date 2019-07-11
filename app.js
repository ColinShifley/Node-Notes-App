var notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");

// customize yargs version
yargs.version("1.1.0");

// Create - Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Add a body to the Note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create - Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demand: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create - List Notes
yargs.command({
  command: "list",
  describe: "Lists out current notes",
  handler(argv) {
    notes.listNotes();
  }
});

// Create - Read Notes
yargs.command({
  command: "read",
  describe: "Reading Notes",
  builder: {
    title: {
      describe: "Note Title",
      demand: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// add, remove, read, list

yargs.parse();
