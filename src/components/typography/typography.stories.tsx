import { Text, Title, Section } from "./";

export default {
  title: "Atoms/Typography",
};

export const Heading = () => (
  <Section>
    <Title type="h1">Heading 1</Title>
    <Title type="h2">Heading 2</Title>
    <Title type="h3">Heading 3</Title>
  </Section>
);

export const Content = () => (
  <Section>
    <Title type="h1">Heading 1</Title>
    <Text>Some dummy content inside the text.</Text>
    <Title type="h2">Heading 2</Title>
    <Text>Some dummy content inside the text.</Text>
    <Title type="h3">Heading 3</Title>
    <Text>Some dummy content inside the text.</Text>
  </Section>
);
