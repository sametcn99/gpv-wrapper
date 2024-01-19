import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const websiteUrl = 'https://next-github-profile-viewer.vercel.app';

  return (
    <WebView source={{ uri: websiteUrl }} style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: "100vh",
  },
});
