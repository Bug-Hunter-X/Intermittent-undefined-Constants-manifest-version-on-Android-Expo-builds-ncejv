# Expo Constants.manifest.version Undefined on Android

This repository demonstrates a bug in Expo where `Constants.manifest.version` sometimes returns `undefined` on Android builds. This is inconsistent and can lead to issues in applications using this value for feature flags or other version-dependent logic.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Observe the console output.  The app should sometimes show the correct version and other times show `undefined`.
4. Build the application for Android and run it on a physical device or emulator.  The intermittent issue should persist.

## Potential Causes

The root cause appears to be related to the asynchronous loading of the app manifest. The timing of access to `Constants.manifest` might be too early before the data has been fully loaded in certain situations.  Fast app startup or background tasks could potentially interfere with this process.

## Solution

The provided solution uses `useEffect` hook to ensure the manifest is loaded before accessing `version`.  Also, it provides a fallback value to handle potential edge cases. 