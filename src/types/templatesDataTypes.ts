export type templatesDataType = {
  html5: templatesDataCodeType;
  nextjs: templatesDataCodeType;
  reactjs: templatesDataCodeType;
};

export type templatesDataCodeType = {
  Portfolios?: templatesDataCodeCategoryType;
  eCommerce?: templatesDataCodeCategoryType;
  Agency?: templatesDataCodeCategoryType;
  Business?: templatesDataCodeCategoryType;
  Organization?: templatesDataCodeCategoryType;
  Medical?: templatesDataCodeCategoryType;
  Resturant?: templatesDataCodeCategoryType;
  Hostipal?: templatesDataCodeCategoryType;
  Social?: templatesDataCodeCategoryType;
};

export type templatesDataCodeCategoryType = {
  InBoxPortfolioHTML5?: templatesDataObjectTypes;
  InBoxPortfolioReactjs?: templatesDataObjectTypes;
  InBoxPortfolioNextjs?: templatesDataObjectTypes;
  InStackPortfolioHTML5?: templatesDataObjectTypes;
  InStackPortfolioReactjs?: templatesDataObjectTypes;
  InStackPortfolioNextjs?: templatesDataObjectTypes;
  InStackEcommerceHTML5?: templatesDataObjectTypes;
  InStackEcommerceReactjs?: templatesDataObjectTypes;
  InStackEcommerceNextjs?: templatesDataObjectTypes;
};

export interface templatesDataObjectTypes {
  title: string;
  image?: string;
  purchase: string;
  preview?: string;
  templateKeyName?: string;
  code?: string;
  multipleDemos?: multipleDemosType[];
  category?:
    | 'Portfolios'
    | 'eCommerce'
    | 'Agency'
    | 'Business'
    | 'Organization'
    | 'Medical'
    | 'Resturant'
    | 'Hostipal'
    | 'Social'
    | any;
}

export interface multipleDemosType {
  image: string;
  preview: string;
}
