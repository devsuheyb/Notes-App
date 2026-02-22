import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { timeAgo } from "./timeAgo";

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
  deleteNotes: (id: number) => void;
  favoriteNotes: (id: number) => void;
}
const ListOfNotes = ({ note, deleteNotes,favoriteNotes }: propsType) => {
  return (
    <div className="w-45  bg-gray-100 rounded-xl shadow-xl">
      <div className="">
        <div className="flex justify-between px-2 py-3">
          <p className="wrap-break-word  font-bold capitalize ">{note.title}</p>
          <span className="flex gap-1">
            <MdModeEdit className="text-blue-500  cursor-pointer" />
            <MdDelete
              onClick={() => deleteNotes(note.id)}
              className="text-red-500  cursor-pointer"
            />
          </span>
        </div>
        <div className="relative">
          <p className="wrap-break-word text-[12px] p-2 capitalize  leading-none">
            {note.message}
          </p>

          <span className=" flex justify-between items-center mb-3 mt-5">
            <span className="flex justify-center ">
              <p className="text-[9px] pl-2">{timeAgo(note.createdAt)}</p>
            </span>

            <span className=" flex justify-end items-center ">
              <FaHeart onClick={()=>favoriteNotes(note.id)}  className= {`${note.favorite ? 'text-red-500 mr-5  cursor-pointer ' :' mr-5  cursor-pointer '}`} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListOfNotes;
