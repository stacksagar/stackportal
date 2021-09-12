import ResponsiveViewer from 'components/templates/template/ResponsiveViewer';
import TemplateViwer from 'components/templates/template/TemplateViwer';
import { GetServerSidePropsContext } from 'next';
import templates_data from 'src/data/templates_data';

export default function index({ template }) {
  return (
    <div>
      {/* <ResponsiveViewer /> */}
      <TemplateViwer template={template} />
    </div>
  );
}

export const getServerSideProps: GetServerSidePropsContext<any> = (ctx) => {
  const { category, template, code }: any = ctx.query;
  const getTemplate = templates_data[code][category][template];
  return {
    props: {
      template: { code, category, templateKeyName: template, ...getTemplate },
    },
  };
};