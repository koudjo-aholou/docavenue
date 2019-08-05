#Doc Test Technique Doc avenue

### Version
React native 0.60.4

Clone
git clone https://github.com/koudjo-aholou/docavenue.git

# Install dependencies in the terminal
npm install

#React Native >= 0.60.0 autoLinking

#React Native =< 0.60.0 No autoLinking or if errors checks : 

#Lottie : https://github.com/react-native-community/lottie-react-native
#React Navigation : https://reactnavigation.org/docs/en/getting-started.html


# Run on Android
cmd : react-native run-android

#App
./App.js

#Components and screens
screenAccueil et  screensPost : ./src/screens
Components ./src/components

#Navigation
./src/navigation/navigation.js

#Pictures and fonts
Pictures : ./src/assets
Fonts : ./src/assets/fonts

#API jsonplaceholder/posts 
./src/config/api.js

#Debug APK or Install APK
./android/build/outputs/apk/debug/app-debug.apk

#Compile
Android Studio : https://developer.android.com/studio/

#Potentials Errors :
CorruptedCacheException: Corrupted IndexBlock 298298 found in cache '/Users/macuser/.gradle/caches/journal-1/file-access.bin'
	Open your /Users/macuser/ folder
	Press CMD + SHIFT + . (dot/period) to view hidden folders
	DELETE .gradle folder
	Restart Android Studio
Solution from : https://stackoverflow.com/questions/55801823/corruptedcacheexception-corrupted-indexblock-298298-found-in-cache-users-macu
Display Hidden files Mac : defaults write com.apple.Finder AppleShowAllFiles true

#L

# Build for production
Open with Android Studio ./android/ then Buid > Build Bundle/APK
