const Footer = ({ name, email, mobile, intro }) => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">{name}의 github</a>
        </li>
        <li>
          <a href="">{email} 메일 보내기</a>
        </li>
        <li>
          <a href="">{mobile}</a>
        </li>
      </ul>
      <p>{intro}</p>
    </footer>
  );
};

export default Footer;
