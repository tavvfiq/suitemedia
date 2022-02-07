import { Container } from 'inversify';
import { NavigationFunctionComponent } from 'react-native-navigation';

export interface NavigationWithDI extends NavigationFunctionComponent {
  container: Container;
}
