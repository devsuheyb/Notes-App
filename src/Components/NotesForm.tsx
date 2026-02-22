import React, { useState } from "react";


interface propsType {
  addNotes: (title: string, message: string) => void;
}
const NotesForm = ({ addNotes }: propsType) => {
  const [input, setInput] = useState({ title: "", message: "" });
  const [isExpanding, setIsExpanding] = useState(false);

  // expanding function
  const expanding = () => {
    setIsExpanding(true);
  };
  // handle Submit function
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (input.message !== "" && input.title !== "") {
      addNotes(input.title, input.message);
    }
    setInput({ title: "", message: "" });
  };

  return (
    <div className="my-5 w-150 border">
      <div className="flex justify-center my-5 ">
        <form
          onSubmit={handleSubmit}
          className="w-100 "
          action=""
          method="post"
        >
          <div className="flex flex-col gap-2">
            <input
              onClick={() => expanding()}
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              className="focus:outline-none border pl-2"
              type="text"
              placeholder="title"
            />
            {isExpanding && (
              <>
                <textarea
                  value={input.message}
                  onChange={(e) =>
                    setInput({ ...input, message: e.target.value })
                  }
                  className="focus:outline-none border pl-2"
                  placeholder="message"
                ></textarea>

                <div className="flex justify-end">
                  <button className=" cursor-pointer text-white bg-black px-2" type="submit">
                    add
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
