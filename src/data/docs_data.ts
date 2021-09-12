import {
  ChipIcon,
  CubeIcon,
  TemplateIcon,
  ViewGridAddIcon,
} from '@heroicons/react/solid';
import { HTMLIcon } from 'components/svgs/HomepageSvgs';
import { docsType } from 'types/docsType';
import templates_data from './templates_data';

const templateKeys = [];

Object.entries(templates_data).map(([_, obj]) => {
  Object.entries(obj).map(([_, obj2]) => {
    Object.entries(obj2).map(([templateKey, _]) => {
      templateKeys.push(templateKey);
    });
  });
});

const docs_data: docsType = {
  ReactComponents: {
    title: 'React Components',
    Icon: ViewGridAddIcon,
    keys: [],
  },
  Templates: {
    title: 'Templates',
    Icon: TemplateIcon,
    keys: templateKeys,
  },
  HTMLUI: {
    title: 'Vanila HTML UI',
    Icon: HTMLIcon,
    keys: [],
  },
  Plugins: {
    title: 'Plugins',
    Icon: CubeIcon,
    keys: [],
  },
  Package: {
    title: 'Package',
    Icon: ChipIcon,
    keys: [],
  },
};

export default docs_data;
