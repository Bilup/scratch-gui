import * as accentPurple from './accent/purple';
import * as accentBlue from './accent/blue';
import * as accentRed from './accent/red';
import * as accentOrange from './accent/orange';
import * as accentYellow from './accent/yellow';
import * as accentGreen from './accent/green';
import * as accentRainbow from './accent/rainbow';
import * as accentGreenTea from './accent/green-tea';
import * as accentPaleBlue from './accent/pale-blue';
import * as accentEggplantPurple from './accent/eggplant-purple';
import * as accentPink from './accent/pink';
import * as accentBi from './accent/bi';
import * as accentPan from './accent/pan';
import * as accentLesbian from './accent/lesbian';
import * as accentNonbinary from './accent/nonbinary';
import * as accentAce from './accent/ace';
import * as accentVaporwave from './accent/vaporwave';
import * as accentMatrix from './accent/matrix';
import * as accentHoney from './accent/honey';

const ACCENTS = [
    {
        name: 'Red',
        accent: accentRed,
        description: 'Red accent color',
        id: 'tw.accent.red'
    },
    {
        name: 'Orange',
        accent: accentOrange,
        description: 'Orange accent color',
        id: 'tw.accent.orange'
    },
    {
        name: 'Yellow',
        accent: accentYellow,
        description: 'Yellow accent color',
        id: 'tw.accent.yellow'
    },
    {
        name: 'Green',
        accent: accentGreen,
        description: 'Green accent color',
        id: 'tw.accent.green'
    },
    {
        name: 'Green Tea',
        accent: accentGreenTea,
        description: 'Green Tea accent color',
        id: 'tw.accent.green-tea'
    },
    {
        name: 'Pale Blue',
        accent: accentPaleBlue,
        description: 'Pale Blue accent color',
        id: 'tw.accent.pale-blue'
    },
    {
        name: 'Blue',
        accent: accentBlue,
        description: 'Blue accent color',
        id: 'tw.accent.blue'
    },
    {
        name: 'Purple',
        accent: accentPurple,
        description: 'Purple accent color',
        id: 'tw.accent.purple'
    },
    {
        name: 'Eggplant',
        accent: accentEggplantPurple,
        description: 'Eggplant accent color',
        id: 'tw.accent.eggplant-purple'
    },
    {
        name: 'Rainbow',
        accent: accentRainbow,
        description: 'Rainbow accent color',
        id: 'tw.accent.rainbow'
    },
    {
        name: 'Pink',
        accent: accentPink,
        description: 'Pink accent color',
        id: 'tw.accent.pink'
    },
    {
        name: 'Bi',
        accent: accentBi,
        description: 'Bi pride flag accent',
        id: 'mw.accent.bi'
    },
    {
        name: 'Pan',
        accent: accentPan,
        description: 'Pan pride flag accent',
        id: 'mw.accent.pan'
    },
    {
        name: 'Lesbian',
        accent: accentLesbian,
        description: 'Lesbian pride flag accent',
        id: 'mw.accent.lesbian'
    },
    {
        name: 'Nonbinary',
        accent: accentNonbinary,
        description: 'Nonbinary pride flag accent',
        id: 'mw.accent.nonbinary'
    },
    {
        name: 'Asexual',
        accent: accentAce,
        description: 'Asexual pride flag accent',
        id: 'mw.accent.asexual'
    },
    {
        name: 'Vaporwave',
        accent: accentVaporwave,
        description: 'Retro vaporwave gradient',
        id: 'mw.accent.vaporwave'
    },
    {
        name: 'Matrix',
        accent: accentMatrix,
        description: 'Digital rain green on black',
        id: 'mw.accent.matrix'
    },
    {
        name: 'Honey',
        accent: accentHoney,
        description: 'Warm golden honey gradient',
        id: 'mw.accent.honey'
    }
];

const ACCENT_GROUPS = [
    {
        label: {id: 'mw.accentGroup.colors', defaultMessage: 'Colors'},
        accents: ['red', 'orange', 'yellow', 'green', 'purple', 'blue', 'pink']
    },
    {
        label: {id: 'mw.accentGroup.pride', defaultMessage: 'Pride'},
        accents: ['rainbow', 'bi', 'pan', 'lesbian', 'nonbinary', 'asexual']
    },
    {
        label: {id: 'mw.accentGroup.themed', defaultMessage: 'Themed'},
        accents: ['vaporwave', 'matrix', 'honey']
    }
];

const ACCENT_MAP = {};
for (const accent of ACCENTS) {
    ACCENT_MAP[accent.name.toLowerCase()] = {
        ...accent.accent,
        defaultMessage: accent.name,
        description: accent.description,
        id: accent.id
    };
}
const ACCENT_DEFAULT = ACCENTS[5].name.toLowerCase();

export {
    ACCENTS,
    ACCENT_MAP,
    ACCENT_GROUPS,
    ACCENT_DEFAULT
};
