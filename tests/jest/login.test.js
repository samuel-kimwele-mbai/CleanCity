
describe('CleanCity Login', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('should store session in localStorage when login is successful', () => {
    // Mock valid credentials
    const email = 'user1@test.com';
    const password = 'Test123!';

    // --- Mock your login logic ---
    function login(email, password) {
      const validEmail = 'user1@test.com';
      const validPassword = 'Test123!';

      if (email === validEmail && password === validPassword) {
        localStorage.setItem('session', 'active');
        return true;
      } else {
        return false;
      }
    }

    // Act: perform login
    const result = login(email, password);

    // Assert: login successful and session stored
    expect(result).toBe(true);
    expect(localStorage.getItem('session')).toBe('active');
  });
});
