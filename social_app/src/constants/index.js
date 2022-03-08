import {FONTS, COLORS} from './theme'
import ICONS from './icons'
import {Dimensions} from 'react-native'

const {width, height}= Dimensions.get('screen');

const wp = widthPerc => {
	return  width* widthPerc /100;
}

const hp = heightPerc => {
	return height * heightPerc/100;
}
export {FONTS, ICONS,hp, wp, COLORS}