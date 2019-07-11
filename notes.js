const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title && note.body === body);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log("Note title taken");
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgRed("No Note Found!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.green("Note Removed!"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title, note.body);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);
  if (findNote) {
    console.log(findNote.title, findNote.body);
  } else {
    console.log("Could not find Note!");
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
