import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Write() {
  const [editorValue, setEditorValue] = useState("");
  console.log(editorValue);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorbox">
          {" "}
          <ReactQuill
            className="editor"
            value={editorValue}
            onChange={(value) => setEditorValue(value)}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ align: ["right", "center", "justify"] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "code-block"],
              ],
            }}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
          />
          <label className="file" htmlFor="file">
            {" "}
            Upload Image
          </label>
          <div className="btn">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          {/* dropdown here */}
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />{" "}
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="social" id="social" />{" "}
            <label htmlFor="social">Social</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />{" "}
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" />{" "}
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" />{" "}
            <label htmlFor="design">Design</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
