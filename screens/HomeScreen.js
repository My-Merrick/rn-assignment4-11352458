// screens/HomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import JobCard from "../components/JobCard";

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  const featuredJobs = [
    {
      id: 1,
      company: "Facebook",
      position: "Software Engineer",
      location: "Accra, Ghana",
      salary: "$180,000",
      logo: require("../assets/facebook.png"),
    },
    {
      id: 2,
      company: "Google",
      position: "Data Scientist",
      location: "San Francisco, US",
      salary: "$160,000",
      logo: require("../assets/google.png"),
    },
    // Add more featured jobs here
  ];

  const popularJobs = [
    {
      id: 1,
      company: "Burger King",
      position: "Jr Executive",
      location: "Los Angeles, US",
      salary: "$96,000/y",
      logo: require("../assets/profile.png"),
    },
    {
      id: 2,
      company: "Beats",
      position: "Product Manager",
      location: "Florida, US",
      salary: "$84,000/y",
      logo: require("../assets/apple.png"),
    },
    {
      id: 3,
      company: "Facebook",
      position: "Product Manager",
      location: "Florida, US",
      salary: "$86,000/y",
      logo: require("../assets/facebook.png"),
    },
    // Add more popular jobs here
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profilePic}
        />
      </View>
      <TextInput
        placeholder="Search a job or position"
        style={styles.searchInput}
      />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <ScrollView horizontal>
        {featuredJobs.map((job, index) => (
          <JobCard key={job.id} job={job} isFeatured={true} index={index} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      {popularJobs.map((job, index) => (
        <JobCard key={job.id} job={job} isFeatured={false} index={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
