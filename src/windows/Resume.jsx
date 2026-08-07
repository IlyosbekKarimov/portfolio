import { WindowControls } from "#components";
import { RESUME_FILE } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page } from "react-pdf";

import "#lib/pdf";

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a href={RESUME_FILE} download className="cursor-pointer" title="download resume">
                    <Download className="icon" />
                </a>
            </div>

            <Document file={RESUME_FILE}>
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;