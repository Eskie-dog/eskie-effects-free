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
            '01:': {
                orange: `${path}/Aura/Fire/Aura_Fire_01_Orange.webm`,
            },
        },
        water: {
            '01:': {
                blue: `${path}/Aura/Water/Aura_Water_01_Blue.webm`,
            },
        },
        token: {
            generic: {
                '01': {
                    _markers: {
                        loop: { start: 500, end: 2500 }
                    },
                    red: `${path}/Aura/Token/Generic/Aura_Token_Generic_01_Red.webm`,
                },
                '02': {
                    _markers: {
                        loop: { start: 500, end: 2500 }
                    },
                    red: `${path}/Aura/Token/Generic/Aura_Token_Generic_02_Red.webm`,
                },
            },
        },
    };
    //--------------------
    //BUFF
    //--------------------
    database.buff = {
        one_shot: {
            attack: {
                red: `${path}/Buff/OneShot/Buff_Attack_Red.webm`,
            },
            defense: {
                blue: `${path}/Buff/OneShot/Buff_Defense_Blue.webm`,
            },
            health: {
                green: `${path}/Buff/OneShot/Buff_Health_Green.webm`,
            },
            simple: {
                green: `${path}/Buff/OneShot/Buff_Simple_Green.webm`,
            },
            sphere: {
                orange: `${path}/Buff/OneShot/Buff_Sphere_Orange.webm`,
            },
        },
        loop:{
           attack: {
                red: `${path}/Buff/Loop/Buff_Loop_Attack_Red.webm`,
            },
            defense: {
                blue: `${path}/Buff/Loop/Buff_Loop_Defense_Blue.webm`,
            },
            health: {
                green: `${path}/Buff/Loop/Buff_Loop_Health_Green.webm`,
            },
            simple: {
                green: `${path}/Buff/Loop/Buff_Loop_Simple_Green.webm`,
            },
            sphere: {
                orange: `${path}/Buff/Loop/Buff_Loop_Sphere_Orange.webm`,
            }, 
        },
    };
    //--------------------
    //BURN
    //--------------------
    database.burn = {
        embers: {
            orange: `${path}/Burn/Embers/Burn_Embers_Orange.webm`,
        },
        token_mask: {
            orange: {
                fast: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Fast.webm`,
                },
                normal: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Normal.webm`,
                },
                slow: {
                    '01': `${path}/Burn/Token_Mask/Burn_TokenMask_01_Orange_Slow.webm`,
                },                
            },
        },
    };
    //--------------------
    //CROSSHAIR
    //--------------------
    database.crosshair = {
        circle: {
            fantasy_01:{
                white:{
                    full:{
                        'radius_10ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_10ft.webm`,
                        'radius_20ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_20ft.webm`,
                        'radius_30ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_30ft.webm`,
                        'radius_60ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_60ft.webm`,
                    },
                    no_base:{
                        'radius_10ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_NoBase_10ft.webm`,
                        'radius_20ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_NoBase_20ft.webm`,
                        'radius_30ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_NoBase_30ft.webm`,
                        'radius_60ft': `${path}/Crosshair/Circle/Fantasy_01/Crosshair_Circle_Fantasy_01_White_NoBase_60ft.webm`,
                    },
                },
            },
        },
        cone:{
            thin:{
                fantasy_01:{
                    white:{
                        full:{
                            '15ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_15ft.webm`,
                            '30ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_30ft.webm`,
                            '60ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_60ft.webm`,
                            '90ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_90ft.webm`,
                        },
                        no_base:{
                            '15ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_NoBase_15ft.webm`,
                            '30ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_NoBase_30ft.webm`,
                            '60ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_NoBase_60ft.webm`,
                            '90ft': `${path}/Crosshair/Cone/Thin/Fantasy_01/Crosshair_Cone_Thin_Fantasy_01_White_NoBase_90ft.webm`,
                        },
                    },
                },
            },
            wide:{
                fantasy_01:{
                    white:{
                        full:{
                            '15ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_15ft.webm`,
                            '30ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_30ft.webm`,
                            '60ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_60ft.webm`,
                            '90ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_90ft.webm`,
                        },
                        no_base:{
                            '15ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_NoBase_15ft.webm`,
                            '30ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_NoBase_30ft.webm`,
                            '60ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_NoBase_60ft.webm`,
                            '90ft': `${path}/Crosshair/Cone/Wide/Fantasy_01/Crosshair_Cone_Wide_Fantasy_01_White_NoBase_90ft.webm`,
                        },
                    },
                },
            },
        },
        line:{
            generic_01:{
                white:{
                    '05ft': `${path}/Crosshair/Line/Generic_01/Crosshair_Line_Generic_01_White_05ft.webm`,
                    '15ft': `${path}/Crosshair/Line/Generic_01/Crosshair_Line_Generic_01_White_15ft.webm`,
                    '30ft': `${path}/Crosshair/Line/Generic_01/Crosshair_Line_Generic_01_White_30ft.webm`,
                    '60ft': `${path}/Crosshair/Line/Generic_01/Crosshair_Line_Generic_01_White_60ft.webm`,
                    '90ft': `${path}/Crosshair/Line/Generic_01/Crosshair_Line_Generic_01_White_90ft.webm`,
                },
            },
        },
        ray:{
            fantasy_01:{
                white:{
                    full:{
                        '05ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_05ft.webm`,
                        '15ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_15ft.webm`,
                        '30ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_30ft.webm`,
                        '60ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_60ft.webm`,
                        '90ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_90ft.webm`,
                    },
                    no_base:{
                        '05ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_NoBase_05ft.webm`,
                        '15ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_NoBase_15ft.webm`,
                        '30ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_NoBase_30ft.webm`,
                        '60ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_NoBase_60ft.webm`,
                        '90ft': `${path}/Crosshair/Ray/Fantasy_01/Crosshair_Ray_Fantasy_01_White_NoBase_90ft.webm`,
                    },
                },
            },
        },
    };
    //--------------------
    //EMOTE
    //--------------------
    database.emote = {
        angry: { 
            '01': `${path}/Emote/Emote_Angry.webm`,
        },
        blush: { 
            '01': {
                 _markers: {
                    loop: { start: 500, end: 1000 }
                },
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
            _markers: {
                loop: { start: 500, end: 1500 }
            },
            '01': `${path}/Emote/Emote_Disgusted.webm`,
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
            '01': `${path}/Emote/Emote_Nervous.webm` ,
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
            '01': `${path}/Emote/Emote_Surprised.webm`,
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
            },
            god_ray:{
                '01': {
                    white: `${path}/Environment/Lighting/God_Ray/GodRay_01_White.webm`,
                },
            },
            shine: {
                '01': {
                    gold: `${path}/Environment/Lighting/Shine/Shine_01_Gold.webm`,
                }, 
            },
        },
    };
    //--------------------
    //FIRE
    //--------------------
    database.fire = {
        '01': {
            orange: `${path}/Fire/Fire_01/Fire_01_Orange.webm`,
        },
        '02': {
            orange: `${path}/Fire/Fire_02/Fire_02_Orange.webm`,
        },
        '03': {
            _markers: {
                loop: { start: 500, end: 1500 }
            },
            orange: `${path}/Fire/Fire_03/Fire_03_Orange.webm`,
        },
    };
    //--------------------
    //LIGHTNING
    //--------------------
    database.lightning = {
        '01': {
            blue: `${path}/Lightning/Lightning_01/Lightning_01_Blue.webm`,
        },
        '02': {
            blue: `${path}/Lightning/Lightning_02/Lightning_02_Blue.webm`,
        },
        '03': {
            blue: `${path}/Lightning/Lightning_03/Lightning_03_Blue.webm`,
        },
        '04': {
            blue: `${path}/Lightning/Lightning_04/Lightning_04_Blue.webm`,
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
        },
    };
    //--------------------
    //NATURE
    //--------------------
    database.nature = {
        flower:{
            particle:{
                '01': {
                    pink: `${path}/Nature/Flower/Particle/Flower_Particle_01_Pink.webm`,
                },
            },
        },
    };
    //-------------------
    //OBJECTS
    //-------------------
    database.objects = {
        crashing_weapon: {
            _markers: {
                loop: { start: 1000, end: 4000 }    
            },
            sword: {
                yellow: {
                    '01': `${path}/Objects/Crashing_Weapon/Sword/Crashing_Weapon_Sword_01_Yellow.webm`,
                    '02': `${path}/Objects/Crashing_Weapon/Sword/Crashing_Weapon_Sword_02_Yellow.webm`,
                },
            },
        },
    };
    //--------------------
    //PARTICLE
    //--------------------
    database.particle = {
        '01': {
            one_shot: {
                white: `${path}/Particle/Particle_01/OneShot/Particle_OneShot_01_White.webm`,
            },
            loop: {
                white: `${path}/Particle/Particle_01/Loop/Particle_Loop_01_White.webm`,
            },
        },
        '02': {
           white: `${path}/Particle/Particle_02/Particle_Loop_02_White.webm`,
        },
        '03': {
            white: `${path}/Particle/Particle_03/Particle_03_White.webm`,
        },
        '04': {
            white: `${path}/Particle/Particle_04/Particle_04_White.webm`,
        },
    };
    //--------------------
    //Pulse
    //--------------------
    database.pulse = {
        energy: {
            '01': {
                yellow: `${path}/Pulse/Energy_01/Energy_Pulse_01_Yellow.webm`,
            },
            '02': {
                fast: {
                    yellow: `${path}/Pulse/Energy_02/Energy_Pulse_02_Yellow_Fast.webm`,
                },
                slow: {
                    yellow: `${path}/Pulse/Energy_02/Energy_Pulse_02_Yellow_Slow.webm`,
                },
            },
            '03': {
                fast: {
                    yellow: `${path}/Pulse/Energy_03/Energy_Pulse_03_Yellow_Fast.webm`,
                },
                slow: {
                    yellow: `${path}/Pulse/Energy_03/Energy_Pulse_03_Yellow_Slow.webm`,
                },
            },
            '04': {
                yellow: `${path}/Pulse/Energy_04/Energy_Pulse_04_Yellow.webm`,
            },
        },
    };
    //--------------------
    //SCREEN OVERLAY
    //--------------------
    database.screen_overlay = {
        bokeh:{
            gold: `${path}/Screen_Overlay/Bokeh/ScreenOverlay_Bokeh_Gold.webm`,
        },
        cinema_bars: {
            _markers: {
                loop: { start: 2000, end: 4000 }    
            },
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
        },
    };
    //--------------------
    //SLICE
    //--------------------
    database.slice = {
        '01': {
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
    };
    //--------------------
    //SMOKE
    //--------------------
    database.smoke = {
        '01': {
            white: `${path}/Smoke/Smoke_01/Smoke_01_White.webm`,
        },
        '02': {
            white: `${path}/Smoke/Smoke_02/Smoke_02_White.webm`,
        },
        '03': {
            white: `${path}/Smoke/Smoke_03/Smoke_03_White.webm`,
        },
        '04': {
            _markers: {
                loop: { start: 1000, end: 2000 }
            },
            white: `${path}/Smoke/Smoke_04/Smoke_04_White.webm`,
        },
        '05': {
            white: `${path}/Smoke/Smoke_05/Smoke_05_White.webm`,
        },
    };
    //--------------------
    //SOUND
    //--------------------
    database.sound = {
        roar: {
            '01': `${path}/Sound/Roar/Roar_01.webm`,
        },
    };
    //--------------------
    //STAR
    //--------------------
    database.star = {
        '01': {
            white: `${path}/Star/Star_01/Star_01_White.webm`,
        },
        '02': {
            white: `${path}/Star/Star_02/Star_02_White.webm`,
        },
        '03': {
            white: `${path}/Star/Star_03/Star_03_White.webm`,
        },
        shooting_star: {
            '01': {
                purple: `${path}/Star/Shooting_Star/Shooting_Star_01/Shooting_Star_01_Purple.webm`,
            },
        },
        twinkling_star: {
            '01': {
                white: `${path}/Star/Twinkling_Star/Twinkling_Star_01/Twinkling_Star_01_White.webm`,
            },
            '02': {
                white: `${path}/Star/Twinkling_Star/Twinkling_Star_02/Twinkling_Star_02_White.webm`,
            },
        },
    };
    //--------------------
    //SYMBOL   
    //--------------------
    database.symbol = {
        animal: {
            bear: {
                red: `${path}/Symbol/Animal/Bear/Animal_Symbol_Bear_Red.webm`,
            },
            eagle: {
                purple: `${path}/Symbol/Animal/Eagle/Animal_Symbol_Eagle_Purple.webm`,
            },
            elk: {
                yellow: `${path}/Symbol/Animal/Elk/Animal_Symbol_Elk_Yellow.webm`,
            },
            tiger: {
                orange: `${path}/Symbol/Animal/Tiger/Animal_Symbol_Tiger_Orange.webm`,
            },
            wolf: {
                green: `${path}/Symbol/Animal/Wolf/Animal_Symbol_Wolf_Green.webm`,
            },
        },
    };
    //--------------------
    //TEXTURE MASK
    //--------------------
    database.texture_mask = {
        energy: {
            '01': {
                green: `${path}/Texture_Mask/Energy_Texture/Energy_Texture_01_Green.webm`,
            },           
        },
        glitter: {
            '01': {
                white: {
                    full: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_White.webm`,
                    particles_only: `${path}/Texture_Mask/Glitter_Texture/Glitter_Texture_01_White_Particles.webm`,
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
    };
    //--------------------
    //WINGS
    //--------------------
    database.wings = {
        bird: {
            '01': `${path}/Wings/Wings_Bird_01.webm`,
        },
    };
    //--------------------
    //WOUNDS
    //--------------------
    database.wounds = {
        cut: {
            _markers: {
                loop: { start: 2000, end: 2500 }    
            },
            '01': `${path}/Wounds/Cut/Cut_01.webm`,
        },
    };
}