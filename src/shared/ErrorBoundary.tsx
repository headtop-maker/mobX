import React, {Component, ErrorInfo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ErrorBoundaryProps = {};
type ErrorBoundaryState = {
  error: null | string;
  errorInfo: null | ErrorInfo;
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error Info:', errorInfo);
    this.setState({error, errorInfo});
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Что-то пошло не так!</Text>
          <Text style={styles.errorText}>
            {this.state.error && this.state.error.toString()}
          </Text>
          <Text style={styles.errorInfo}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  errorInfo: {
    fontSize: 12,
    color: '#888',
  },
});

export default ErrorBoundary;
