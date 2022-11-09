import React from "react";
import { Page, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";

import CornellPage from "./CornellPage";

const styles = StyleSheet.create({
  page: {
    padding: "1cm",
  },
});
const Pages = ({ size, ...props }) => {
  return (
    <>
      {/* Odd Page */}
      <Page size={size} style={styles.page}>
        <CornellPage {...props} sw={true} />
      </Page>
      {/* Even Page */}
      <Page size={size} style={styles.page}>
        <CornellPage {...props} sw={false} />
      </Page>
    </>
  );
};

export default function ({ color = "#000" }) {
  return (
    <PDFViewer className="pdf-viewer">
      <Document>
        <Pages
          size="LETTER"
          rowsNotesCues={41}
          colsNotes={26}
          colsCues={12}
          rowsSummary={10}
          color={color}
        />
      </Document>
    </PDFViewer>
  );
}
