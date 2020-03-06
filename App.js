import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubjectsScreen from './pages/SubjectsScreen';
import { Provider } from 'react-redux';
import store from './store'
import EditorSubjectScreen from './pages/EditorSubjectScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={SubjectsScreen} />
            <Tab.Screen name="EditorSubject" component={EditorSubjectScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}