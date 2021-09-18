import {
  ChevronDownIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  FolderIcon,
} from "@heroicons/react/solid";
import DocSection from "components/documentation/DocCenter/DocSection";
import ListStepper, {
  List,
} from "components/documentation/DocCenter/Utils/ListStepper";
import Documentation from "components/documentation/Documentation";
import Title from "components/documentation/DocCenter/Utils/Title";
import SmallTitle from "components/documentation/DocCenter/Utils/SmallTitle";
import DocRefLink from "components/documentation/DocCenter/Utils/DocRefLink";
import DocImage from "components/documentation/DocCenter/Utils/DocImage";
import FilePath from "components/documentation/DocCenter/Utils/FilePath";
import FinishedText from "components/documentation/DocCenter/Utils/FinishedText";
import ChangeLogTable, {
  ChangeLog,
} from "components/documentation/DocCenter/Utils/ChangeLogTable";

export default function SmartBoxPortfolio() {
  return (
    <Documentation
      titles={[
        "Intro & Setup",
        "Home",
        "About",
        "Experience",
        "Portfolio",
        "Contact",
        "Change Log",
      ]}
    >
      {/* Intro Section */}
      <DocSection>
        <Title no_my={true} text="About SB-Portfolio" />
        <p>
          Welcome to SBP react.js template! We would like to thank you for
          choosing our template - SBP. It’s built with react.js with custom css,
          not use any other external library. It has super optimization & super
          fast loading. It’s fully responsive and looks well. It is a modern
          design and high-speed performance react.js template. To use SBP for
          Personal Portfolio, Personal Portfolio Landing, Minimal Portfolio,
          Freelancer Portfolio, Designer Portfolio, and other needed inner or
          details pages availability.
        </p>
        <Title text="Requirements" />
        <p>
          There are system requirements in order to install and setup SBP
          template and its components properly. Make sure that you are running
          the <DocRefLink text="node.js" link="https://nodejs.org" />. if you
          install <DocRefLink text="node.js" link="https://nodejs.org" /> then
          npm will automatically install in your system.
        </p>

        <SmallTitle text="What's Included?" />
        <p>
          After purchasing SBP template on templateforest.net with your Envato
          account, go to your Download page. You can choose to download SBP
          template only (Installable react template) or the entire SBP template
          package which contains the following files:
        </p>
        <DocImage
          width="1045"
          height="186"
          src="/images/templates/sbp/whats_included.png"
        />
        <p>
          After Unzip sb-portfolio.rar file, You can get the following items
          after purchasing our template from themeforest 👆.
        </p>

        <Title text="React Installation" />
        <h3 className="text-lg font-bold mb-3">
          Please follow the instructions. 👇
        </h3>

        <ListStepper>
          <List count={1}>
            First Go to
            <b className="flex mx-1">
              <FolderIcon className="w-5" /> smart-box-portfolio
            </b>
            folder.
          </List>

          <List count={2}>
            Open your terminal in
            <b className="flex mx-1">
              <FolderIcon className="w-5" /> smart-box-portfolio
            </b>
            folder
          </List>

          <List count={3}>
            Run command
            <b className="bg-gray-300 text-gray-900 ml-2 px-2 py-0.5 rounded text-xs">
              npm install
            </b>
          </List>

          <List count={4} isLast={true}>
            Run command
            <b className="bg-gray-300 text-gray-900 ml-2 px-2 py-0.5 rounded text-xs">
              npm start
            </b>
          </List>
        </ListStepper>
        <SmallTitle text="Then it will show like this 👇 at localhost:3000" />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/localhost.png"
        />

        <Title text="Change Favicon" />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/favicon_change.png"
        />
        <Title text="Change Site Title" />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/title_change.png"
        />

        <FinishedText text="Congratulations you have finished setup." />
        <p>Now it's time to modify with your data.</p>
      </DocSection>

      {/* Home Section */}
      <DocSection>
        <Title text="Change Home Picture" />

        <FilePath paths={["public", "images", "home_picture.jpg"]} />
        
        <DocImage
          width="1019"
          height="188"
          src="/images/templates/sbp/home_picture_change.png"
        />
        <p className="flex space-x-2 items-center">
          <span>Replace this picture with same name</span>
          <b>home_picture.jpg</b>
          <span className="px-3 py-0.5 rounded bg-gray-500">200 x 200</span>
        </p>

        <Title text="Change Your Name" />
        <FilePath paths={["src", "components", "Home", "HomeTyping.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/your_name.png"
        />

        <Title text="Change Profession Headlines" />
        <FilePath paths={["src", "components", "Home", "HomeTyping.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/your_profession.png"
        />

        <Title text="Change Intro" />
        <FilePath paths={["src", "components", "Home", "index.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/your_intro.png"
        />
        <FinishedText text="Finished Homepage" />
      </DocSection>

      {/* About Section */}
      <DocSection>
        <Title text="Change About Picture" />

        <FilePath paths={["public", "images", "about_picture.jpg"]} />

        <DocImage
          width="1019"
          height="188"
          src="/images/templates/sbp/about_picture_change.png"
        />
        <p className="flex space-x-2 items-center">
          <span>Replace this picture with same name</span>
          <b>about_picture.jpg</b>
          <span className="px-3 py-0.5 rounded bg-gray-500">300 x 250</span>
        </p>

        <Title text="Change Your About Title & Your Expertice." />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/about_content_change.png"
        />

        <Title text="Change Your Info." />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/about_info_change.png"
        />

        <Title text="Add Your Resume" />
        <FilePath paths={["public", "pdf", "resume.pdf"]} />
        <DocImage
          width="1035"
          height="70"
          src="/images/templates/sbp/add_resume.png"
        />
        <p>
          Replace this PDF with same name <b>resume.pdf</b>
        </p>

        <Title text="Add Social Accounts Link" />
        <FilePath paths={["src", "data", "social_links.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/add_socials_links.png"
        />
        <p>
          Just add your social link in <b>social_links</b> object,{" "}
          <b>Social ICON </b>
          automatically will show.
        </p>
        <FinishedText text="Finished About" />
      </DocSection>

      {/* Experience Section */}
      <DocSection>
        <Title text="Add Experience" />
        <FilePath paths={["src", "data", "experience_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/add_experience.png"
        />
        <Title text="Multiple Experience" />
        <FilePath paths={["src", "data", "experience_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/add_experience2.png"
        />
        <FinishedText text="Finished Experience" />
      </DocSection>

      {/* Portfolios Section */}

      <DocSection>
        <Title text="Add Portfolios" />
        <FilePath paths={["src", "data", "portfolio_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/add_portfolio.png"
        />
        <Title text="Multiple Project" />
        <FilePath paths={["src", "data", "portfolio_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/add_portfolio2.png"
        />
        <FinishedText text="Finished Portfolios" />
      </DocSection>

      {/* Contact Section */}
      <DocSection>
        <Title text="Contact Info" />
        <FilePath paths={["src", "components", "Contact", "ContactLeft.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="/images/templates/sbp/contact_info.png"
        />
        <FinishedText text="Finished Contact" />
      </DocSection>

      {/* Change LOG */}
      <DocSection>
        <Title text="Change LOG" />

        <p>
          Change Log
          <DocRefLink
            text="stackportal"
            link="https://stackportal.vercel.app"
          />
          Team never stops Improving, bug fixes, and improvements. See What's
          New. We recommend you to read the changelog for every update.
        </p>
        <br />
        <br />

        <ChangeLogTable>
          <ChangeLog
            date="15 September 2021"
            version="1.0.0"
            action="new release"
          />
        </ChangeLogTable>
      </DocSection>
    </Documentation>
  );
}
