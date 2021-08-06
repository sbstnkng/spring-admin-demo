import authProvider from './authProvider';

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
});

test('should login with user', async () => {
  const expectedUser = 'John Doe';

  await authProvider.login({ username: expectedUser });

  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalledWith('username', expectedUser);
});
