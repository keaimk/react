import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });

  const handletitleInputKeyUp = (e) => {
    const newBook = { ...book, title: e.target.value };
    setBook(newBook);
  };

  const handlecontentInputKeyUp = (e) => {
    const nextbook = { ...book, content: e.target.value };
    setBook(nextbook);
  };

  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={handletitleInputKeyUp} />
      </Field>
      <Field label={"본문"}>
        <Textarea onKeyUp={handlecontentInputKeyUp} />
      </Field>
      <hr />
      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>
      <Field label={"본문"} readOnly>
        <Textarea value={book.content} />
      </Field>
    </div>
  );
}

export default App41;
