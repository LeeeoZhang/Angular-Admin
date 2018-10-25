import { UserLayoutModule } from './user-layout.module';

describe('UserLayoutModule', () => {
  let userLayoutModule: UserLayoutModule;

  beforeEach(() => {
    userLayoutModule = new UserLayoutModule();
  });

  it('should create an instance', () => {
    expect(userLayoutModule).toBeTruthy();
  });
});
