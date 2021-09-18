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
        <Title no_my={true} text="About Smart-Card Portfolio" />
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
          haven't install
          <DocRefLink text="node.js" link="https://nodejs.org" /> then please
          install it.
        </p>

        <SmallTitle text="What's Included?" />
        <p>
          After purchasing <b>Smart Card</b> template on templateforest.net with
          your Envato account, go to your Download page. You can choose to
          download <b>Smart Card </b>
          template only (Installable react template) or the entire
          <b>Smart Card </b> template package which contains the following
          files:
        </p>
        <DocImage
          width="915"
          height="88"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fwhats_included-min.PNG?alt=media&token=fe586c87-389e-46ec-9244-4284a1c601be"
        />
        <p>
          You can get the following items after purchasing our template from
          themeforest and unzip main-file.zip file. 👆.
        </p>

        <Title text="React Installation" />
        <h3 className="text-lg font-bold mb-3">
          Please follow the instructions. 👇
        </h3>

        <ListStepper>
          <List count={1}>
            First Go to
            <b className="flex items-center mx-1">
              <FolderIcon className="w-5" /> smart-card-portfolio
            </b>
            folder.
          </List>

          <List count={2}>
            Open your terminal in
            <b className="flex items-center mx-1">
              <FolderIcon className="w-5" /> smart-card-portfolio
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
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Flocalhost-min.png?alt=media&token=7ac5ae34-a082-492f-a87c-e0361ebcec55"
        />

        <Title text="Change Your Change Favicon" />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_favicon-min.png?alt=media&token=e1096f4f-998e-45c6-b530-b13d1566af7f"
        />
        <Title text="Change Site Title" />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_site_title-min.png?alt=media&token=24f845e5-e29c-4780-a34e-9fa1e910593f"
        />

        <FinishedText text="Congratulations you have finished setup." />
      </DocSection>

      <DocSection>
        <Title text="Change Your Home Data" />

        <FilePath paths={["public", "images", "home_picture.jpg"]} />

        <DocImage
          width="945"
          height="98"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_home_picture-min.png?alt=media&token=8553081e-333f-4313-a85a-02de8110d504"
        />
        <p className="flex space-x-2 items-center">
          <span>Replace this picture with same name</span>
          <b>home_picture.jpg</b>
          <span className="px-3 py-0.5 rounded bg-gray-500">300 x 300</span>
        </p>

        <Title text="Change Your Name & Profession Headline" />
        <FilePath paths={["src", "components", "Home", "index.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_name_profession-min.png?alt=media&token=51b75e72-42ab-4024-9553-2ea0818bed24"
        />

        <Title text="Change Your Desc.. & Email" />
        <FilePath paths={["src", "components", "Home", "index.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_desc_email-min.png?alt=media&token=a0567a24-2356-4f10-aedb-b053222f1a34"
        />

        <Title text="Change Social Links" />
        <FilePath paths={["src", "components", "Home", "Social.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_socials-min.png?alt=media&token=805103e2-bbf8-401e-9576-975ab3622e14"
        />
        <FinishedText text="Finished Home Data!" />
      </DocSection>

      <DocSection>
        <Title text="Change Your Resume Data" />

        <Title text="Add Your Resume!" />
        <FilePath paths={["public", "pdf", "resume.pdf"]} />
        <DocImage
          width="942"
          height="76"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fadd_resume-min.png?alt=media&token=faa97b34-ec11-4c8a-88e2-930e6bbcd3d8"
        />

        <Title text="Add Experience" />
        <FilePath paths={["src", "data", "experience_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_experience_data-min.png?alt=media&token=6d615282-2280-4e82-ba52-d81bbd4d9ecb"
        />
        <p> Add Your Experience Data Like This 👆 </p>

        <FinishedText text="Finished Resume Data!" />
      </DocSection>

      <DocSection>
        <Title text="Change Your Skills Data" />

        <Title text="Add Your Technical Skills" />
        <FilePath paths={["src", "components", "Skills", "TechnicalSkills"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_technical_skills-min.png?alt=media&token=b87e99fc-81d1-4138-a293-85910844a3d8"
        />

        <Title text="Add Your Skills By Percentage" />
        <FilePath paths={["src", "data", "skills_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_skills_data-min.png?alt=media&token=656c4a2e-5b89-48bb-bf23-3d44ae529842"
        />

        <FinishedText text="Finished Skills Data!" />
      </DocSection>

      <DocSection>
        <Title text="Change Your Portfolio Data" />

        <Title text="Add Your Portfolios" />
        <FilePath paths={["src", "data", "portfolios_data.js"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_portfolio_data-min.png?alt=media&token=0c4cfc47-3078-40c5-9d57-40c5086572d6"
        />
        <p>
          In this <b>portfolio_data</b> object, declare your category name as a
          array like this 👆, then add your single portfolio as a object.
        </p>

        <FinishedText text="Finished Portfolios Data!" />
      </DocSection>

      <DocSection>
        <Title text="Change Your Contact Data" />

        <Title text="This is Contact Form" />
        <FilePath paths={["src", "components", "contact", "form.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fform-min.png?alt=media&token=53f17c64-e1ca-4d98-bc8b-faf10918b867"
        />

        <Title text="Add Your Contact Info" />
        <FilePath paths={["src", "components", "contact", "ContactInfo.jsx"]} />
        <DocImage
          width="1920"
          height="1080"
          src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/smart-card-portfolio%2Fchange_contact_info-min.png?alt=media&token=5e353cda-fe32-414c-8812-751ebb8a730a"
        />

        <FinishedText text="Finished Contact Data!" />
      </DocSection>

      {/* Change LOG */}
      <DocSection>
        <SmallTitle text="Change Log" />

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
            date="18 September 2021"
            version="1.0.0"
            action="new release"
          />
        </ChangeLogTable>
      </DocSection>
    </Documentation>
  );
}
