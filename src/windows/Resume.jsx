import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';  
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href="files/Karimov_Ilyos.pdf" download className="cursor-pointer" title="download resume">
                    <Download className="icon" />
                </a>
            </div>

            <Document file="files/Karimov_Ilyos.pdf">
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;