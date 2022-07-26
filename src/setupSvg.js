import githubSvg from "./svg/github.svg";
import codingBlogSvg from "./svg/coding.svg";
import exploringBlogSvg from "jsx:./svg/exploring.svg";
import instagramSvg from "jsx:./svg/instagram.svg";
import fiveHundredPixelsSvg from "jsx:./svg/500px.svg";

export default () => {
  const codingBlogIconContainer = document.querySelector("#icon-blog-code");
  const exploringBlogIconContainer = document.querySelector(
    "#icon-blog-exploring"
  );
  const githubIconContainer = document.querySelector("#icon-github");
  const instagramIconContainer = document.querySelector("#icon-instagram");
  const fiveHundredPixelsIconContainer = document.querySelector(
    "#icon-five-hundred-pixels"
  );

  console.log(githubSvg)

  codingBlogIconContainer.src = codingBlogSvg;
  exploringBlogIconContainer.src = exploringBlogSvg;
  githubIconContainer.src = githubSvg;
  instagramIconContainer.src = instagramSvg;
  fiveHundredPixelsIconContainer.src = fiveHundredPixelsSvg;
};
