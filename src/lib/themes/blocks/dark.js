import {hex2hsv, hsv2hex} from '../../utils/color';

const blockColors = {
    motion: {
        primary: '#0F1E33',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#4C97FF'
    },
    looks: {
        primary: '#1E1433',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#9966FF'
    },
    sounds: {
        primary: '#291329',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#CF63CF'
    },
    control: {
        primary: '#332205',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#FFAB19'
    },
    event: {
        primary: '#332600',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#FFBF00'
    },
    sensing: {
        primary: '#12232A',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#5CB1D6'
    },
    pen: {
        primary: '#03251C',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#0fBD8C'
    },
    operators: {
        primary: '#112611',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#59C059'
    },
    data: {
        primary: '#331C05',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#FF8C1A'
    },
    data_lists: {
        primary: '#331405',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#FF661A'
    },
    more: {
        primary: '#331419',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#FF6680'
    },
    addons: {
        primary: '#0b3331',
        secondary: '#4C4C4C',
        tertiary: '#4C4C4C',
        quaternary: '#34e4d0'
    },
    text: 'rgba(255, 255, 255, .7)',
    textFieldText: '#E5E5E5',
    textField: '#4C4C4C',
    menuHover: 'rgba(255, 255, 255, 0.3)'
};

const extensions = {};

const customExtensionColors = {
    primary: primary => {
        const hsv = hex2hsv(primary);
        hsv[2] = Math.max(hsv[2] - 70, 20);
        return hsv2hex(hsv);
    },
    secondary: () => '#4C4C4C',
    tertiary: () => '#4C4C4C',
    quaternary: primary => primary,
    categoryIconBackground: primary => customExtensionColors.primary(primary),
    categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};

export {
    blockColors,
    extensions,
    customExtensionColors
};
