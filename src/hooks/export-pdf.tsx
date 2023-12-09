import React, { useState } from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const MyDocument = () => (
  <Document>
    <Page>
      <Text>Hello, this is a sample PDF document!</Text>
    </Page>
  </Document>
);

const ExportPDFButton = () => {
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleExportPDF = () => {
    const blob = (
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    ).toBlob();

    setPdfBlob(blob);
  };

  const handleDownloadPDF = () => {
    saveAs(pdfBlob, "document.pdf");
  };

  return (
    <div>
      <button onClick={handleExportPDF}>Generate PDF</button>
      {pdfBlob && (
        <div>
          <PDFViewer>
            <MyDocument />
          </PDFViewer>
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default ExportPDFButton;
