import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native'
import loadinggif from '../../assets/loading.json'
import {CalendarList} from 'react-native-calendars';
import { styles } from './styles';
import testIDs from './testIDs';
import moment from 'moment'
import 'moment/locale/pt-br'
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { ButtonBack } from '../../components/ButtonBack';
import { LinearGradient } from 'expo-linear-gradient';
import LocaleConfig from './localeConfig';
import listEmotions from '../../connectors/aws/listEmotions';

const RANGE = 24;
const initialDate = moment().format('YYYY-MM-DD');

const CalendarsList = () => {
    const [isLoading, setIsLoading] = useState(true)
	const [selected, setSelected] = useState(null);
    const Navigation = useNavigation();

	const markedDatesDefault = {
		[selected]: {
			selected: true,
			disableTouchEvent: true,
			selectedColor: '#5E60CE',
			selectedTextColor: theme.colors.primary
		}
	};
	const [markedDates, setMarkedDates] = useState(markedDatesDefault);
	
	useEffect(() => {
		loadData();
	}, [])

	const loadData = async () => {
		try {
			const emotions = await listEmotions();
			if (emotions) {
				var newMarkedDates = markedDates
				emotions.forEach( (emotion) => {
				let id = Object.keys(emotion)[0]
				emotion = emotion[Object.keys(emotion)[0]]
				newMarkedDates[moment(emotion.Created_at).format('YYYY-MM-DD')] = {
						selected: true,
						selectedColor: theme.colors[emotion.Emotion],
						//@ts-ignore
						message: emotion.Message,
						id: id,
						emotion: emotion.Emotion,
						selectedTextColor: theme.colors.primary
					}
				})
				setMarkedDates(newMarkedDates)
			}
		}
		catch (e) {
			console.log(e);
		}
		setIsLoading(false);		
	}

	const onDayPress = day => {
		if (markedDates[day.dateString] == undefined) 
			return

		const emotion = markedDates[day.dateString]
		//@ts-ignore
		Navigation.navigate('FeelingHistory',{emotionObject: {
			//@ts-ignore
			DailyEmotionId: emotion.id,
			Created_at: day.dateString,
			//@ts-ignore
			Emotion: emotion.emotion,
			//@ts-ignore
			Message: emotion.message
		}})
	
    setSelected(day.dateString);
  };

  return (
	<View style={{backgroundColor: theme.colors.primary}}>
	<ButtonBack />
		{isLoading ? 
            <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={loadinggif} autoPlay loop />
            </SafeAreaView>
            :
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
	}
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
