import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const name = "강산";

  const email = "tks9901@naver.com";

  const mobile = "010 5591 3693";

  const githubUrl = "https://github.com/sank0118";

  const intro = "안녕하세요 감사해요 잘있어요 다시만나요";

  return (
    <>
      <Header name={name} />
      <main>
        <h1>안녕하세요. 제 이름은 강산입니다.</h1>
        <p>
          안녕하세요. 저는 {name}입니다.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vitae delectus eaque architecto unde? Explicabo
          nihil dolores dicta, sapiente esse, eveniet laboriosam, eius
          distinctio unde possimus quae aliquid laudantium non quod.
        </p>
        <br />
        <p>연락처는 {mobile}입니다</p>
        <br />
        <p>이메일은 {email}</p>
      </main>
      <Footer email={email} name={name} mobile={mobile} intro={intro} />
    </>
  );
};
export default App;
