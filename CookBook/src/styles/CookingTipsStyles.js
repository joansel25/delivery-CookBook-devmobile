import { StyleSheet, Platform } from 'react-native';

const CookingTipsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    minHeight: 300,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  tipIcon: {
    fontSize: 60,
    marginBottom: 20,
  },
  tipText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    lineHeight: 32,
    fontStyle: 'italic',
  },
  progressContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    color: '#f4511e',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default CookingTipsStyles;
