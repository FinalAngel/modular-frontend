import "./footer.scss";

interface Props {
  children?: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return <footer className="footer">{children}</footer>;
};

export default Footer;
