import React, { useContext } from "react";
import Markdown from "react-markdown";
import Context from "../Context";

function Description() {
   const { data } = useContext(Context);
   return (
      <div className="md_format">
         <Markdown>{data.metadata.description}</Markdown>
      </div>
   );
}

export default Description;
