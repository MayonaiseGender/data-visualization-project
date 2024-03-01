import { useEffect, useState } from "react";
import papa from "papaparse";
import "./App.css";
import type { DemoDataRow, PieDataRow, PrecipData, CrashData } from "./types";
import { PieChart, Pie, Cell, LabelList } from "recharts";

const App = () => {
  const [csvData, setCsvData] = useState<PrecipData[]>([]);
  const [csvData2, setCsvData2] = useState<CrashData[]>([]);
  const [unfilteredData, setUnfilteredData] = useState<CrashData[]>([]);
  const [filteredData, setFilteredData] = useState<CrashData[]>([]);
  const [pieData, setPieData] = useState<PieDataRow[]>([]);
  const [pieData2, setPieData2] = useState<PieDataRow[]>([]);
  const csvFileURL = "/data/Precipitation Data Spreadsheet.csv";
  const csvFileURL2 = "/data/export_2_12_2024_13_59_47.csv";

  const getData = async () => {
    let response = await fetch(csvFileURL);
    let text = await response.text();
    let parsed = await papa.parse<PrecipData>(text, { header: true });
    console.log("Successfully parsed data:", parsed); // Log to make it easy to inspect shape of our data in the inspector
    setCsvData(parsed.data.filter((row) => row.Date)); // Only keep rows that have a date, so we avoid blank row at end of file
  };
  const getData2 = async () => {
    let response = await fetch(csvFileURL2);
    let text = await response.text();
    let parsed = await papa.parse<CrashData>(text, { header: true });
    console.log("Successfully parsed data:", parsed);
    setCsvData2(
      parsed.data.filter((row) => row["Road Surface Condition"] == "Wet")
    );
  };
  const getData3 = async () => {
    let response = await fetch(csvFileURL2);
    let text = await response.text();
    let parsed = await papa.parse<CrashData>(text, { header: true });
    console.log("Successfully parsed data:", parsed);
    setFilteredData(
      parsed.data.filter((row) => row["Road Surface Condition"] !== "Wet")
    );
  };
  const getUnfilteredData = async () => {
    let response = await fetch(csvFileURL2);
    let text = await response.text();
    let parsed = await papa.parse<CrashData>(text, { header: true });
    console.log("Successfully parsed data:", parsed);
    setUnfilteredData(parsed.data.filter((row) => row["Crash Number"]));
  };

  useEffect(() => {
    getData();
    getData2();
    getData3();
    getUnfilteredData();
  }, []);

  useEffect(() => {
    // Update whenever data changes...
    let newPieCounts: { [key: string]: number } = {};
    let newPieData: PieDataRow[] = [];
    csvData.forEach((row) => {
      if (!newPieCounts[row["Precipitation"]]) {
        newPieCounts[row["Precipitation"]] = 0; // initialize if not there...
      }
      newPieCounts[row["Precipitation"]]++; // Add one!
    });
    for (let key in newPieCounts) {
      newPieData.push({ name: key, value: newPieCounts[key] });
    }
    setPieData(newPieData);
    console.log("Set new pie data!", newPieData);
  }, [csvData]);

  useEffect(() => {
    let newPieCounts2: { [key: string]: number } = {};
    let newPieData2: PieDataRow[] = [];
    unfilteredData.forEach((row) => {
      if (!newPieCounts2[row["Road Surface Condition"]]) {
        newPieCounts2[row["Road Surface Condition"]] = 0; // initialize if not there...
      }
      newPieCounts2[row["Road Surface Condition"]]++; // Add one!
      newPieCounts2["No Crashes"] = 588; //Manually done, filtered out duplicates from crash data, 1142 (total days) - 554 (days with crashes)
    });
    for (let key in newPieCounts2) {
      newPieData2.push({ name: key, value: newPieCounts2[key] });
    }
    setPieData2(newPieData2);
    console.log("Set new pie data!", newPieData2);
  }, [unfilteredData]);

  return (
    <main style={{ maxWidth: 800, margin: "auto" }}>
      <h1>Hello Data Visualization</h1>
      <p>Loaded {csvData.length} rows of CSV Data!</p>
      <h2>Inches of rain:</h2>
      <PieChart width={300} height={300}>
        <Pie data={pieData} dataKey="value" nameKey="name" label fill="yellow">
          <LabelList dataKey="name" position="middle" />
          {pieData.map((entry) => (
            <Cell key={entry.name} fill={entry.name.toLowerCase()} />
          ))}
        </Pie>
      </PieChart>
      <h2> Road conditions during Crashes:</h2>
      <PieChart width={300} height={300}>
        <Pie data={pieData2} dataKey="value" nameKey="name" label fill="yellow">
          <LabelList dataKey="name" position="middle" />
          {pieData.map((entry) => (
            <Cell key={entry.name} fill={entry.name.toLowerCase()} />
          ))}
        </Pie>
      </PieChart>
    </main>
  );
};

export default App;
