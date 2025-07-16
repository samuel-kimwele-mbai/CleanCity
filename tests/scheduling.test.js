/**
 * scheduling.test.js
 * Jest test for scheduling a waste pickup and storing data in localStorage
 */

describe('CleanCity - Schedule Pickup', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('should schedule a pickup for a future date and store it in localStorage', () => {
    const pickupDate = '2025-07-20';

    // Simulate scheduling logic
    function schedulePickup(date) {
      // Example scheduling logic: store date under 'pickupDate'
      localStorage.setItem('pickupDate', date);
    }

    // Call the scheduling function with test data
    schedulePickup(pickupDate);

    // Retrieve the stored value
    const storedDate = localStorage.getItem('pickupDate');

    // Check that the date is correctly stored
    expect(storedDate).toBe(pickupDate);
  });
});
