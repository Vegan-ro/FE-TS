/**
 * Route Path
 */

export type PathKeys =
  | 'ROOT'
  | 'AUTH'
  | 'SIGNUP'
  | 'SEARCH'
  | 'REVIEW'
  | 'ADDPLACE'
  | 'PLACELISTS'
  | 'PLACEDETAIL'
  | 'MY'
  | 'MYEDIT'
  | 'NOTFOUND'
  | 'ADMIN';

export type RoutePaths = {
  [key in PathKeys]: (typeof PATH)[key];
};

export const PATH = Object.freeze({
  ROOT: '/' as const,
  AUTH: '/auth' as const,
  SIGNUP: '/signup' as const,
  SEARCH: '/search' as const,
  REVIEW: '/place/:placeid/review' as const,
  ADDPLACE: '/add' as const,
  PLACELISTS: '/places' as const,
  PLACEDETAIL: '/place/:placeid' as const,
  MY: `/user/:userid` as const,
  MYEDIT: '/user/:userid/edit' as const,
  NOTFOUND: '*' as const,
  ADMIN: '/admin' as const,
});
