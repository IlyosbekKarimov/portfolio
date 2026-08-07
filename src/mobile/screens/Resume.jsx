import { RESUME_FILE } from "#constants";
import MobileAppWrapper from "#hoc/MobileAppWrapper";
import { useViewportWidth } from "#hooks";
import { AppHeader } from "#mobile";
import { Download } from "lucide-react";
import { Document, Page } from "react-pdf";

import "#lib/pdf";

const HORIZONTAL_PADDING = 32;
const MAX_PAGE_WIDTH = 640;

const Resume = () => {
    const viewportWidth = useViewportWidth();
    const pageWidth = Math.min(viewportWidth - HORIZONTAL_PADDING, MAX_PAGE_WIDTH);

    const action = (
        <a href={RESUME_FILE} download className="header-action" title="Download resume">
            <Download size={18} />
            PDF
        </a>
    );

    return (
        <>
            <AppHeader title="Resume" subtitle="Karimov Ilyosbek" action={action} />

            <div className="app-body">
                <Document file={RESUME_FILE} className="pdf" loading={<p className="hint">Loading resume…</p>} error={<p className="hint">Could not load the resume.</p>}>
                    <Page pageNumber={1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>

                <a href={RESUME_FILE} download className="btn-primary">
                    <Download size={18} />
                    Download PDF
                </a>
            </div>
        </>
    );
};

const ResumeScreen = MobileAppWrapper(Resume, 'resume');

export default ResumeScreen;
