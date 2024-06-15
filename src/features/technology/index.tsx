import { AwsImg } from "../../components/graphics/technology/aws-img";
import { CssImg } from "../../components/graphics/technology/css-img";
import { GitlabImg } from "../../components/graphics/technology/gitlab-img";
import { HtmlImg } from "../../components/graphics/technology/html-img";
import { JavascriptImg } from "../../components/graphics/technology/javascript-img";
import { MongoDbImg } from "../../components/graphics/technology/mongodb-img";
import { NginxImg } from "../../components/graphics/technology/nginx-img";
import { NodeJsImg } from "../../components/graphics/technology/nodejs-img";
import { PostmanImg } from "../../components/graphics/technology/postman-img";
import { ReactImg } from "../../components/graphics/technology/react-img";
import { ReduxImg } from "../../components/graphics/technology/redux-img";
import { SassImg } from "../../components/graphics/technology/sass";
import { TailwindImg } from "../../components/graphics/technology/tailwind-img";
import { TanstackQueryImg } from "../../components/graphics/technology/tanstack-query-img";
import { TypescriptImg } from "../../components/graphics/technology/typescript-img";
import { ViteJsImg } from "../../components/graphics/technology/vitejs-img";
import { WebpackImg } from "../../components/graphics/technology/webpack-img";
import { XstateImg } from "../../components/graphics/technology/xstate-img";
import "./technology.css";

/**
 * Renders a list of logos and their corresponding names.
 *
 * @return {JSX.Element} A React fragment containing the list of logos and names.
 */
const Technology = () => {
  const images = [
    { logo: AwsImg, name: "AWS" },
    { logo: CssImg, name: "CSS" },
    { logo: GitlabImg, name: "Gitlab" },
    { logo: HtmlImg, name: "HTML" },
    { logo: JavascriptImg, name: "Javascript" },
    { logo: MongoDbImg, name: "MongoDB" },
    { logo: NginxImg, name: "Nginx" },
    { logo: NodeJsImg, name: "Node" },
    { logo: PostmanImg, name: "Postman" },
    { logo: ReactImg, name: "React" },
    { logo: ReduxImg, name: "Redux" },
    { logo: SassImg, name: "Sass" },
    { logo: TailwindImg, name: "Tailwind" },
    { logo: TanstackQueryImg, name: "Tanstack Query" },
    { logo: TypescriptImg, name: "Typescript" },
    { logo: ViteJsImg, name: "Vite" },
    { logo: WebpackImg, name: "Webpack" },
    { logo: XstateImg, name: "Xstate" },
  ];

  return (
    <>
      {images.map((image) => {
        const Logo = image.logo;
        return (
          <div className='technology-container' key={image.name}>
            <Logo
              width='100px'
              height='100px'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <div className='image-name'>{image.name}</div>
          </div>
        );
      })}
    </>
  );
};

export { Technology };
