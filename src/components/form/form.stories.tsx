import { Form, Input } from "./";

export default {
  title: "Molecules/Form",
  component: Form,
};

export const Standard = () => (
  <Form>
    <Input type="text" /> <Input type="submit" value="Search" />
  </Form>
);
