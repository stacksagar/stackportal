import ResponsiveViewer from "components/templates/template/ResponsiveViewer";
import TemplateViwer from "components/templates/template/TemplateViwer";
import templates_data from "src/data/templates_data";
import { templatesDataObjectTypes } from "types/templatesDataTypes";

export default function index({
  template,
}: {
  template: templatesDataObjectTypes;
}) {

  return (
    <div>
      <ResponsiveViewer preview={template.preview} />
      <TemplateViwer template={template} />
    </div>
  );
}

export const getServerSideProps = (ctx) => {
  const { category, template, code }: any = ctx.query;
  const getTemplate = templates_data[code][category][template];
  return {
    props: {
      template: { code, category, templateKeyName: template, ...getTemplate },
    },
  };
};
