import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            {info.skills.map((skillGroup, index) => (
                <React.Fragment key={index}>
                    <p style={{color: info.baseColor}}> {skillGroup.category}</p>
                    <ul className={Style.skills}>
                        {skillGroup.items.map((skill, skillIndex) => <li key={skillIndex}>{skill}</li>)}
                    </ul>
                </React.Fragment>
            ))}
        </>;
    }

    function funFactsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd fun-facts
            </p>
            <p><span style={{color: info.baseColor}}>fun-facts <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.funFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
            <Terminal text={funFactsText()}/>
        </Box>
    )
}
