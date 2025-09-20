const getTimestampEmail = (domain = 'test.com') => {
  return `user${Date.now()}@${domain}`;
};

module.exports = {
  RegisterData: {
    FirstName: 'Test',
    LastName: 'User',
    email: getTimestampEmail(),
    Password: 'Test@1234',
    ConfirmPassword: 'Test@1234',
  },

  LoginData: {
    username: 'test123+1@gmail.com',
    password: 'abcd@1234',
  },

  BillingAddressData: {
    firstName: 'Saniya',
    lastName: 'Muskan',
    email: 'saniya.muskan@test.com',
    country: 'Pakistan',
    state: 'Other (Non US)',
    city: 'Karachi',
    address1: '123 Street',
    zip: '74000',
    phone: '0387765454'
  },

  CreditCardDetails: {
    cardType: 'Visa',
    holderName: 'Hassan Mehmood',
    cardNumber: '4111111111111111',
    expireMonth: '12',
    expireYear: '2030',
    cardCode: '123'
  },
};

