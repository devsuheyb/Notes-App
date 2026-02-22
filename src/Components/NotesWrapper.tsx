import React, { useState } from "react";
import NotesForm from "./NotesForm";
import ListOfNotes from "./ListOfNotes";
import EditNotes from "./EditNotes";
import Search from "./Search";

interface NotesType {
  id: number;
  title: string;
  message: string;
  createdAt: number;
  updatedAt: number;
  favorite: boolean;
  time: string;
  isEditing: boolean;
}
const NotesWrapper = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);

  // time 'ago' calculated here

  // adding Notes function
  const addNotes = (title: string, message: string) => {
    const timeStamp = Date.now();
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: timeStamp,
        title,
        message,
        createdAt: timeStamp,
        updatedAt: timeStamp,
        favorite: false,
        time: "",
        isEditing: false,
      },
    ]);
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="w-200   flex flex-col items-center  gap-5">
        <div className="border w-full">
          <div className="">
            <div className="flex justify-end pr-5 pt-5">
              <Search />
            </div>

            <div className="flex justify-center w-full ">
              <NotesForm addNotes={addNotes} />
            </div>
          </div>

          <div></div>
        </div>

        <div className="w-full border ">
          {/* this is where notes goes */}
          <ListOfNotes />
          <EditNotes />
        </div>
      </div>
    </div>
  );
};

export default NotesWrapper;
