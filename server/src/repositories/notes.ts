import ToDoNoteModel from "@models/ToDoNoteModel";

export const createNewNote = async (note: string) => {
  const newNoteData = new ToDoNoteModel({
    note,
  });

  console.log(newNoteData);

  await newNoteData.save();

  const { _id } = newNoteData;

  return { id: _id.toString(), newNoteData };
};
