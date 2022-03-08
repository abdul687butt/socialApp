import React, { useState, useEffect } from 'react';
import {
	StyleSheet
	, Text, View, Platform, TouchableHighlight
} from 'react-native';
import { ICONS, COLORS,  wp, hp } from '../../constants';
import * as Animatable from 'react-native-animatable';

export const Toast = (props) => {
	const { status, message, clearToast } = props
	const [show, setShow] = useState(false);
	const [animationStyle, setanimationStyle] = useState('flipInX')

	useEffect(() => {
		//show toast true if message exist
		setShow(message ? true : false)

		// if the animation is existAnimation that is flipOutX
		// then after 2secs clear the toast and setShowFalse
		let timer;
		if (animationStyle === 'flipOutX') {
			timer = setTimeout(() => {
				setShow(false);
				clearToast();
			}, 2000);
		}
		return () => {
			clearTimeout(timer);
			setExitAnimation(true);
		};
	}, [animationStyle.length]);

	const setExitAnimation = (reset) => {
		let timer;
		if (!reset) {
			setTimeout(() => {
				timer = setanimationStyle('flipOutX')
			}, 2000)
		} else {
			clearTimeout(timer)
			// setExitAnimation(true)
		}
	}

	const styles = StyleSheet.create({
		toast: {
			minHeight: 60,
			height: 'auto',
			width: wp(95),
			borderLeftColor: COLORS.white,
			backgroundColor: COLORS.lightGray,
			borderRadius: 10,
			backgroundColor:
				status === 'success' ? COLORS.green :
					status === 'error' ? COLORS.danger :
						status === 'warning' ? COLORS.danger :
							status === 'info' ? COLORS.info : COLORS.black,
			paddingHorizontal: '4%',
			justifyContent: 'center',
			position: 'absolute',
			right: 10,
			bottom: Platform.OS === 'android' ? hp(10) : hp(15),
			zIndex: 2005,
			elevation: 2
		},
		_icon: { marginRight: '3%', marginTop: '2%', flex: 0.15, alignItems: 'center' },
		message: {
			fontFamily:'OpenSans-Medium', fontSize:15, color: COLORS.white, textTransform: 'capitalize', lineHeight: 18, letterSpacing: 0.16
		},
		_message: { flex: 0.9, paddingVertical: '4%' }
	});

	return (
		show ?
			<Animatable.View
				animation={animationStyle}
				iterationCount={1}
				//when the first animation end and the toast visible then after 3 secs 
				// change the animation to exist animation
				onAnimationEnd={(endState) => endState.finished && show && setExitAnimation()}
				style={styles.toast}>
				<TouchableHighlight
					underlayColor={COLORS.tomato}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles._icon}>
							{status === 'warning' ?
								<ICONS.FontAwesome name={'warning'}
									color={COLORS.white}
									size={30} />
								: status === 'error' ?
									<ICONS.AntDesign name="closecircle"
										color={COLORS.white}
										size={25} /> :
									<ICONS.MaterialIcons
										name={status === 'success' ? 'check-circle' : 'info'}
										color={COLORS.white}
										size={30} />}
						</View>
						<View style={styles._message}>
							<Text style={styles.message}>{message}</Text>
						</View>
						<View>
						</View>
					</View>
				</TouchableHighlight>
			</Animatable.View> : null
	);

}


