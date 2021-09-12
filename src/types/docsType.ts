export interface docsType {
  Templates: docsObjType;
  ReactComponents: docsObjType;
  HTMLUI: docsObjType;
  Plugins: docsObjType;
  Package: docsObjType;
}

export interface docsObjType {
  title: string;
  keys: any[];
  Icon: any;
}
