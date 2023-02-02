import githubSvg from "./svg/github.svg";
import codingBlogSvg from "./svg/coding.svg";
import instagramSvg from "jsx:./svg/instagram.svg";
import fiveHundredPixelsSvg from "jsx:./svg/500px.svg";

export default () => {
  const codingBlogIconContainer = document.querySelector("#icon-blog-code");
  const githubIconContainer = document.querySelector("#icon-github");
  const instagramIconContainer = document.querySelector("#icon-instagram");
  const fiveHundredPixelsIconContainer = document.querySelector(
    "#icon-five-hundred-pixels"
  );


  codingBlogIconContainer.src = codingBlogSvg;
  githubIconContainer.src = githubSvg;
  instagramIconContainer.src = instagramSvg;
  fiveHundredPixelsIconContainer.src = fiveHundredPixelsSvg;
};
