export const routePath = {
  home: `/`,
  login: `/login`,
  workspace: `/workspace`,
  clients: `/clients`,
  clientProfile: (id?: number | string) => ({
    format: `/clients/:id`,
    path: `/clients/${id}`,
  }),
};
