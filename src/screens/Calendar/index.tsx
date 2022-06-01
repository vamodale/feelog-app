import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import { styles } from './styles';
import testIDs from './testIDs';
import moment from 'moment'
import 'moment/locale/pt-br'
import { theme } from '../../global/styles/theme';
import { ButtonBack } from '../../components/ButtonBack';
import { LinearGradient } from 'expo-linear-gradient';
import LocaleConfig from './localeConfig';

const RANGE = 24;
const initialDate = moment().format('YYYY-MM-DD');

const CalendarsList = () => {
  const [selected, setSelected] = useState(initialDate);
  const markedDates = {
    [selected]: {
      selected: true,
      disableTouchEvent: true,
      selectedColor: '#5E60CE',
      selectedTextColor: 'white'
    },
	'2022-05-16': {selected: true, selectedColor: theme.colors[1]},
	'2022-05-17': {selected: true, selectedColor: theme.colors[2]},
	'2022-05-18': {selected: true, selectedColor: theme.colors[3]},
	'2022-05-19': {selected: true, selectedColor: theme.colors[4]},
	'2022-05-20': {selected: true, selectedColor: theme.colors[5]},
	'2022-05-21': {selected: true, selectedColor: theme.colors[6]},
	'2022-05-22': {selected: true, selectedColor: theme.colors[7]},
	'2022-05-23': {selected: true, selectedColor: theme.colors[8]},
  };
  
  const onDayPress = day => {
    setSelected(day.dateString);
  };

  return (
	<View style={{backgroundColor: theme.colors.primary}}>
	<ButtonBack />
		<View style={{marginTop: 128,}}>
		<LinearGradient // Gradient de cima
			pointerEvents='none'
			start={[0.5, 0]}
			end={[0.5, 0.2]}
			colors={[theme.colors.primaryrgba, theme.colors.transparentrgba]}
			style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1,}}
		/>
		<LinearGradient // Gradient de baixo
			pointerEvents='none'
			start={[0.5, 0.8]}
			end={[0.5, 1]}
			colors={[theme.colors.transparentrgba, theme.colors.primary]}
			style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1,}}
		/>
		<CalendarList
		theme={{
			todayTextColor: theme.colors[7],
			calendarBackground: theme.colors.primary,
			textDayFontFamily: theme.fonts.title300,
			dayTextColor: theme.colors.lightgrey,
			textDayHeaderFontFamily: theme.fonts.title600,
			textDayHeaderFontSize: 12,
			agendaDayTextColor: theme.colors.lightgrey,
			'stylesheet.calendar.header': {
				week: {flexDirection: 'row', justifyContent: 'space-around',   width: '100%'}
			}
		}}
		style={{
			paddingHorizontal: 16
		}}
		MarkingType='multi-dot'
		localeConfig={LocaleConfig}
		testID={testIDs.calendarList.CONTAINER}
		calendarStyle={styles.calendarList}
		current={initialDate}
		pastScrollRange={RANGE}
		futureScrollRange={RANGE}
		renderHeader={renderCustomHeader}
		onDayPress={onDayPress}
		markedDates={markedDates}
		/>
		</View>
	</View>
  );
};

function renderCustomHeader(date) {
  const aux = date.toString('MMMM yyyy');
  const [month, year] = aux.split(' ');

  return (
      <Text style={styles.month}>{`${month} ${year}`}</Text>
  );
}

export default CalendarsList;
