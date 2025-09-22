import { MODULE_NAME } from './settings.js';

export const database = {};

export async function createDatabase(moduleFolder) {

    const path = `${moduleFolder}/${MODULE_NAME}/assets`;

    database._templates = { 
    // Grid size, start point, end point
    default: [100, 0, 0],
    ranged: [200, 200, 200],
    line: [200, 200, 200],
    };
    
    //--------------------
    //AURA
    //--------------------
    database.aura = {
        fire: {
            orange: `${path}/Aura/Aura_Fire_Orange.webm`,
        },
        water: {
            blue: `${path}/Aura/Aura_Water_Blue.webm`,
        },
    };
    //--------------------
    //BUFF
    //--------------------
    database.buff = {
        one_shot: {
            attack: {
                blue: `${path}/Buff/OneShot/Buff_Attack_Blue.webm`,
                green: `${path}/Buff/OneShot/Buff_Attack_Green.webm`,
                orange: `${path}/Buff/OneShot/Buff_Attack_Orange.webm`,
                red: `${path}/Buff/OneShot/Buff_Attack_Red.webm`,
            },
            defense: {
                blue: `${path}/Buff/OneShot/Buff_Defense_Blue.webm`,
                green: `${path}/Buff/OneShot/Buff_Defense_Green.webm`,
                orange: `${path}/Buff/OneShot/Buff_Defense_Orange.webm`,
                red: `${path}/Buff/OneShot/Buff_Defense_Red.webm`,
            },
            health: {
                blue: `${path}/Buff/OneShot/Buff_Health_Blue.webm`,
                green: `${path}/Buff/OneShot/Buff_Health_Green.webm`,
                orange: `${path}/Buff/OneShot/Buff_Health_Orange.webm`,
                red: `${path}/Buff/OneShot/Buff_Health_Red.webm`,
            },
            simple: {
                blue: `${path}/Buff/OneShot/Buff_Simple_Blue.webm`,
                green: `${path}/Buff/OneShot/Buff_Simple_Green.webm`,
                orange: `${path}/Buff/OneShot/Buff_Simple_Orange.webm`,
                red: `${path}/Buff/OneShot/Buff_Simple_Red.webm`,
            },
            sphere: {
                blue: `${path}/Buff/OneShot/Buff_Sphere_Blue.webm`,
                green: `${path}/Buff/OneShot/Buff_Sphere_Green.webm`,
                orange: `${path}/Buff/OneShot/Buff_Sphere_Orange.webm`,
                red: `${path}/Buff/OneShot/Buff_Sphere_Red.webm`,
            },
        },
        loop:{
           attack: {
                blue: `${path}/Buff/Loop/Buff_Loop_Attack_Blue.webm`,
                green: `${path}/Buff/Loop/Buff_Loop_Attack_Green.webm`,
                orange: `${path}/Buff/Loop/Buff_Loop_Attack_Orange.webm`,
                red: `${path}/Buff/Loop/Buff_Loop_Attack_Red.webm`,
            },
            defense: {
                blue: `${path}/Buff/Loop/Buff_Loop_Defense_Blue.webm`,
                green: `${path}/Buff/Loop/Buff_Loop_Defense_Green.webm`,
                orange: `${path}/Buff/Loop/Buff_Loop_Defense_Orange.webm`,
                red: `${path}/Buff/Loop/Buff_Loop_Defense_Red.webm`,
            },
            health: {
                blue: `${path}/Buff/Loop/Buff_Loop_Health_Blue.webm`,
                green: `${path}/Buff/Loop/Buff_Loop_Health_Green.webm`,
                orange: `${path}/Buff/Loop/Buff_Loop_Health_Orange.webm`,
                red: `${path}/Buff/Loop/Buff_Loop_Health_Red.webm`,
            },
            simple: {
                blue: `${path}/Buff/Loop/Buff_Loop_Simple_Blue.webm`,
                green: `${path}/Buff/Loop/Buff_Loop_Simple_Green.webm`,
                orange: `${path}/Buff/Loop/Buff_Loop_Simple_Orange.webm`,
                red: `${path}/Buff/Loop/Buff_Loop_Simple_Red.webm`,
            },
            sphere: {
                blue: `${path}/Buff/Loop/Buff_Loop_Sphere_Blue.webm`,
                green: `${path}/Buff/Loop/Buff_Loop_Sphere_Green.webm`,
                orange: `${path}/Buff/Loop/Buff_Loop_Sphere_Orange.webm`,
                red: `${path}/Buff/Loop/Buff_Loop_Sphere_Red.webm`,
            }, 
        },
    };
    //--------------------
    //BURN
    //--------------------
    database.burn = {
        embers: {
            blue: `${path}/Burn/Embers/Burn_Embers_Blue.webm`,
            green: `${path}/Burn/Embers/Burn_Embers_Green.webm`,
            orange: `${path}/Burn/Embers/Burn_Embers_Orange.webm`,
            purple: `${path}/Burn/Embers/Burn_Embers_Purple.webm`,
            red: `${path}/Burn/Embers/Burn_Embers_Red.webm`,
            yellow: `${path}/Burn/Embers/Burn_Embers_Yellow.webm`,
        },
        token_mask: {
            blue: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Blue_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Blue_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Blue_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Blue_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Blue_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Blue_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Blue_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Blue_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Blue_Slow.webm`,
                },                
            },
            green: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Green_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Green_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Green_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Green_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Green_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Green_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Green_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Green_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Green_Slow.webm`,
                },                
            },
            orange: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Orange_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Orange_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Orange_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Orange_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Orange_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Orange_Slow.webm`,
                },                
            },
            purple: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Purple_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Purple_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Purple_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Purple_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Purple_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Purple_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Purple_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Purple_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Purple_Slow.webm`,
                },
            },
            red: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Red_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Red_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Red_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Red_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Red_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Red_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Red_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Red_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Red_Slow.webm`,
                },
            },
            yellow: {
                fast: {    
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Yellow_Fast.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Yellow_Fast.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Yellow_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Yellow_Normal.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Yellow_Normal.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Yellow_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Yellow_Slow.webm`,
                    '02': `${path}/Burn/Token_Mask/Burn_TokenMask_02_Yellow_Slow.webm`,
                    '03': `${path}/Burn/Token_Mask/Burn_TokenMask_03_Yellow_Slow.webm`,
                },
            },
        },
    };
    //--------------------
    //EMOTE
    //--------------------
    database.emote = {
        angry: { 
            '01': `${path}/Emote/Emote_Angry.webm` 
        },
        blush: { 
            '01': {
                 _markers: {
                    loop: { start: 500, end: 1000 }
                },
                pink: `${path}/Emote/Emote_Blush_Pink.webm`,
                red: `${path}/Emote/Emote_Blush_Red.webm`,
            },
        },
        cigarette: { 
            '01': `${path}/Emote/Emote_Cigarette.webm` 
        },
        cry: { 
            '01': `${path}/Emote/Emote_Cry.webm` 
        },
        disgusted: { 
            '01': `${path}/Emote/Emote_Disgusted.webm` 
        },
        drunk_bubbles: { 
            '01': `${path}/Emote/Emote_DrunkBubbles.webm` 
        },
        laugh: {
            '01': {
                blue: `${path}/Emote/Emote_Laugh_Blue.webm`,
                pink: `${path}/Emote/Emote_Laugh_Pink.webm`,
                yellow: `${path}/Emote/Emote_Laugh_Yellow.webm`,
            },
        },
        love: { 
            '01': `${path}/Emote/Emote_Love.webm` 
        },
        nervous: { 
            '01': `${path}/Emote/Emote_Nervous.webm` 
        },
        shout: { 
            '01': `${path}/Emote/Emote_Shout.webm` 
        },
        soul_sucked: { 
            '01': `${path}/Emote/Emote_SoulSucked.webm` 
        },
        surprised: {
            _markers: {
                loop: { start: 200, end: 400 }
            },
            '01': `${path}/Emote/Emote_Surprised.webm`
        },
        emote_bubble: {
            _markers: {
                loop: { start: 1000, end: 2500 }
            },
            confused: `${path}/Emote/Emote_Bubble/Emote_Bubble_Confused.webm`,
            smug: `${path}/Emote/Emote_Bubble/Emote_Bubble_Smug.webm`,
            thank_you: `${path}/Emote/Emote_Bubble/Emote_Bubble_ThankYou.webm`,
            wink: `${path}/Emote/Emote_Bubble/Emote_Bubble_Wink.webm`,
        },
    };
    //--------------------
    //ENVIRONMENT
    //--------------------
    database.environment = {
        lighting: {
            bokeh: {
                gold: {
                    few: `${path}/Environment/Lighting/Bokeh/Bokeh_Gold_Few.webm`,
                    many: `${path}/Environment/Lighting/Bokeh/Bokeh_Gold_Many.webm`,
                    large: `${path}/Environment/Lighting/Bokeh/Bokeh_Gold_Large.webm`,
                },
                orange: {
                    few: `${path}/Environment/Lighting/Bokeh/Bokeh_Orange_Few.webm`,
                    many: `${path}/Environment/Lighting/Bokeh/Bokeh_Orange_Many.webm`,
                    large: `${path}/Environment/Lighting/Bokeh/Bokeh_Orange_Large.webm`,
                },
                white: {
                    few: `${path}/Environment/Lighting/Bokeh/Bokeh_White_Few.webm`,
                    many: `${path}/Environment/Lighting/Bokeh/Bokeh_White_Many.webm`,
                    large: `${path}/Environment/Lighting/Bokeh/Bokeh_White_Large.webm`,
                },
            },
            shine: {
                '01': {
                    gold: `${path}/Environment/Lighting/Shine/Shine_01_Gold.webm`,
                    rainbow: `${path}/Environment/Lighting/Shine/Shine_01_Rainbow.webm`,
                }, 
            },
        },
    };
    //--------------------
    //FIRE
    //--------------------
    database.fire = {
        '01': {
            blue: `${path}/Fire/Fire_01/Fire_01_Blue.webm`,
            green: `${path}/Fire/Fire_01/Fire_01_Green.webm`,
            orange: `${path}/Fire/Fire_01/Fire_01_Orange.webm`,
            teal: `${path}/Fire/Fire_01/Fire_01_Teal.webm`,
            white: `${path}/Fire/Fire_01/Fire_01_White.webm`,
            colorless: `${path}/Fire/Fire_01/Fire_01_Colorless.webm`,
        },
        '02': {
            blue: `${path}/Fire/Fire_02/Fire_02_Blue.webm`,
            green: `${path}/Fire/Fire_02/Fire_02_Green.webm`,
            orange: `${path}/Fire/Fire_02/Fire_02_Orange.webm`,
            teal: `${path}/Fire/Fire_02/Fire_02_Teal.webm`,
            white: `${path}/Fire/Fire_02/Fire_02_White.webm`,
        },
        '03': {
            _markers: {
                loop: { start: 500, end: 1500 }
            },
            blue: `${path}/Fire/Fire_03/Fire_03_Blue.webm`,
            green: `${path}/Fire/Fire_03/Fire_03_Green.webm`,
            orange: `${path}/Fire/Fire_03/Fire_03_Orange.webm`,
            teal: `${path}/Fire/Fire_03/Fire_03_Teal.webm`,
            white: `${path}/Fire/Fire_03/Fire_03_White.webm`,
            redorange: `${path}/Fire/Fire_03/Fire_03_RedOrange.webm`,
        },
    };
    //--------------------
    //LIGHTNING
    //--------------------
    database.lightning = {
        '01': {
            blue: `${path}/Lightning/Lightning_01/Lightning_01_Blue.webm`,
            purple: `${path}/Lightning/Lightning_01/Lightning_01_Purple.webm`,
            teal: `${path}/Lightning/Lightning_01/Lightning_01_Teal.webm`,
            yellow: `${path}/Lightning/Lightning_01/Lightning_01_Yellow.webm`,
            colorless: `${path}/Lightning/Lightning_01/Lightning_01_Colorless.webm`,
        },
        '02': {
            blue: `${path}/Lightning/Lightning_02/Lightning_02_Blue.webm`,
            purple: `${path}/Lightning/Lightning_02/Lightning_02_Purple.webm`,
            teal: `${path}/Lightning/Lightning_02/Lightning_02_Teal.webm`,
            yellow: `${path}/Lightning/Lightning_02/Lightning_02_Yellow.webm`,
            colorless: `${path}/Lightning/Lightning_02/Lightning_02_Colorless.webm`,
        },
        '03': {
            blue: `${path}/Lightning/Lightning_03/Lightning_03_Blue.webm`,
            purple: `${path}/Lightning/Lightning_03/Lightning_03_Purple.webm`,
            teal: `${path}/Lightning/Lightning_03/Lightning_03_Teal.webm`,
            yellow: `${path}/Lightning/Lightning_03/Lightning_03_Yellow.webm`,
            colorless: `${path}/Lightning/Lightning_03/Lightning_03_Colorless.webm`,
        },
        '04': {
            blue: `${path}/Lightning/Lightning_04/Lightning_04_Blue.webm`,
            purple: `${path}/Lightning/Lightning_04/Lightning_04_Purple.webm`,
            teal: `${path}/Lightning/Lightning_04/Lightning_04_Teal.webm`,
            yellow: `${path}/Lightning/Lightning_04/Lightning_04_Yellow.webm`,
            colorless: `${path}/Lightning/Lightning_04/Lightning_04_Colorless.webm`,
        },
        lightning_bolt: {
            _template: 'line',
            blue: {
                '05ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Blue_05ft.webm`,
                '15ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Blue_15ft.webm`,
                '30ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Blue_30ft.webm`,
                '60ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Blue_60ft.webm`,
                '90ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Blue_90ft.webm`,
            },
            purple: {
                '05ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Purple_05ft.webm`,
                '15ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Purple_15ft.webm`,
                '30ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Purple_30ft.webm`,
                '60ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Purple_60ft.webm`,
                '90ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Purple_90ft.webm`,
            },
            teal: {
                '05ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Teal_05ft.webm`,
                '15ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Teal_15ft.webm`,
                '30ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Teal_30ft.webm`,
                '60ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Teal_60ft.webm`,
                '90ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Teal_90ft.webm`,
            },
            yellow: {
                '05ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Yellow_05ft.webm`,
                '15ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Yellow_15ft.webm`,
                '30ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Yellow_30ft.webm`,
                '60ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Yellow_60ft.webm`,
                '90ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Yellow_90ft.webm`,
            },
            colorless: {
                '05ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Colorless_05ft.webm`,
                '15ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Colorless_15ft.webm`,
                '30ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Colorless_30ft.webm`,
                '60ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Colorless_60ft.webm`,
                '90ft': `${path}/Lightning/Lightning_Bolt/Lightning_Bolt_Colorless_90ft.webm`,
            },
        },
    };
    //--------------------
    //PARTICLE
    //--------------------
    database.particle = {
        '01': {
            one_shot: {
                blue: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_Blue.webm`,
                green: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_Green.webm`,
                orange: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_Orange.webm`,
                red: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_Red.webm`,
                white: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_White.webm`,
            },
            loop: {
                blue: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_Blue.webm`,
                green: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_Green.webm`,
                orange: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_Orange.webm`,
                red: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_Red.webm`,
                white: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_White.webm`,
            },
        },
        '02': {
           blue: `${path}/Particle/Particle_02/Particle_Loop_02_Blue.webm`, 
           green: `${path}/Particle/Particle_02/Particle_Loop_02_Green.webm`,
           orange: `${path}/Particle/Particle_02/Particle_Loop_02_Orange.webm`,
           red: `${path}/Particle/Particle_02/Particle_Loop_02_Red.webm`,
           white: `${path}/Particle/Particle_02/Particle_Loop_02_White.webm`,
        },
        '03': {
            blue: `${path}/Particle/Particle_03/Particle_03_Blue.webm`,
            green: `${path}/Particle/Particle_03/Particle_03_Green.webm`,
            orange: `${path}/Particle/Particle_03/Particle_03_Orange.webm`,
            red: `${path}/Particle/Particle_03/Particle_03_Red.webm`,
            white: `${path}/Particle/Particle_03/Particle_03_White.webm`,
        },
    };
    //--------------------
    //Pulse
    //--------------------
    database.pulse = {
        energy: {
            '01': {
                blue: `${path}/Pulse/Energy_01/Energy_Pulse_01_Blue.webm`,
                green: `${path}/Pulse/Energy_01/Energy_Pulse_01_Green.webm`,
                orange: `${path}/Pulse/Energy_01/Energy_Pulse_01_Orange.webm`,
                purple: `${path}/Pulse/Energy_01/Energy_Pulse_01_Purple.webm`,
                red: `${path}/Pulse/Energy_01/Energy_Pulse_01_Red.webm`,
                yellow: `${path}/Pulse/Energy_01/Energy_Pulse_01_Yellow.webm`,
            },
            '02': {
                fast: {
                    blue: `${path}/Pulse/Energy_02/Energy_Pulse_02_Blue_Fast.webm`,
                    green: `${path}/Pulse/Energy_02/Energy_Pulse_02_Green_Fast.webm`,
                    orange: `${path}/Pulse/Energy_02/Energy_Pulse_02_Orange_Fast.webm`,
                    purple: `${path}/Pulse/Energy_02/Energy_Pulse_02_Purple_Fast.webm`,
                    red: `${path}/Pulse/Energy_02/Energy_Pulse_02_Red_Fast.webm`,
                    yellow: `${path}/Pulse/Energy_02/Energy_Pulse_02_Yellow_Fast.webm`,
                    white: `${path}/Pulse/Energy_02/Energy_Pulse_02_White_Fast.webm`,
                },
                slow: {
                    blue: `${path}/Pulse/Energy_02/Energy_Pulse_02_Blue_Slow.webm`,
                    green: `${path}/Pulse/Energy_02/Energy_Pulse_02_Green_Slow.webm`,
                    orange: `${path}/Pulse/Energy_02/Energy_Pulse_02_Orange_Slow.webm`,
                    purple: `${path}/Pulse/Energy_02/Energy_Pulse_02_Purple_Slow.webm`,
                    red: `${path}/Pulse/Energy_02/Energy_Pulse_02_Red_Slow.webm`,
                    yellow: `${path}/Pulse/Energy_02/Energy_Pulse_02_Yellow_Slow.webm`,
                    white: `${path}/Pulse/Energy_02/Energy_Pulse_02_White_Slow.webm`,
                },
            },
            '03': {
                fast: {
                    blue: `${path}/Pulse/Energy_03/Energy_Pulse_03_Blue_Fast.webm`,
                    green: `${path}/Pulse/Energy_03/Energy_Pulse_03_Green_Fast.webm`,
                    orange: `${path}/Pulse/Energy_03/Energy_Pulse_03_Orange_Fast.webm`,
                    purple: `${path}/Pulse/Energy_03/Energy_Pulse_03_Purple_Fast.webm`,
                    red: `${path}/Pulse/Energy_03/Energy_Pulse_03_Red_Fast.webm`,
                    yellow: `${path}/Pulse/Energy_03/Energy_Pulse_03_Yellow_Fast.webm`,
                    white: `${path}/Pulse/Energy_03/Energy_Pulse_03_White_Fast.webm`,
                },
                slow: {
                    blue: `${path}/Pulse/Energy_03/Energy_Pulse_03_Blue_Slow.webm`,
                    green: `${path}/Pulse/Energy_03/Energy_Pulse_03_Green_Slow.webm`,
                    orange: `${path}/Pulse/Energy_03/Energy_Pulse_03_Orange_Slow.webm`,
                    purple: `${path}/Pulse/Energy_03/Energy_Pulse_03_Purple_Slow.webm`,
                    red: `${path}/Pulse/Energy_03/Energy_Pulse_03_Red_Slow.webm`,
                    yellow: `${path}/Pulse/Energy_03/Energy_Pulse_03_Yellow_Slow.webm`,
                    white: `${path}/Pulse/Energy_03/Energy_Pulse_03_White_Slow.webm`,
                },
            },
        },
    };
    //--------------------
    //SCREEN OVERLAY
    //--------------------
    database.screen_overlay = {
        cinema_bars: {
            '01': `${path}/Screen_Overlay/Cinema_Bars/Cinema_Bars.webm`,
        },
        embers: {
            '01': `${path}/Screen_Overlay/Embers/ScreenOverlay_Embers.webm`,
        },
        speed_lines: {
            center: {
                '01': {
                    black: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Black_01.webm`,
                    white: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_White_01.webm`,
                },
                '02': {
                    black: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Black_02.webm`,
                    white: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_White_02.webm`,
                },
            },
            horizontal: {
                '01': {
                    black: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Horizontal_Black_01.webm`,
                    white: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Horizontal_White_01.webm`,
                },
            },
            vertical: {
                '01': {
                    black: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Vertical_Black_01.webm`,
                    white: `${path}/Screen_Overlay/Speed_Lines/SpeedLines_Vertical_White_01.webm`,
                },
            },
        },
    };
    //--------------------
    //SLICE
    //--------------------
    database.slice = {
        '01': {
            black: {
                blue: `${path}/Slice/Slice_01/Slice_01_Black_Blue.webm`,
                green: `${path}/Slice/Slice_01/Slice_01_Black_Green.webm`,
                orange: `${path}/Slice/Slice_01/Slice_01_Black_Orange.webm`,
                purple: `${path}/Slice/Slice_01/Slice_01_Black_Purple.webm`,
                red: `${path}/Slice/Slice_01/Slice_01_Black_Red.webm`,
                yellow: `${path}/Slice/Slice_01/Slice_01_Black_Yellow.webm`,
                rainbow: `${path}/Slice/Slice_01/Slice_01_Black_Rainbow.webm`,
                colorless: `${path}/Slice/Slice_01/Slice_01_Black_Colorless.webm`,
            },
            color: {
                blue: `${path}/Slice/Slice_01/Slice_01_Color_Blue.webm`,
                green: `${path}/Slice/Slice_01/Slice_01_Color_Green.webm`,
                orange: `${path}/Slice/Slice_01/Slice_01_Color_Orange.webm`,
                purple: `${path}/Slice/Slice_01/Slice_01_Color_Purple.webm`,
                red: `${path}/Slice/Slice_01/Slice_01_Color_Red.webm`,
                yellow: `${path}/Slice/Slice_01/Slice_01_Color_Yellow.webm`,
                rainbow: `${path}/Slice/Slice_01/Slice_01_Color_Rainbow.webm`,
            },
            white: {
                blue: `${path}/Slice/Slice_01/Slice_01_White_Blue.webm`,
                green: `${path}/Slice/Slice_01/Slice_01_White_Green.webm`,
                orange: `${path}/Slice/Slice_01/Slice_01_White_Orange.webm`,
                purple: `${path}/Slice/Slice_01/Slice_01_White_Purple.webm`,
                red: `${path}/Slice/Slice_01/Slice_01_White_Red.webm`,
                yellow: `${path}/Slice/Slice_01/Slice_01_White_Yellow.webm`,
                rainbow: `${path}/Slice/Slice_01/Slice_01_White_Rainbow.webm`,
                colorless: `${path}/Slice/Slice_01/Slice_01_White_Colorless.webm`,
            },
        },
        '01_ranged': {
            _template: 'ranged',
            black: {
                blue: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_90ft.webm`,
                },
                green: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Green_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Green_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Green_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Green_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Green_90ft.webm`,
                },
                orange: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Orange_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Orange_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Orange_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Orange_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Orange_90ft.webm`,
                },
                purple: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Purple_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Purple_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Purple_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Purple_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Purple_90ft.webm`,
                },
                red: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Red_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Red_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Red_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Red_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Red_90ft.webm`,
                },
                yellow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Yellow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Yellow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Yellow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Yellow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Yellow_90ft.webm`, 
                },
                rainbow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Rainbow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Rainbow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Rainbow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Rainbow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Rainbow_90ft.webm`,
                },
                colorless: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Colorless_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Colorless_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Colorless_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Colorless_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Colorless_90ft.webm`,
                },
            },
            color: {
                blue: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Black_Blue_90ft.webm`,
                },
                green: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Green_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Green_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Green_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Green_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Green_90ft.webm`,
                },
                orange: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Orange_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Orange_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Orange_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Orange_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Orange_90ft.webm`,
                },
                purple: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Purple_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Purple_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Purple_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Purple_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Purple_90ft.webm`,
                },
                red: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Red_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Red_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Red_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Red_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Red_90ft.webm`,
                },
                yellow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Yellow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Yellow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Yellow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Yellow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Yellow_90ft.webm`,
                },
                rainbow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Rainbow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Rainbow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Rainbow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Rainbow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_Color_Rainbow_90ft.webm`,
                },
            },
            white: {
                blue: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Blue_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Blue_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Blue_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Blue_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Blue_90ft.webm`,
                },
                green: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Green_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Green_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Green_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Green_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Green_90ft.webm`,
                },
                orange: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Orange_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Orange_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Orange_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Orange_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Orange_90ft.webm`,
                },
                purple: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Purple_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Purple_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Purple_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Purple_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Purple_90ft.webm`,
                },
                red: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Red_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Red_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Red_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Red_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Red_90ft.webm`,
                },
                yellow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Yellow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Yellow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Yellow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Yellow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Yellow_90ft.webm`,
                },
                rainbow: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Rainbow_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Rainbow_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Rainbow_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Rainbow_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Rainbow_90ft.webm`,
                },
                colorless: {
                    '05ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Colorless_05ft.webm`,
                    '15ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Colorless_15ft.webm`,
                    '30ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Colorless_30ft.webm`,
                    '60ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Colorless_60ft.webm`,
                    '90ft': `${path}/Slice/Slice_01_Ranged/Slice_01_Ranged_White_Colorless_90ft.webm`,
                },                        
            },
        },
    };
    //--------------------
    //SMOKE
    //--------------------
    database.smoke = {
        '01': {
            black: `${path}/Smoke/Smoke_01/Smoke_01_Black.webm`,
            tan: `${path}/Smoke/Smoke_01/Smoke_01_Tan.webm`,
            white: `${path}/Smoke/Smoke_01/Smoke_01_White.webm`,
        },
        '02': {
            black: `${path}/Smoke/Smoke_02/Smoke_02_Black.webm`,
            tan: `${path}/Smoke/Smoke_02/Smoke_02_Tan.webm`,
            white: `${path}/Smoke/Smoke_02/Smoke_02_White.webm`,
        },
        '03': {
            black: `${path}/Smoke/Smoke_03/Smoke_03_Black.webm`,
            tan: `${path}/Smoke/Smoke_03/Smoke_03_Tan.webm`,
            white: `${path}/Smoke/Smoke_03/Smoke_03_White.webm`,
        },
        '04': {
            _markers: {
                loop: { start: 1000, end: 2000 }
            },
            black: `${path}/Smoke/Smoke_04/Smoke_04_Black.webm`,
            tan: `${path}/Smoke/Smoke_04/Smoke_04_Tan.webm`,
            white: `${path}/Smoke/Smoke_04/Smoke_04_White.webm`,
        },
        '05': {
            black: `${path}/Smoke/Smoke_05/Smoke_05_Black.webm`,
            tan: `${path}/Smoke/Smoke_05/Smoke_05_Tan.webm`,
            white: `${path}/Smoke/Smoke_05/Smoke_05_White.webm`,
        },
    };
    //--------------------
    //STAR
    //--------------------
    database.star = {
        '01': {
            blue: `${path}/Star/Star_01/Star_01_Blue.webm`,
            green: `${path}/Star/Star_01/Star_01_Green.webm`,
            orange: `${path}/Star/Star_01/Star_01_Orange.webm`,
            purple: `${path}/Star/Star_01/Star_01_Purple.webm`,
            red: `${path}/Star/Star_01/Star_01_Red.webm`,
            yellow: `${path}/Star/Star_01/Star_01_Yellow.webm`,
            white: `${path}/Star/Star_01/Star_01_White.webm`,
            colorless: `${path}/Star/Star_01/Star_01_Colorless.webm`,
        },
        '02': {
            blue: `${path}/Star/Star_02/Star_02_Blue.webm`,
            green: `${path}/Star/Star_02/Star_02_Green.webm`,
            orange: `${path}/Star/Star_02/Star_02_Orange.webm`,
            purple: `${path}/Star/Star_02/Star_02_Purple.webm`,
            red: `${path}/Star/Star_02/Star_02_Red.webm`,
            yellow: `${path}/Star/Star_02/Star_02_Yellow.webm`,
            white: `${path}/Star/Star_02/Star_02_White.webm`,
            colorless: `${path}/Star/Star_02/Star_02_Colorless.webm`,
        },
        '03': {
            blue: `${path}/Star/Star_03/Star_03_Blue.webm`,
            green: `${path}/Star/Star_03/Star_03_Green.webm`,
            orange: `${path}/Star/Star_03/Star_03_Orange.webm`,
            purple: `${path}/Star/Star_03/Star_03_Purple.webm`,
            red: `${path}/Star/Star_03/Star_03_Red.webm`,
            yellow: `${path}/Star/Star_03/Star_03_Yellow.webm`,
            white: `${path}/Star/Star_03/Star_03_White.webm`,
        },
        shooting_star: {
            '01': {
                blue: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_Blue.webm`,
                purple: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_Purple.webm`,
                white: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_White.webm`,
                yellow: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_Yellow.webm`,
                colorless: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_Colorless.webm`,
            },
            '02': `${path}/Star/Shooting_Star/Shooting_Star_02/Shooting_Star_02.webm`,
        },
        twinkling_star: {
            '01': {
                blue: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Blue.webm`,
                green: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Green.webm`,
                orange: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Orange.webm`,
                purple: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Purple.webm`,
                red: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Red.webm`,
                white: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_White.webm`,
                yellow: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Yellow.webm`,
                bluewhite: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_BlueWhite.webm`,
                greenyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_GreenYellow.webm`,
                orangeyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_OrangeYellow.webm`,
                purpleyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_PurpleYellow.webm`,
                tealyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_TealYellow.webm`,
                yellowwhite: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_YellowWhite.webm`,
                colorless: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_Colorless.webm`,
            },
            '02': {
                blue: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Blue.webm`,
                green: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Green.webm`,
                orange: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Orange.webm`,
                purple: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Purple.webm`,
                red: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Red.webm`,
                teal: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Teal.webm`,
                yellow: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Yellow.webm`,
                white: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_White.webm`,
                orangeyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_OrangeYellow.webm`,
                pinkyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_PinkYellow.webm`,
                tealyellow: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_TealYellow.webm`,
                colorless: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_Colorless.webm`,
            },
        },
    };
    //--------------------
    //SYMBOL   
    //--------------------
    database.symbol = {
        animal: {
            bear: {
                blue: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Blue.webm`,
                green: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Green.webm`,
                orange: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Orange.webm`,
                purple: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Purple.webm`,
                red: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Red.webm`,
                yellow: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Yellow.webm`,
            },
            eagle: {
                blue: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Blue.webm`,
                green: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Green.webm`,
                orange: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Orange.webm`,
                purple: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Purple.webm`,
                red: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Red.webm`,
                yellow: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Yellow.webm`,
            },
            elk: {
                blue: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Blue.webm`,
                green: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Green.webm`,
                orange: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Orange.webm`,
                purple: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Purple.webm`,
                red: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Red.webm`,
                yellow: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Yellow.webm`,
            },
            tiger: {
                blue: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Blue.webm`,
                green: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Green.webm`,
                orange: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Orange.webm`,
                purple: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Purple.webm`,
                red: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Red.webm`,
                yellow: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Yellow.webm`,
            },
            wolf: {
                blue: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Blue.webm`,
                green: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Green.webm`,
                orange: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Orange.webm`,
                purple: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Purple.webm`,
                red: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Red.webm`,
                yellow: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Yellow.webm`,
            },
        },
    };
    //--------------------
    //TEXTURE MASK
    //--------------------
    database.texture_mask = {
        energy: {
            '01': {
                blue: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Blue.webm`,
                green: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Green.webm`,
                orange: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Orange.webm`,
                purple: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Purple.webm`,
                red: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Red.webm`,
                white: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_White.webm`,
                yellow: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Yellow.webm`,
            },           
        },
        glitter: {
            '01': {
                blue: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Blue.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Blue_Particles.webm`,
                },
                green: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Green.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Green_Particles.webm`,
                },
                orange: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Orange.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Orange_Particles.webm`,
                },
                purple: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Purple.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Purple_Particles.webm`,
                },
                red: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Red.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Red_Particles.webm`,
                },
                white: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_White.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_White_Particles.webm`,
                },
                yellow: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Yellow.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_Yellow_Particles.webm`,
                },
                blue_white: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_BlueWhite.webm`,
                },
                green_yellow: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_GreenYellow.webm`,
                },
                purple_yellow: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_PurpleYellow.webm`,
                },
            },
        },
    };
    //--------------------
    //VELOCITY 
    //--------------------
    database.velocity = {
        '01': {
            white: `${path}/Velocity/Velocity_01_White.webm`,
        },
        '02': {
            _markers: {
                loop: { start: 500, end: 1500 }
            },            
            white: `${path}/Velocity/Velocity_02_White.webm`,
        },
    };
    //--------------------
    //WINGS
    //--------------------
    database.wings = {
        angel: {
            '01': `${path}/Wings/Wings_Angel_01.webm`,
        },
        bird: {
            '01': `${path}/Wings/Wings_Bird_01.webm`,
            '02': `${path}/Wings/Wings_Bird_02.webm`,
        },
        devil: {
            '01': `${path}/Wings/Wings_Devil_01.webm`,
        },
    };


}