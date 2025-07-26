        import React, { useState } from "react";

        export default function Textform(props) {
          let uppercase = () => {
            console.log("upperbutton click....   " + text);
            // setText(text.toUpperCase());
            let newtext = text.toUpperCase();
            setText(newtext);
            props.show("converted to upper case", "success");
          };

          let lowerCase = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.show("converted to lower case", "success");
          };
          let change = (event) => {
            setText(event.target.value);

          };

          const Cleared=()=>
          { console.log("worked")
            let newtext1 = " ";
            setText(newtext1);
          }
          const Spaces=()=>
          { console.log("worked");
            let space= text.replace(/\s+/g, ' ');
            setText(text.length>0?space:!space);
          }
          
          const copyText=()=>
          {
            navigator.clipboard.writeText(text)
            console.log("copied text");
          }
          const [text, setText] = useState(""); //this hooks
          
          // text is a state variable
          //In useState the variable's current state av
          //through setText update ther text state
          
          return (
            <>
              <div className="container">
                <h1  style={{color:props.bg ==="light"?"#2e416c":"white"}}>{props.heading}  </h1>
                <div className="mb-3">

                {/* backgroundColor:props.bg ==="dark"?"gray":"white" , color:props.bg ==="light"?"#2e416c":"white" */}
                  <textarea className="form-control" style={{ 
        backgroundColor: props.bg === "dark" ? "#2e416c" : (props.Mode === "dark" ? "green" : "white"),
        color: props.bg === "light" ? "blue" : "white"
      }}
        value={text}
                    onChange={change}
                    id="my_form"
                    rows="8"
                  ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1 "disabled={!text} onClick={uppercase}>
                  {" "}
                  Convert to Uppercase{" "}
                </button>
                <button className="btn btn-primary mx-1 my-1 " disabled={!text}onClick={lowerCase}>
                  Convert to lowercase
                </button>
              <button  className="btn btn-primary mx-1 my-1 "  disabled={!text} onClick={Cleared}>clear Text</button>
              <button  className="btn btn-primary mx-1 my-1 "  disabled={!text} onClick={copyText}  >Copy Text</button>
              <button  className="btn btn-primary mx-1 my-1 " disabled={!text} onClick={Spaces}>Remove extra spaces</button>
              </div>
              <div className="container my-3"  style={{ backgroundColor: props.bg === "dark" ? "#2e416c" : (props.Mode === "dark" ? "green" : "white"), color: props.bg === "light" ? "blue" : "white"}}
    value={text}
                    onChange={change} >
                <h1>Text summary</h1>
                <p>
                  word {text.split(/\s+/).filter((ele)=>{return ele.length!=0}).length} and character {text.length}
                </p>
                {/*from this we can find wod and characters*/}
                <p> {0.25 * text.split(" ").filter((ele)=>{return ele.length!=0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text for Preview"}</p>
              </div>
            </>
          );
        }
