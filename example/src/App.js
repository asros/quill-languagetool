import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import registerQuillLanguageTool from "quill-languagetool";

registerQuillLanguageTool(Quill);
const modules = {
  languageTool: {
    apiOptions: {
      level: "picky",
    },
    authorization: 'YOUR TOKEN'
  },
};

const App = () => {
  const [value, setValue] = useState("");
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    />
  );
};
export default App;
