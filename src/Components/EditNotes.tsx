import React, { useState } from "react";

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

interface propsType {
  note: NotesType;
  editNotes:(ID:number,title:string,message:string)=>void
}
const EditNotes = ({ note,editNotes }: propsType) => {
  const [value, setValue] = useState(note);

  const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
e.preventDefault();
editNotes(value.id,value.title,value.message)
  }
  return (
    <div className=" p-2 bg-gray-100 px-2 rounded-xl shadow-lg">
      <div className="w-40 flex justify-center">
        <form
        onSubmit={handleSubmit}
          className="flex flex-col gap-y-2 items-center"
          action=""
          method="post"
        >
          <input
          value={value.title}
          onChange={(e)=>setValue({...value,title:e.target.value})}
            className="focus:outline-none border w-40"
            placeholder="new title "
            type="text"
          />
          <textarea
          value={value.message}
          onChange={(e)=>setValue({...value, message:e.target.value})}
            className="focus:outline-none border w-40"
            placeholder="new message"
            name=""
            id=""
          ></textarea>
          <div className="flex justify-end  w-full">
            <button
              className="text-[15px] cursor-pointer bg-black text-white px-1"
              type="submit"
            >
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;
