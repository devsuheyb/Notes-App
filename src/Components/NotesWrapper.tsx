import { useState, useEffect } from "react";
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
  const [selectValue, setSelectValue] = useState<string>("All");

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

  // to identify time when the note created At
  useEffect(() => {
    const interval = setInterval(() => {
      setNotes((prev) => [...prev]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // delete Notes function 
  const deleteNotes =(ID:number)=>{
    setNotes(prevNote=>prevNote.filter((note)=> note.id !== ID))
  }
 // favorite  toggle function 
  const favoriteNotes =(ID:number)=>{
    setNotes(prevNote=> prevNote.map((note)=> note.id == ID?  {...note,favorite:!note.favorite}:note))
  }

  // edit function start here
  const editNotes =(ID:number,title:string,message:string)=>{
    const update= Date.now()
    setNotes(prev=> prev.map((note)=> note.id ===ID ? {...note, updatedAt:update, title,message ,isEditing:false}:note))
  }

  // stating edit function
  const startEdit = (ID:number) =>{
        setNotes(prev=> prev.map((note)=> note.id ===ID ? {...note, isEditing:true}:note))
  }
  
  // filtering notes based on select values
  const filteredNote = notes.filter((note) => {
    if (selectValue === "All") {
      return true;
    }
    if (selectValue === "New") {
      return note.createdAt !== note.updatedAt;
    }
    if (selectValue === "Old") {
      return note.createdAt === note.updatedAt;
    }
    if (selectValue === "Favorite") {
      return note.favorite;
    }
  });

  return (
    <div className="flex justify-center mt-20">
      <div className="w-200   flex flex-col   gap-5">
        <div className="border w-full">
          <div className="">
            <h1 className="flex justify-center capitalize mt-5">notes App</h1>
            <div className="flex justify-end pr-5 pt-5">
              <Search />
            </div>

            <div className="flex justify-center w-full ">
              <NotesForm addNotes={addNotes} />
            </div>
          </div>

          <div></div>
        </div>

        <div>
          <div className="flex gap-2 border w-fit p-2">
            <p className="capitalize">filter By :</p>
            <div>
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                name=""
                id=""
                className="focus:outline-none border w-fit"
              >
                <option value="All">All</option>
                <option value="Favorite">Favorite</option>
                <option value="New">New</option>
                <option value="Old">Old</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" w-203 flex flex-wrap gap-x-5 gap-y-4 px-4 ">
          {filteredNote.map((note) => {
            return note.isEditing ? (
              <EditNotes key={note.id} note={note} editNotes={editNotes} />
            ) : (
              <ListOfNotes deleteNotes={deleteNotes} key={note.id} note={note} favoriteNotes={favoriteNotes} startEdit={startEdit} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotesWrapper;
