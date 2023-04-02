import { createDispatcher } from 'redux-dispatcher';

const mapDispatchToAC = {
  changePage: (page: string) => ({ page }),
};

export default createDispatcher('navigation', mapDispatchToAC);
