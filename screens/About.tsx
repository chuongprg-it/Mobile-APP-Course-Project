import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../types/Navigator";

type Props = StackScreenProps<StackParamList, "About">;

export default function AboutScreen({ navigation }: Props): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giới thiệu ứng dụng</Text>
        <Text style={styles.text}>
          Xin chào! Đây là một ứng dụng tuyệt vời giúp bạn trong việc quản lý tài chính của mình.
        </Text>     
        <Text style={styles.text}>
          Hiện nay, rất nhiều người mắc phải các vấn đề về tài chính, 
          trong đó có vấn đề làm sao để không “vung tay quá trán” 
          trong quá trình sử dụng tiền và việc quản lý chi tiêu cá nhân 
          đang trở thành nhu cầu và thói quen hàng ngày của nhiều người, nhất là các bạn trẻ . 
          Vì vậy nhóm chúng tôi đã đưa ra 1 giải pháp hỗ trợ mọi người trong việc quản lý tài chính của mình, 
          đó chính là ứng dụng quản lý chi tiêu cá nhân.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 45,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: "#050505",
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#050505",
    marginTop: 10,
  },
});
