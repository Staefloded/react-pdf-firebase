import React, { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { db } from "./firebase";
import Pdf from "./Pdf";

const PdfDashboard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from cloud firestore in order of timestamp from oldest to latest data(asc)
    db.collection("users")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setUser(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            user: doc.data(),
          }))
        )
      );
    setLoading(false);
  }, []);

  return (
    <table className="responsive-table">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Gender</th>
          <th>Download</th>
        </tr>
      </thead>

      <tbody>
        {
          // Fetch data with its respective if loading is false
          !loading &&
            user.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{`${item.user.fName} ${item.user.lName}`}</td>
                <td>{item.user.email}</td>
                <td>{item.user.department}</td>
                <td style={{ textTransform: "capitalize" }}>{item.user.gender}</td>
                <td>
                  <PDFDownloadLink
                    document={<Pdf data={item.user} />}
                    fileName={`${item.user.fName.toLowerCase()}${item.user.lName.toLowerCase()}.pdf`}
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document" : "Save now!"
                    }
                  </PDFDownloadLink>
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default PdfDashboard;
