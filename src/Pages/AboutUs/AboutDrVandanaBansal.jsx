import React from 'react'

const AboutDrVandanaBansal = ({ data }) => {
    console.log(data)
    // const details = [
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg'
    //     },
    //     {
    //         s: 'gg
    //     },
    // ]
    return (
        <>
            {
            data === 'introduction' ? (
                <div>
                    <p>Introduction of Dr vandana Bansal</p>
                </div>
            ):
            data === 'profile' ? (
                <div>
                    <p>profile of Dr vandana Bansal</p>
                </div>
            ):
             
            data === 'objectives' ? (
                <div>
                    <p>Ovjectives of Dr vandana Bansal</p>
                </div>
            ):
            data === 'research' ? (
                <div>
                    <p>research of Dr vandana Bansal</p>
                </div>
            ):             
            data === 'achievements' ? (
                <div>
                    <p>achievements of Dr vandana Bansal</p>
                </div>
            ):             
            data === 'awards' ? (
                <div>
                    <p>awards of Dr vandana Bansal</p>
                </div>
            ):             
            data === 'membership' ? (
                <div>
                    <p>membership of Dr vandana Bansal</p>
                </div>
            ):             
            data === 'nationalconference' ? (
                <div>
                    <p>national confernce of Dr vandana Bansal</p>
                </div>
            ):             
            data === 'internationalconference' ? (
                <div>
                    <p>international Conference of Dr vandana Bansal</p>
                </div>
            ):
            data === 'workshop' ? (
                <div>
                    <p>workshop of Dr vandana Bansal</p>
                </div>
            ):
            data === 'otherachievements' ? (
                <div>
                    <p>otherachievements of Dr vandana Bansal</p>
                </div>
            ):
            data === 'visits' ? (
                <div>
                    <p>visits of Dr vandana Bansal</p>
                </div>
            ):
            (
                <div>
                    <p>---------------h-----</p>
                </div>
            )
            }

        </>



    )
}

export default AboutDrVandanaBansal