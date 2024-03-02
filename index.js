class PasswordVault {
  constructor() {
    this.passwords = {};
    this.creditCards = {};
    this.otherData = {};
  }

  addPassword(website, username, password) {
    this.passwords[website] = { username, password };
  }

  getPassword(website) {
    return this.passwords[website];
  }

  removePassword(website) {
    delete this.passwords[website];
  }

  addCreditCard(name, number, expirationDate, cvv) {
    this.creditCards[name] = { number, expirationDate, cvv };
  }

  getCreditCard(name) {
    return this.creditCards[name];
  }

  removeCreditCard(name) {
    delete this.creditCards[name];
  }

  addOtherData(key, value) {
    this.otherData[key] = value;
  }

  getOtherData(key) {
    return this.otherData[key];
  }

  removeOtherData(key) {
    delete this.otherData[key];
  }
}

// 示例用法
const passwordVault = new PasswordVault();

passwordVault.addPassword('example.com', 'john_doe', 'password123');
passwordVault.addPassword('google.com', 'jane_smith', 'securepassword');

const password = passwordVault.getPassword('example.com');
console.log('Password for example.com:', password);

passwordVault.removePassword('example.com');

passwordVault.addCreditCard('Visa', '1234567890123456', '12/25', '123');
passwordVault.addCreditCard('Mastercard', '9876543210987654', '06/24', '456');

const creditCard = passwordVault.getCreditCard('Visa');
console.log('Credit card details for Visa:', creditCard);

passwordVault.removeCreditCard('Visa');

passwordVault.addOtherData('secretKey', 'abcdef123456');
const secretKey = passwordVault.getOtherData('secretKey');
console.log('Secret key:', secretKey);

passwordVault.removeOtherData('secretKey');
