# Wikipedia Mobile Automation Test

![Test Execution](screenshots/search_results.png)

## 🚀 Setup Guide

### Prerequisites
- Node.js v16+
- Java JDK 8+
- Android Studio (with emulator)
- Appium 2.x

### Installation
1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Start Appium (in separate terminal):
```bash
npm run appium
```

4. Launch Android emulator:
```bash
npm run android-emulator
```

5. Install Wikipedia APK:
```bash
adb install path/to/wikipedia.apk
```

6. Run tests:
```bash
npm test
```

## 📝 Test Details
- **Tested App**: Wikipedia (org.wikipedia)
- **Test Scenario**: Search functionality validation
- **Test Coverage**: 
  - App launch
  - Search interaction
  - Article navigation
  - Content verification

## 📱 Device Matrix
See [device_matrix.md](docs/device_matrix.md)