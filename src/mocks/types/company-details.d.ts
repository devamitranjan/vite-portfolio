export interface ICompanyDetails {
  companyName: string;
  roles: IRole[];
  companyIndex: string;
}
export interface IRole {
  [key: string]: string[];
}
