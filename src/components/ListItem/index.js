import React from "react";
import { Text, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { ContainerButton, Item } from "./styles";

function ListItem() {
  return (
    <View>
      <ContainerButton
        activeOpacity={0.9}
        onPress={() => {
          alert("oi");
        }}
      >
        <Feather name="link" color="#FFF" size={24} />
        <Item numberOfLines={1}>http://hamplia.com</Item>
      </ContainerButton>
    </View>
  );
}

export default ListItem;
