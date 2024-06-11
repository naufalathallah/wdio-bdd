# WDIO BDD AT

## Setup

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **Appium**: Install Appium globally via npm:
   ```sh
   npm install -g appium
   ```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/naufalathallah/wdio-bdd.git
   cd wdio-bdd
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and adjust the variables.

## Running Tests

1. Gallery APP:

   ```sh
   npm run wdio
   ```

2. SayaKaya APP:
   ```sh
   npm run sayakaya
   ```

## Improvement List For SayaKaya APP

- **Identifier Name During Registration**: Need to add a field for the name during the registration process.
- **Optional Phone Number for Email Registration**: When registering using email, the phone number should not be mandatory as it is not required for verification.
- **Phone Number Verification Delay**: Implement a delay before allowing phone number verification again.
- **Auto Read Phone Verification Code**: Automatically read the phone verification code when sent via SMS/WhatsApp.
