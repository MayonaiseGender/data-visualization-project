export type DemoDataRow = {
  Name: string;
  Age: string;
  "Favorite Color": string;
  "Favorite Sport": string;
};

export type PieDataRow = {
  name: string;
  value: number;
};

export type CrashData = {
  "Crash Number": number;
  "City Town Name": string;
  "Crash Date": string;
  "Crash Severity": string;
  "Crash Status": string;
  "Crash Time": string;
  "Crash Year": number;
  "Max Injury Severity Reported": string;
  "Number of Vehicles": number;
  "Police Agency Type": string;
  "State Police Troop": string;
  "Age of Driver - Youngest Known": string;
  "Age of Driver - Oldest Known": string;
  "Age of Vulnerable User - Youngest Known": string;
  "Age of Vulnerable User - Oldest Known": string;
  "Crash Hour": string;
  "Driver Contributing Circumstances (All Drivers)": string;
  "Driver Distracted By (All Vehicles)": string;
  "First Harmful Event": string;
  "Is Geocoded": string;
  "Light Conditions": string;
  "Manner of Collision": string;
  "MassDOT District": number;
  "Vulnerable User Action (All Persons)": string;
  "Vulnerable User Location (All Persons)": string;
  "Vulnerable User Type (All Persons)": string;
  "RMV Document Numbers": string;
  "Road Surface Condition": string;
  "Roadway Junction Type": string;
  "RPA Abbreviation": string;
  "Total Fatalities": number;
  "Total Non-Fatal Injuries": number;
  "Traffic Control Device Type": string;
  "Trafficway Description": string;
  "Vehicle Actions Prior to Crash (All Vehicles)": string;
  "Vehicle Configuration (All Vehicles)": string;
  "Vehicle Emergency Use (All Vehicles)": string;
  "Vehicle Towed From Scene (All Vehicles)": string;
  "Vehicle Travel Directions (All Vehicles)": string;
  "Weather Conditions": string;
  "County Name": string;
  "Crash Report IDs": string;
  "FMCSA Reportable (All Vehicles)": string;
  "FMCSA Reportable (Crash)": string;
  "First Harmful Event Location": string;
  "Geocoding Method": string;
  "Hit and Run": string;
  Locality: string;
  "Most Harmful Event (All Vehicles)": string;
  "Road Contributing Circumstance": string;
  "School Bus Related": string;
  "Speed Limit": number;
  "Traffic Control Device Function": string;
  "Vehicle Sequence of Events (All Vehicles)": string;
  "Work Zone Related": string;
  "Vulnerable User Sequence of Events (All Persons)": string;
  "Vulnerable User Distracted By (All Persons)": string;
  "Vulnerable User Traffic Control Type (All persons)": string;
  "Vulnerable User Origin Destination (All Persons)": string;
  "Vulnerable User Contributing Circumstances (All Persons)": string;
  "Vulnerable User Alcohol Suspected Type (All Persons)": string;
  "Vulnerable User Drug Suspected Type (All Persons)": string;
  X: number;
  Y: number;
  Latitude: number;
  Longitude: number;
  "Street Number": string;
  Roadway: string;
  "Near Intersection Roadway": string;
  "Distance and Direction From Intersection": string;
  Milemarker: number;
  "Milemarker Route": string;
  "Distance and Direction From Milemarker": string;
  "Exit Number": string;
  "Exit Route": string;
  "Distance and Direction From Exit": string;
  Landmark: string;
  "Distance and Direction From Landmark": string;
  "AADT-linked RD": number;
  "AADT Year-linked RD": number;
  "Peak % Single Unit Trucks-linked RD": number;
  "Single-Unit Truck and Bus AADT-linked RD": number;
  "Peak % Combo Trucks-linked RD": number;
  "Combination Truck AADT-linked RD": number;
  "Curb-linked RD-linked RD": string;
  "Jurisdiction-linked RD": string;
  "Truck Route-linked RD": string;
  "Left Sidewalk Width-linked RD": number;
  "Right Sidewalk Width-linked RD": number;
  "Left Shoulder Width-linked RD": number;
  "Left Shoulder Type-linked RD": string;
  "Surface Width-linked RD": number;
  "Surface Type-linked RD": string;
  "Right Shoulder Width-linked RD": number;
  "Right Shoulder Type-linked RD": string;
  "Number of Travel Lanes-linked RD": number;
  "Number of Opposing Travel Lanes-linked RD": number;
  "Median Width-linked RD": number;
  "Median Type-linked RD": string;
  "Urban Type-linked RD": string;
  "Functional Classification-linked RD": string;
  "Urbanized Area-linked RD": string;
  "Federal Aid Route Number-linked RD": string;
  "Facility Type-linked RD": string;
  "Street Operation-linked RD": string;
  "Access Control-linked RD": string;
  "Number of Peak Hour Lanes-linked RD": number;
  "Speed Limit-linked RD": number;
  "Street Name-linked RD": string;
  "From Street Name-linked RD": string;
  "To Street Name-linked RD": string;
  "City-linked RD-linked RD": string;
  "Structural Condition-linked RD": string;
  "Terrain-linked RD": string;
  "Urban Location Type-linked RD": string;
  "AADT Derivation-linked RD": string;
  "AADT Station Number-linked RD": string;
  "Opposing Direction Speed Limit-linked RD": number;
  "Undivided Left Shoulder Type-linked RD": string;
  "Undivided Left Shoulder Width-linked RD": string;
  "Truck Exclusion Type-linked RD": string;
  "Truck Exclusion Time-linked RD": string;
  "Federal Functional Classification-linked RD": string;
};

export type PrecipData = {
  Date: string;
  Precipitation: number;
};
