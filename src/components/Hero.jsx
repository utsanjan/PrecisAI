import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <div className="flex">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/utsanjan/PrecisAI")
            }className="github_btn"
          >GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/sponsors/utsanjan"
              )
            }className="sponsor_btn"
          >🤍
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles<br className="max-md:hidden" />
        <span className="orange_gradient">with PrecisAI.</span>
      </h1>
      <h2 className="desc">
      Discover the power of PrecisAI, an amazing open-source tool that summarizes lengthy articles into brief & easy-to-read summaries. Simplify your article-reading experience with just one small click!
      </h2>
    </header>
  );
};

export default Hero;
