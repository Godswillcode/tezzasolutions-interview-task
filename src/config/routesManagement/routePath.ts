export const routePath = {
  home: `/`,
  login: `/login`,
  workspace: `/workspace`,
  clients: `/clients`,
  clientDetails: (id?: number | string) => ({
    format: `/clients/:id`,
    path: `/clients/${id}`,
  }),
};
