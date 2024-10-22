import * as React from "react";
import './mypdfviewer.css'
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import './mypdfviewer.css'
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const App = ({pdf}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div
        style={{
          height: "750px",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Viewer
          fileUrl={pdf}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default App;
