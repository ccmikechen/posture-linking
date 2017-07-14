import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';

import HomeScreen from './HomeScreen';
import ScanBleScreen from './ScanBleScreen';
import PostureScreen from './PostureScreen';
import PostureMonitorScreen from './PostureMonitorScreen';
import PostureRecordScreen from './PostureRecordScreen';
import CombinationScreen from './CombinationScreen';
import AddCombinationScreen from './AddCombinationScreen';
import TriggerListScreen from './TriggerListScreen';
import ActionListScreen from './ActionListScreen';
import ButtonListScreen from './ButtonListScreen';
import TriggerSettingScreen from './TriggerSettingScreen';
import TriggerSelectConfigScreen from './TriggerSelectConfigScreen';
import ActionSettingScreen from './ActionSettingScreen';
import ActionSelectConfigScreen from './ActionSelectConfigScreen';
import ServiceListScreen from './ServiceListScreen';
import ServiceConnectScreen from './ServiceConnectScreen';


export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('ScanBleScreen', () => ScanBleScreen, store, Provider);
  Navigation.registerComponent('PostureScreen', () => PostureScreen, store, Provider);
  Navigation.registerComponent('PostureMonitorScreen', () => PostureMonitorScreen, store, Provider);
  Navigation.registerComponent('PostureRecordScreen', () => PostureRecordScreen, store, Provider);
  Navigation.registerComponent('CombinationScreen', () => CombinationScreen, store, Provider);
  Navigation.registerComponent('AddCombinationScreen', () => AddCombinationScreen, store, Provider);
  Navigation.registerComponent('TriggerListScreen', () => TriggerListScreen, store, Provider);
  Navigation.registerComponent('ActionListScreen', () => ActionListScreen, store, Provider);
  Navigation.registerComponent('ButtonListScreen', () => ButtonListScreen, store, Provider);
  Navigation.registerComponent('TriggerSettingScreen', () => TriggerSettingScreen, store, Provider);
  Navigation.registerComponent('TriggerSelectConfigScreen', () => TriggerSelectConfigScreen, store, Provider);
  Navigation.registerComponent('ActionSettingScreen', () => ActionSettingScreen, store, Provider);
  Navigation.registerComponent('ActionSelectConfigScreen', () => ActionSelectConfigScreen, store, Provider);
  Navigation.registerComponent('ServiceListScreen', () => ServiceListScreen, store, Provider);
  Navigation.registerComponent('ServiceConnectScreen', () => ServiceConnectScreen, store, Provider);
}
