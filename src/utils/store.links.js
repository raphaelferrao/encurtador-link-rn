import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "ENCURTA.LINKS";

export const getLinksSaved = async () => {
  const myLinks = await AsyncStorage.getItem(key);

  let linksSaved = JSON.parse(myLinks) || [];

  return linksSaved;
};

export const saveLink = async (newLink) => {
  let linksStored = await getLinksSaved(key);

  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("Esse link já existe na lista");
    return;
  }

  linksStored.push(newLink);

  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log(`Link ${newLink.link} salvo com sucesso!`);
};

export const deleteLink = async (links, id) => {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem(key, JSON.stringify(myLinks));
  console.log(`Link ${id} excluido com sucesso!`);

  return myLinks;
};
