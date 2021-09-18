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

export default function SmartCardTogglePortfolioReactjs() {
  return (
    <Documentation
      titles={[
        "Intro & Setup",
        "Home",
        "Resume",
        "Skills",
        "Portfolio",
        "Contact",
        "Change Log",
      ]}
    >
      {/* Intro Section */}
      <DocSection>
        <Title no_my={true} text="About Smard-Card Portfolio" />
        <p>
          Welcome to <b>Smart Card</b> Portfolio react.js template! We would
          like to thank you for choosing our template - <b>Smart Card</b> . It’s
          built with react.js with custom css, not use any other external
          library. It has super optimization & super fast loading. It’s fully
          responsive and looks well. It is a modern design and high-speed
          performance react.js template. To use <b>Smart Card</b> for Personal
          Portfolio, Personal Portfolio Landing, Minimal Portfolio, Freelancer
          Portfolio, Designer Portfolio, and other needed inner or details pages
          availability.
        </p>
        <Title text="Requirements" />
        <p>
          There are system requirements in order to install and setup React
          Project. Make sure that you have install
          <DocRefLink text="node.js" link="https://nodejs.org" />. if you
          haven't install{" "}
          <DocRefLink text="node.js" link="https://nodejs.org" /> then please
          install it.
        </p>

        <SmallTitle text="What's Included?" />
        <p>
          After purchasing <b>Smart Card</b> template on templateforest.net with
          your Envato account, go to your Download page. You can choose to
          download <b>Smart Card </b>
          template only (Installable react template) or the entire{" "}
          <b>Smart Card </b> template package which contains the following
          files:
        </p>
        <DocImage
          width="915"
          height="88"
          src="/images/templates/scp/whats_included.png"
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
              <FolderIcon className="w-5" /> smard-card-portfolio
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
          src="/images/templates/scp/localhost.png"
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
            date="19 September 2021"
            version="1.0.0"
            action="new release"
          />
        </ChangeLogTable>
      </DocSection>
    </Documentation>
  );
}
