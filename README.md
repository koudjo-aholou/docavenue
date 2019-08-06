#Doc Test Technique docavenue

# Install dependencies in the terminal <br />

### Version
React native 0.60.4

Clone : <br />
git clone https://github.com/koudjo-aholou/docavenue.git
cd docavenue
npm install

React Native >= 0.60.0 autoLinking
React Native =< 0.60.0 No autoLinking or if errors checks : 

Lottie : https://github.com/react-native-community/lottie-react-native <br />
React Navigation : https://reactnavigation.org/docs/en/getting-started.html

# Run on Android
cmd : react-native run-android

# Folders :
#App <br />
./App.js

#Components and screens <br />
screenAccueil et screensPosts : ./src/screens <br />
Components ./src/components

#Navigation <br />
./src/navigation/navigation.js

#Pictures and fonts <br />
Pictures : ./src/assets <br />
Fonts : ./src/assets/fonts

#API jsonplaceholder/posts  <br />
./src/config/api.js

#Debug APK or Install APK <br />
./apk

# Compile
Android Studio : https://developer.android.com/studio/

#Build for production
Open with Android Studio ./android/ then Buid > Build Bundle/APK

# Solved Errors : <br />

#Mac pb <br />
CorruptedCacheException: Corrupted IndexBlock 298298 found in cache '/Users/macuser/.gradle/caches/journal-1/file-access.bin'
	Open your /Users/macuser/ folder
	Press CMD + SHIFT + . (dot/period) to view hidden folders
	DELETE .gradle folder
	Restart Android Studio

Display Hidden files Mac : defaults write com.apple.Finder AppleShowAllFiles true

#Building release isn't reflecting change <br />
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

#INSTALL_FAILED_UPDATE_INCOMPATIBLE <br />
Buid > Build Bundle/APK <br />
or <br />
adb uninstall com.example

