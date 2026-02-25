import { Text, TouchableOpacity, View } from "react-native";
import { faculties } from "../data/courses";

export default function HomeScreen() {
  return (
    <View>
      <Text> Faculties </Text>

      {faculties.map((faculty) => (
        <TouchableOpacity key={faculty.id}>
          <Text>{faculty.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
