// components/JobCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function JobCard({ job, isFeatured, index }) {
  // Determine background color based on whether it's featured or popular
  let backgroundColor;
  if (isFeatured) {
    backgroundColor = index % 2 === 0 ? "#356899" : "#34A853";
  } else {
    backgroundColor = "#FFFFFF";
  }

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Image source={job.logo} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.position}>{job.position}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    shadowColor: "#000",
    marginRight: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  position: {
    fontSize: 16,
    fontWeight: "bold",
  },
  company: {
    fontSize: 14,
    color: "gray",
  },
  salary: {
    fontSize: 14,
  },
  location: {
    fontSize: 14,
    color: "gray",
  },
});
