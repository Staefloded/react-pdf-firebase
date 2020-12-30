import React from "react";
import { Image, Page, Text, Font, Document, StyleSheet, View } from "@react-pdf/renderer";
import logo from "./img/logo.png";
import poppinsRegular from "./fonts/Poppins-Regular.ttf";
import poppinsBold from "./fonts/Poppins-Bold.ttf";
import poppinsSemiBold from "./fonts/Poppins-SemiBold.ttf";

const Pdf = ({ data }) => {
  // Delimit numbers above 1000 e.g. 1,000
  const commas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.headerSection}>
          <Image style={styles.logo} src={logo} />
          <Text style={styles.title}>Company Employees Datasheet</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Employee's Name:</Text>
          <Text>
            {data.fName} {data.lName}
          </Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Email:</Text>
          <Text style={{ textTransform: "lowercase" }}>{data.email}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Phone:</Text>
          <Text>{data.phone}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Age:</Text>
          <Text>{data.age} years</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Sex:</Text>
          <Text>{data.gender}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Home Address:</Text>
          <Text>{data.address}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>No of working years:</Text>
          <Text>{data.year} years</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Department:</Text>
          <Text>{data.department}</Text>
        </View>

        <View style={styles.text}>
          <Text style={styles.lead}>Monthly Salary:</Text>
          <Text>N{commas(data.salary)}</Text>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerLogo} src={logo} />
          <Text style={styles.companyName}>React-pdf Inc.</Text>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Poppins",
  format: "truetype",
  fonts: [
    { src: poppinsRegular, fontWeight: 400 },
    { src: poppinsBold, fontWeight: 600 },
    { src: poppinsSemiBold, fontWeight: 500 },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 70,
    fontFamily: "Poppins",
    fontSize: 14,
    position: "relative",
  },

  headerSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
    justifyContent: "center",
  },

  title: {
    fontSize: 23,
    fontWeight: 600,
  },

  logo: {
    width: 50,
    marginRight: 20,
  },

  text: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontWeight: 400,
    textTransform: "capitalize",
    flexDirection: "row",
    marginBottom: 20,
  },

  lead: {
    marginRight: 10,
    fontWeight: 500,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 30,
    left: 70,
    position: "absolute",
    fontSize: 10,
    borderTop: "1 solid black",
    paddingTop: "10",
    width: "100%",
  },

  footerLogo: {
    width: 20,
    marginRight: 10,
  },
});

export default Pdf;
