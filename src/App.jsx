import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";

function createNotes(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </>
  );
}

export default App;
