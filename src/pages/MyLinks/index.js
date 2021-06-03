import React from "react";

import Menu from "../../components/Menu";
import StatusBarPage from "../../components/StatusBarPage";
import ListItem from "../../components/ListItem";

import { Container, Title, ListLinks } from "./styles";

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />

      <Menu />

      <Title>Meus Links</Title>

      <ListLinks
        data={[
          { id: 1, link: "text.com" },
          { id: 2, link: "textabcd.com" },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
