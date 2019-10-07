import { authService } from '@modules/auth/duck/service';
import { localStorageService } from '@modules/localStorage/duck/service';
import { serverService } from '@modules/servers/duck/service';

const createDependencies = () => {
  return {
    authService,
    serverService,
    localStorageService,
  };
};

type Dependencies = ReturnType<typeof createDependencies>;

export { Dependencies, createDependencies };
