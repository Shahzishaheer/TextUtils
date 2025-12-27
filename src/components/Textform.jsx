import { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const wordCount = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;

  return (
    <div className="container mx-auto max-w-4xl py-8 transition-colors duration-300">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
        {props.heading}
      </h1>
      <div className="mb-4">
        <textarea
          className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
        ></textarea>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        <button disabled={text.length === 0} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all" onClick={handleUpClick}>Uppercase</button>
        <button disabled={text.length === 0} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all" onClick={handleLoClick}>Lowercase</button>
        <button disabled={text.length === 0} className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-lg dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all" onClick={handleExtraSpaces}>Remove Spaces</button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Text Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{wordCount}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Words</p>
             </div>
             <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{text.length}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Characters</p>
             </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Estimated read time: <span className="font-bold">{0.008 * wordCount}</span> minutes
        </p>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Preview</h3>
        <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 min-h-[100px]">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}
            </p>
        </div>
      </div>
    </div>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};