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
                        <Introduction />
                    </div>
                ) :
                    data === 'profile' ? (
                        <div>
                            <Profile />
                        </div>
                    ) :

                        data === 'objectives' ? (
                            <div>
                                <Objectives />
                            </div>
                        ) :
                            data === 'research' ? (
                                <div>
                                    <Research />
                                </div>
                            ) :
                                data === 'achievements' ? (
                                    <div>
                                        <Achievements />
                                    </div>
                                ) :
                                    data === 'awards' ? (
                                        <div>
                                            <Awards />
                                        </div>
                                    ) :
                                        data === 'membership' ? (
                                            <div>
                                                <Membership />
                                            </div>
                                        ) :
                                            data === 'nationalconference' ? (
                                                <div>
                                                    <NationalConference />
                                                </div>
                                            ) :
                                                data === 'internationalconference' ? (
                                                    <div>
                                                        <InternationalConference />
                                                    </div>
                                                ) :
                                                    data === 'workshop' ? (
                                                        <div>
                                                            <Workshop />
                                                        </div>
                                                    ) :
                                                        data === 'otherachievements' ? (
                                                            <div>
                                                                <OtherAchievements />
                                                            </div>
                                                        ) :
                                                            data === 'visits' ? (
                                                                <div>
                                                                    <Visits />
                                                                </div>
                                                            ) :
                                                                (
                                                                    <div>
                                                                        <p className='my-2'>---------------h-----</p>
                                                                    </div>
                                                                )
            }

        </>



    )
}

export default AboutDrVandanaBansal

const Introduction = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Introduction of Dr vandana Bansal inside a component</h1>
            <p className='my-3'>
                DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.
            </p>
            <p className='my-3'>
                The old adage “every big success has a small beginning” is what that truly defines the unflagging efforts of the doctor couple who disowned the proverbial status of ‘born with silver spoon’ and nestled in one of the oldest religious and historical cities-Allahabad to ‘serve the poor’.
            </p>
            <p className='my-3'>
                Their mettle was more appreciated specially at the time in 80s when the young technocrats like doctors and engineers had a craze to go aboard in the pursuit of joining the ‘neo-rich club’. Overlapping with apprehension and hope, Dr. Vandana Bansal, an infertility expert and Dr. A.K. Bansal, a laparoscopic surgeon decided to swim against the tide by setting up a small clinic in Sangam city.
            </p>
            <p className='my-3'>
                The young medico couple had set up a small 10 bedded clinic in Allahabad in 1988. While medicine (treating patients) is the duo’s karma, dreaming about establishing a chain of world class hospitals is their vision.
            </p>
            <p className='my-3'>
                Dreamt of setting up a hospital on the lines of Mayo Hospital of USA in Allahabad. Dr. Vandana restless medico have an excellent team and thus have been able to write what one calls-the success story”.
            </p>
        </>
    )
}
const Profile = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Profile of Dr vandana Bansal inside a component</h1>

            <p className='my-3'>
                Dr. Vandana plays the role of visionary and Dr. A.K. Bansal executes these plans and ideas. Passionate for innovations and experimenting with new ideas. On the other hand Dr. A.K. Bansals foresightedness and hard work makes it possible to realize the goals and plans.

            </p>
            <p className='my-3'>
                Their sheer hard work and determination finally bore the results with world class 500 bed Jeevan Jyoti Hospital and Arpit Test Tube Baby Center, the brain child of infertility expert and senior gynaecologist Dr. Vandana S. Bansal and laparoscopic surgeon Dr. A.K. Bansal. The duo has made the Arpit Test Tube Baby Center, a pet word for every woman who wants a baby. With international success rate, around 3,000 couples have so far been returned from the center with a smile on their faces and baby in their lap within the span of 13 years. The center has patients coming from Gulf Countries, Middle East and European countries.
            </p>
            <p className='my-3'>
                Guru Gobind Singh Memorial “Vandana Women’s Superspecialty Hospital” Arpit International Fertility Institute & Test Tube Baby Centre in Allahabad, a new venture of the Jeevan Jyoti Group has been setup under the active supervision of Dr. Vandana Bansal. Updating with advancements in the field, the couple do not miss any national or international seminar and have also organized a good number of international and national seminars on various aspects of medical sciences.
            </p>
            <p className='my-3'>
                The group has a nursing and paramedical school and a public school. It is planning to setup a chain of infertility clinics across the country. Besides these, work on setting up a university is on. A lot of research is being done in the field of infertility management by Dr. Vandana and her team. It is because of her research work and sincerity that Dr. Vandana has received so many awards including Rashtriya Ratna.
            </p>
            <p className='my-3'>
                Jeevan Jyoti Hospital, Allahabad has successfully set the Guinness New World Record of in relation to operation on behalf of 10 years old girl on 13th April 2011 in a seven hours long operation at Jeevan Jyoti Hospital, Allahabad. The most hydatid cyst removed is 296 by our Jeevan Jyoti Hospital, Allahabad India on 13th April 2011.
            </p>
            <p className='my-3'>
                Guinness World Record (GWR) made at Jeevan Jyoti Hospital, Allahabad (JJH) in cooperation with Jeevan Jyoti Research Centre (RC) and Jeevan Jyoti Charitable Trust, Allahabad (JJCT).
            </p>
            <p className='my-3'>
                MADAM TARIKA VARA
                17 HANOVER SQUARE, LONDON CAME
                VIA DUBAI TO PRESENT
                INTERNATIONAL AWARD GUINNESS BOOK OF WORLD RECORD
                TO
                DR. A.K. BANSAL of JEEVAN JYOTI HOSPITAL, ALLAHABAD
                DR. VANDANA BANSAL ON 09TH NOVEMBER 2012.
            </p>
            <p className='my-3'>
                The creators of world record is Jeevan Jyoti Group of Hospitals, Allahabad. When it comes to healthcare potential, U.P. cannot be found lacking, in the world scenario. But this potential has meaning only if supported by opportunity. Where Dr. A.K. Bansal & Dr. Vandana Bansal succeeded from creating new records, bring development to the existing infrastructures in healthcare, helped people of not only Uttar Pradesh but whole India and abroad named and famed and leaving no stones unturned to help Uttar Pradesh and India prosper in healthcare projects.
            </p>
            <p className='my-3'>
                We all know that, humble way of thanking for those who are making sure that our Uttar Pradesh and our nation is moving forwards towards healthcare projects for a better tomorrow are working tirelessly in the field of health.
            </p>
            <p className='my-3'>
                Allahabad, one of the large cities of U.P. state of India, is in global map for Maha Kumbh, garlanded by three rivers The Ganga, The Yamuna and the Mythical Saraswati (SANGAM), is famous for its rich intellectual past heritage and for giving in our country and to the world several eminent personalities in different walks of life. As Allahabad is significant so also Jeevan Jyoti Group of Hospitals, its research centre and charitable trust (SANGAM) excelled in health scenario which got place in Guinness World Record has been awarded the distinction of being receiver of Guinness World Record certificate.
            </p>
            <p className='my-3'>
                Pt. Keshri Nath Tripathi earlier Sr. Advocate of Hon’ble High Court Allahabad, speaker of Vidhan Sabha Uttar Pradesh, Governor of West Bengal has inaugurated and participated in many programmes of Jeevan Jyoti Group of Hospitals and appreciated endevours of Dr. A.K. Bansal and Dr. Vandana Bansal.
            </p>
        </>
    )
}
const Objectives = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Objectives of Dr vandana Bansal inside a component</h1>

            <p className='my-3'> Objectives in the Jeevan Jyoti Hospital DGO, DCh & DNB courses & apprenticeship training vocational nursing, paramedical setup</p>
            <ul className='list-disc '>
                <li>To prove for instruction and training in such branches of medicine and Allied sciences, as may be considered suitable and to make provision for research and for the advancement and dissemination of knowledge in Health Sciences, striving to maintain at all times highest possible standards of excellence. DGO, DCh & DNB courses also incorporated apprenticeship training vocational.</li>
                <li>To institute and award degrees, diplomas, certificates and other academic distinctions for persons who shall have pursued approved courses of study in college and services rendered in hospital.</li>
                <li>To develop, upgrade and start departments in medical specialties as may be required and to provide instruction for such courses of study as it may determine.</li>
                <li>To hold examinations and to confer certificates or other distinctions under conditions as may be prescribed by state government and faculty.</li>
                <li>To prescribe conditions under which the award of any title, diploma and other academic distinctions may be withheld to maintain discipline.</li>
                <li>To institute maintain and administer colleges, hospitals and laboratories and institutes of research, libraries or other institutions necessary to carry out the objects of the organization.</li>
                <li>To institute and award fellowships, scholarships, studentships, student medals and prizes.</li>
                <li>To establish maintain and administer hostels.</li>
                <li>To exercise such control over the students of the college as well secure their health well being and discipline and to exercise through the affiliated institute.</li>
                <li>To accept hold and manage any endowments donations or funds which may become vested in it for the purpose the institutes by grant testamentary disposition or otherwise, and to invest such endowments.</li>
                <li>To undertake publication of works of merit and research pertaining to health sciences.</li>
                <li>To organize regulate and control activities of hospitals.</li>
                <li>To co-operate with other academic institutions and hospitals and AMA and Blood Banks.</li>
                <li>To establish and maintain libraries, research station, museums and press and publication bureau.</li>
                <li>To establish posts and to appoint suitable persons to such posts as consultants for the development of hospital.</li>
                <li>To award prizes and medals to deserving students. On the basis of approved endowments; and</li>
                <li>To generally to do such other acts or make such other provisions as may be deemed necessary or desirable to further the objects of the institute.</li>
            </ul>
        </>
    )
}
const Research = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Research of Dr vandana Bansal inside a component</h1>

            <ul className='list-disc '>
                <li>Investigator, Phase III study on sildenafil citrate for Unichem laboratories, 2000. Crash-I.</li>
                <li>Investigator, Phase III study on sildenafil citrate for Ranbaxy laboratories, 2000 . Crash-II.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal, Ajay Kumar. Identification of Hepatitis B Virus Pre-Core Mutant and Association with HBV Genotype by PCR- RFLP in Patients Suffering From Chronic Liver Disease, Uttar Pradesh: North India. Int J Health Sci Res. 2014;4(9):216-223.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal, Ajay Kumar, Mamta Singh. Association of Oncogenic Viruses in Liver Cirrhosis: North India. Int J Health Sci Res. 2014;4(9):224-229.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal, Ajay Kumar. Liver abscess: catheter drainage v/s needle aspiration. Int Surg J. 2015 Feb;2(1):20-25.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal, Ajay Kumar. Comparison between bipolar vessel sealer (LigaSure vessel sealer) and harmonic scalpel in total laparoscopic hysterectomy. Int J Reprod Contracept Obstet Gynecol. 2014 Dec;3(4):1006-1009.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal, Ajay Kumar Gallbladder Carcinoma: Clinical Profile and its Management. Indian Journal of Applied Research. 2015, Vol 5 (4): 857-861.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal and Ajay Kumar. Risk factor associated with gallbladder malignancy in North India: a prospective study. International Journal of Innovation Sciences and Research. Vol.4 (2): 072-075.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal and Ajay Kumar. Seropevalence of HBV in Pregnant Women and its Co-infection with HCV & HIV. Int. J. of Recent Scientific Research. 2015. Vol. 6 (4): 3590-3593.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal. Efficacy of SEVISTA (Ormeloxifen) in treatment of mastalgia and fibrocystic breast disease. Int J Reprod Contracept Obstet Gynecol. 2015.Vol 4(4): 1057-1060.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal. Effectiveness of L-arginine in Oligohydramnios on amniotic fluid index. World J of Pharmaceutical Research. 2015. Vol 4(8): 1354-1358.</li>
                <li>Vandana Bansal, Arpit Bansal, Ashwani Kumar Bansal and Ajay Kumar. Experience with splenic trauma in Jeevan Jyoti Hospital, Allahabad, U.P.,India. International Journal of Developmental Research.2015. Vol(5):5510-5513.</li>
                <li>Dr. Vandana Bansal, Dr. Arpit Bansal, Dr. Ashwani Kumar Bansal, Dr. Mamta Singh. Spontaneous Chylous Ascites after Laparoscopic Cholecystectomy: A case report. Int Surg J (Accepted)</li>
            </ul>
        </>
    )
}
const Achievements = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Achievements of Dr vandana Bansal inside a component</h1>

            <h2>Major Achievements</h2>
            <ul className='list-disc '>
                <li>
                    1. The Hospital has introduced Bar Coding System in hospital. By this hospital hopes to eliminate/minimize the human involvement and reduce the time taken for the emergency treatment.
                </li>
                <li>
                    2. Promoting youth activities like NSS, Culture and Sports as Co-curricular activities bringing Medicos closer to the society in cooperation with Khelgaon Gymnastics Allahabad.
                </li>
            </ul>
            <p className='my-3'>
                Experienced excellent consultant staffs headed the Directors towards achieving excellence setting unique goals and application towards improvement with the administration acumen they have made the hospital sail smoothly with a wisdom and gait of an elephant organization royal march is on.
            </p>

            <h3>NATIONAL TRAINING</h3>
            <p className='my-3'>
                She was trained in Advanced Laparoscopic & Hysteroscopy training programme, including model sessions, Animal laboratory & Real time operations. in Oct-1994.
            </p>

            <h2>INTERNATIONAL QUALIFICATIONS</h2>
            <ul className='list-disc '>
                <li>
                    She got training in Infertility & IVF in Dubai, Boston (USA) & Singapore.
                </li>
                <li>
                    She is trained in Gynaecological Endoscopy from Royal Free Hospital, London.
                </li>
                <li>
                    She has done clinical course for Surgical Pelviscopy at Bombay sponsored by Albrechts University of Kiel Germany.
                </li>
                <li>
                    She got on-hands training in Endoscopic Surgery in BOSTON (USA) in November 1998.
                </li>
                <li>
                    She has done 12th Course on Assisted Reproductive Techniques in May, 2001 in National University Hospital, Singapore.
                </li>
                <li>
                    She has done 14 days Indo-German Endoscopy training course in Gynaecological Endoscopic Surgery at Kiel and Giessen, Germany from 8th to 12th May 2006.
                </li>
                <li>
                    She has done Indo-German Training course in Advanced Endoscopic Surgery in Gynaecology at Kiel and Giessen, Germany from 15th to 20th May 2006.
                </li>
                <li>
                    She got training Fertility & Sterility, (IFFS 2007) in Durban, South Africa.
                </li>
                <li>
                    She got training International Medical Health and Medical Tourism, Phuket, Thailand, in October 2008.
                </li>
                <li>
                    She was trained by European Society of Human Reproduction and Embryology Barcelona, Spain, July 2008.
                </li>
                <li>
                    She was trained in European Society of Human Reproduction and Embryology held in Amsterdam, The Netherlands (28 June - 1 July 2009).
                </li>
                <li>
                    She was trained in 26th Annual Meeting of the European Society of Human Reproduction and Embryology held in Rome in June 2010.
                </li>
                <li>
                    She was trained in 39th Global Congress of Minimally Invasive Gynecology held in Las Vegas, Nevada in Nov 2010.
                </li>
                <li>
                    She attended and got laurel in Turkey where two continents Asia and Europe meet through 13.6km tunnel from Basphoras to Istanbul in 2012.
                </li>
            </ul>
        </>
    )
}
const Awards = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Awards of Dr vandana Bansal inside a component</h1>
            <ul className='list-disc '>
                <li>She was awarded as Association of member of Royal Society of Health (AMRSH), London on March-1991.</li>
                <li>She was awarded IInd prize in flower show in 1997 at Company Garden, Allahabad.</li>
                <li>She was awarded Honour of Excellence by Rotary Midtown Allahabad on 28th November 1997.</li>
                <li>She had been honoured by Press Council of India being Star of Allahabad for the year 2000 for producing “Allahabad’s First Test Tube Baby and ICSI Baby”.</li>
                <li>She is also recipient of Prayag Gaurav Samman Award, 2001.</li>
                <li>She is recipient of the “RASHTRIYA RATTAN AWARD” presented on 62nd Birth Anniversary of Late Shri Rajiv Ghandhi, at New Delhi on 22nd August 2004, by His Excellency Shri Balram Jakhar (Governor of Madhya Pradesh) & Shri S.C.Jamir (Governor of Goa).,</li>
                <li>She is also recipient of the “Indian Medical Idol Award 2004” along with “Certificate of Medical Excellence” awarded by “International Study Circle (ISC)” seminar on “Contribution of Medical Professionals towards Society” on 24th December, 2004 at New Delhi.</li>
                <li>She is also recipient of the “International Gold Star Millennium Award” presented on Indo-Thai Friendship and Economic Co-operation at Bangkok in January 2005.</li>
                <li>She was awarded International Golf Star Millennium Award for excellence in promoting global integration & economic development by Hon’ble Dr. Bhishma Narain Singh, former governor (Tamil Nadu & Assam) on 20th January 2005 at Bangkok (Thailand).</li>
                <li>Indira Ghandhi Sadbhavna Award, (New Delhi 2005).</li>
                <li>5th National conference for gynaecologist & surgeons 8th & 9th Nov 2008 BEAMS honoured with excellence award.</li>
                <li>Jagran Gems Award, (New Delhi, 2009), Akshayvat Samman (Allahabad 2009).</li>
                <li>Taaza Hawayein (Allahabad 2009)</li>
                <li>“Chetna Shree” Mother Teresa Award (Allahabad 2010).</li>
                <li>Her biographical note has been included in “Asia-Pacific Who’s Who”, “Distinguished & Admirable Achievers”, “Asian Admirable Achievers”.</li>
                <li>She is a Rotarian & Paul Harris fellowship award.</li>
                <li>On Mothers Day 08 May 2011, she was honored for happy mothers day by Dainik Jagran.</li>
                <li>She was awarded by I-Next Achiever’s Award through Mr. Devesh Chaturvedi (IAS) Commissioner of Allahabad on 16th Dec 2012 for being expert in First Test Tube Baby & highest no. of test tube babies at Allahabad and establishing ART centre in Allahabad.</li>
                <li>She was awarded by Dastak Educational Society – Dastak Ratna-2013 Award on 03rd February 2013 at Allahabad.</li>
                <li>She was awarded by Credentialed IMS Menopause Practitioner conducted on 08th Feb 2013 at IMSCON Bhubneshwar, Odisha.</li>
                <li>BEST OF THE BEST IVF Centre Award 2012-13 was awarded to Arpit Test Tube Baby Centre.</li>
                <li>The American Biographical Institute has chosen for honorary appointment in the research board of advisors.</li>
                <li>Appointed supervisor in Michael-O-Johnson Herbalife International.</li>
                <li>She has received Credentialed IMS Menopause Practitioner (CIMP).</li>
                <li>She was awarded “Dhatri Samman” on January 2014 at Allahabad for distinguish service to Humanity.</li>
                <li>She was honoured by Zee Sangam Electronic Channel by Shri Akhilesh Yadav Hon’ble Chief Minister of U.P. for her distinguished services to the state as an IVF expert & infertility consultant of International repute at Lucknow on 3rd November 2014.</li>
                <li>She got Certificate of Appreciation from Zocef, Lions, Plantation, Bharat Vikash Parishad Kaushambi.</li>
                <li>She got Certificate of Appreciation ovary unraveled 2009.</li>
                <li>She got Certificate of Appreciation Anaemia Free India.</li>
                <li>She got Certificate of Appreciation Diabetes Education & Foundation (DEF) as faculty member.</li>
                <li>She got Certificate of Appreciation Prayag Vyapar Mandal.</li>
                <li>She got Certificate of Appreciation Enhancing Pregnancy rate in Infertility from Fortis New Delhi in August-2009.</li>
                <li>She got “Prashasti Patra” Police Samman Samaroh Diwas-2015 by U.P. Police Allahabad on 26th January 2015.</li>
            </ul>
        </>
    )
}
const Membership = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Membership of Dr vandana Bansal inside a component</h1>
            <ul className='list-disc '>
                <li>Life member of Indian Medical Association based at AMA Allahabad. Allahabad Membership No. UP/2611/1/34/44396/95-96/CL, Patna Membership No. BHR/4405/80/154/81330/2000-01/L.</li>
                <li>She is associate member of the Royal Society of Health (AMRSH), London from March-1991.</li>
                <li>She is Indian Society for Prenatal Diagnosis and Therapy & International Integration and Growth Society, New Delhi.</li>
                <li>She is also active member of FOGSI.</li>
                <li>She is member of Association of Gynaecological Endoscopists.</li>
                <li>She is member of Rotary Club of Allahabad-East.</li>
                <li>She is member of Indian Society For Assisted Reproduction.</li>
                <li>She is member of Bombay Endoscopy Academy & Centre for Minimally Invasive Surgery.</li>
                <li>She is fellow of IMA College of General Practitioners. Life membership No. UP-182/LM-9548.</li>
                <li>Life member of National Neonatology Forum, New Delhi.</li>
                <li>Member of USUI SHIKI RYOHO an obtain certificate on REIKI method of Natural Healing.</li>
                <li>Life member an International member FIGO & AOFOG of The Federation of Obstetric & Gynaecological Societies of India.</li>
                <li>Life member of National Association for Voluntary Sterilization & Family Welfare of India (NAVSFWI).</li>
                <li>She is fellow of the college FICMCH & ICMCH.</li>
                <li>Life member of Indian Menopause Society (L-632).</li>
                <li>Life member of Advancing Minimally Invasive Gynecology Worldwide (AAGL).</li>
                <li>Member of FOGSI Social Security Scheme (No. 851) and also Dr. A.K. Bansal & Dr. Arpit Bansal.</li>
                <li>Member of International Integration & Growth Society (IIGS) for the year 2005-2006.</li>
            </ul>
        </>
    )
}
const NationalConference = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>National Conference vandana Bansal inside a component</h1>

            <ul className='list-disc '>
                <li>Workshop on Fetal Medicine 12th to 13th November 1991 Bombay Indian Society for Prenatal Diagnosis and Therapy & International Integration and Growth Society, New Delhi.</li>
                <li>37th All India Obstetric & Gynaecological Congress from 27th to 30th December 1993 at Calcutta.</li>
                <li>World Congress of Gynaecological Endoscopy in December 1993 (Bombay).</li>
                <li>XIX Annual Conference Association of Surgeons of India, U.P. Chapter from 15th to 17th October 1993 at Allahabad.</li>
                <li>Update on Infertility & Transvaginal Sonography from 8th to 10th December 1993 at Bombay.</li>
                <li>Rotary Club of Allahabad East on 19th August 1993.</li>
                <li>7th Annual Conference of Obstetrics & Gynaecology, U.P. Chapter from 6th to 7th February 1993 at Allahabad.</li>
                <li>First National Congress on Assisted Reproduction & Advances in Infertility Management organized by Indian Society for Assisted Reproductive from 18th to 20th November 1994.</li>
                <li>5th National Congress on Assisted Reproduction Technology & Advances in Infertility Management from 26th to 28th February 1999.</li>
                <li>1st & 5th National Congress on Assisted Reproductive Technology and Advances in Infertility Management in Bombay.</li>
                <li>International Congress on Infertility & Transvaginal sonography, Bombay Hospital January 1995.</li>
                <li>3rd International Scientific Meeting of Royal College of Obst. & Gynae. 12th to 15th March 1996 New Delhi.</li>
                <li>AOFOG Workshop on “SAFE MOTHER HOOD” from 29th to 30th November 1997 at MLN Medical College, Allahabad.</li>
                <li>3rd National Congress on Assisted Reproductive Technology and Advances in Infertility Management in 7th to 11th February 1997 Calcutta.</li>
                <li>XXth All Kerala Conference Obstetrics & Gynaecology workshop on Ultrasonography/Endoscopy on 20th to 23rd February 1998 at Kochi Kerala.</li>
                <li>She attended 1st SAARC International Gymnastics Championship 27th February to 1st March 1998 held in Allahabad.</li>
                <li>National update’ 98 Workshop & Conference Infertility, Endoscopy & Color Doppler by IAHR on 11th to 12th April 1998 at Vardhman Infertility & Endoscopy Centre, Muzaffarnagar, U.P.</li>
                <li>ICOG-IFUMB Speciality Workshop on Obstetric & Gynaecological Ultrasound 18th & 19th July 1998 at Agra under the auspices of Indian Federation of Ultrasound in Medicine & Biology and Indian College of Obstetrics & Gynaecology and FOGSI Imaging Science Committee.</li>
                <li>Gynendocon’ 98 Congress on 25th to 27th September 1998 at Agra.</li>
                <li>National update’ 98 Workshop & Conference Infertility, Endoscopy & Color Doppler by IAHR & FOGSI, Allahabad 15th November 1998.</li>
                <li>42nd All India Congress of Obstetrics Adolescent Gynaecology at Hyderabad in from 27th to 30th December 1998.</li>
                <li>National Workshop on Endoscopy, Infertility, TVS & Color Doppler, by the Indian Academy of human Reproduction ON 27th & 28th March 1999. Varanasi.</li>
                <li>43rd All India Congress of Obstetrics & Gynaecology Pre-Congress Workshop on Practical Management of Infertility & ICSI at Lucknow on 26th December 1999.</li>
                <li>43rd All India Congress of Obstetrics & Gynaecology at Lucknow on 27th to 30 December 1999.</li>
                <li>2nd Indo-German Endoscopic Workshop cum CME on Infertility Endoscopy & Colour Doppler from 5th to 7th March 1999 at Kanpur.</li>
                <li>CME-2000 Dr. C.S. Dawn Regional Institute of Maternal & Child Health on 16th July 2000 at Allahabad.</li>
                <li>5th World Congress and XIII Indian Conference on Reproductive & Child Health Care from 24th to 26th November 2000 at Nagpur.</li>
                <li>Presented Paper-Women Lack “Say in Reproductive Health Matter”.</li>
                <li>She also presented paper on Women & AIDs of Perinatology & Reproductive Biology on “Quality of Life” Feb., 2001.</li>
                <li>7th Annual Conference CARDICON-2001 Cardiological Society of India U.P. Chapter on 10th & 11th February 2001 at Allahabad.</li>
                <li>ISOPARB-2001 17th Annual Congress of Indian Society of Perinatology and Reproductive Biology Topic “Quality of Life” Challenge of New Millennium from 17th to 18th February 2001 at Allahabad.</li>
                <li>7th Annual Conference Cardiological Society of India, UP Chapter, Allahabad Feb, 2001.</li>
                <li>“Optimizing IVF Results” IUI, IVF & ICSI Workshop conference on 1st to 3rd June 2001 organized by Genetics & Fetal Medicine Committee of FOGSI at Hyderabad (A.P.).</li>
                <li>6th World Congress & 14th Indian Conference on Reproductive & Child Health Care from 20th 22nd September 2002 organized by NARCHI, New Delhi.</li>
                <li>6th World Congress & 14th Indian Conference on Reproductive & Child Health Care presented paper on “Women & AIDS” from 20th 22nd September 2002 organized by NARCHI, New Delhi.</li>
                <li>International Congress on Infertility the Federation of Obstetrics & Gynaecological Societies of India, The Mumbai Obstetrics & Gynaecological Society, presented video on “Oocyte Donation” 14th to 16th November 2003 Mumbai.</li>
                <li>10th National Congress on Assisted Reproductive Technology & Advances in Infertility Management from 13th to 15th February 2004 at Jodhpur.</li>
                <li>15th Annual Conference of India Society of Gastroenterology UP Chapter UPISGCON-2004 on 21st & 22nd February 2004 and MCM Medical Collage.</li>
                <li>IAGA-2004 (The Indian Association of Gynaecological Endoscopists) Pre-conference Workshop 11th June 2004, Mumbai.</li>
                <li>7th National CME Nurosciences Update by AMA on 5th September 2004 at Allahabad.</li>
                <li>BEAMS in association with IAGE & AMASI a national conference for Gynaecologist & Surgeons “Just Hysterectomy” on 9th & 10th October 2004 at Mumbai.</li>
                <li>10th Conference of UP chapter of Obstetrics & Gynaecology on recent Advance in infertility management, Nov. 2004, Agra.</li>
                <li>9th National conference for Gynaecologists & Surgeons on Just Hysterectomy organized by Bombay Endoscopy Academy & Centre for Minimally invasive surgeon, Mumbai, Oct, 2004.</li>
                <li>UPOBGYCON XVIth Conference of UP Chapter of Obstetrics & Gynaecology Post-Congress Workshop on Recent Advances in Infertility Management on 8th November 2004 at Agra.</li>
                <li>33rd Annual Conference at MOGS (Mumbai Obstetric & Gynaecological Society on 26th & 27th March 2005 at Mumbai.</li>
                <li>IMAGES-2005 : Vision & Skill Put to Reality - MOGS & IMAGES with FOGSI INFERTILITY COMMITTEE on 11th & 12th June 2005 at Mumbai.</li>
                <li>8th National Level CME on ‘Genito-Urinary Update’ organized by AMA on 4th September 2005, Allahabad.</li>
                <li>9th Regional Meeting of International Society for Gynecological Endoscopy ISGE INDIA-2005 organized by Indian Association of Gynaecological Endoscopists “Beyond the Horizon : The Uterus And More” on 22nd to 25th September 2005 at Mumbai.</li>
                <li>FOGSI’s North Zone Labour & Delivery Conference organized by Agra Obstetrical & Gynaecological Society on 26th to 27th November 2005 at Agra.</li>
                <li>12th National Congress on Assisted Reproductive Technology in Feb, 2006 at Bangalore.</li>
                <li>National AIDS Control Organization (NACO) & Indian Medical Association CME programme for private physicians on HIV/AIDS Prevention & Treatment Awareness on 13th August 2006 at Allahabad.</li>
                <li>Recent Advances in Obgyn on 19th to 20th August 2006 New Delhi.</li>
                <li>VIII World Congress on Reproductive & Child Health (NARCHI), Oct 2006, Lucknow.</li>
                <li>Ethicon Institute of Surgical Education MIPS Professional’s Program organized by Gynecare Women’s Health Solution on 14th October 2006.</li>
                <li>XVIII State Congress of Obstetrics and Gynaecology, Kanpur, Nov, 2006.</li>
                <li>2nd World Congress on Practical Infertility Management & Human Reproduction on 18th to 19th November 2006 at Mumbai.</li>
                <li>Indo French Congress on Gynecology Endoscopy, Ultrasound & Infertility, Nov,2006, Varanasi.</li>
                <li>2nd World congress on Practical Infertility Management & Human Reproduction, Nov 2006.</li>
                <li>Fertivision-2006 conference by Indian Fertility Society on 8th to 10th December 2006 at New Delhi.</li>
                <li>National Congress on Assisted Reproduction and Advances in Infertility management, Feb, 2007 at Chandigarh.</li>
                <li>IAGE North Zone Workshop & Symposium “Update on Endoscopy & Infertility” on 20th to 21 October 2007 at Jeevan Jyoti Hospital, Allahabad.</li>
                <li>4th National Annual Conference “Just Fibroids” Nov, 2007 by BEAMS, Mumbai.</li>
                <li>National Conference of Indian Fertility Society, Dec 2007, New Delhi.</li>
                <li>Annual Conference at MOGS (Mumbai Obstetric & Gynaecological Society) Jan, 2008 Mumbai.</li>
                <li>8th National Congress & Workshop on Minimal Access Surgery -IAGES Feb, 2008 Jaipur.</li>
                <li>51st All India Congress of Obstetrics & Gynaecology (ICOG) participating in Dr. C.G. Saraiya CME held on 2nd February 2008 at New Delhi.</li>
                <li>PEDICARDICON-2008 “Recent Advances in Pediatric Cardiac Care” organized by Indian Academy of Pediatrics on 29th June 2008 at Allahabad.</li>
                <li>AMACON-2008 Allahabad Medical Association on 28th September 2008 at Allahabad.</li>
                <li>3rd World Congress on Practical Infertility Management & Human Reproduction, Mumbai in Nov.2008.</li>
                <li>5th National Conference on Gynaecologist and Surgeons, Just Complications (BEAMS), Mumbai in Nov 2008.</li>
                <li>OSSICON-2009 7th National Conference of Obesity & Metabolic Surgery Society of India on 11th to 12th April 2009 at Hyderabad.</li>
                <li>“Progress 2009” in July 2009 at Chennai.</li>
                <li>“Just haemostasis” Beams conference on 2nd to 4th October 2009 at Mumbai.</li>
                <li>“The Ovary Unraveled 2009“ in December at Mumbai.</li>
                <li>Meeting Challenges in Reproductive Medicine on 6th December 2009 at Gurgaon.</li>
                <li>“National Conference on Endocrinology and Infertility “ in May 2010 at Mumbai.</li>
                <li>“First Satellite conference of IMS” in August 2010 at Ahmedabad.</li>
                <li>“Just Controversies” BEAMS conference in October 2010 at Mumbai.</li>
                <li>UPCON OBGYN 2010 conference in December 2010 at Bareilly</li>
                <li>“The First Trimester” conference in December 2010 at Bhubaneswar.</li>
                <li>National AMSCON-2010 organized by IMA AMS Allahabad Chapter in association with IMA Allahabad, IMA Academy of Medical Specialities on 4th & 5th December 2010 at Allahabad.</li>
                <li>Participated in state level Annual Refresher course IMA CGP 2011.</li>
                <li>Moti Lal Nehru Medical College Golden Jubilee Celebrations Multispeciality Academic Update on 6th February 2011 at Allahabad.</li>
                <li>She participated in state level RSSDI-UPCON 2011. Research Society for the Study of Diabetes in India – May 2011.</li>
                <li>G-ROS 2011 1st International Conference & Live Operative Workshop on Advanced Laparoscopy and Robotic Surgery on 29th April to 1st May 2011 at Pune.</li>
                <li>She has attended Endocrine Update-2011 as delegate on 14th August 2011.</li>
                <li>She has attended Minimal Access Metabolic Surgery (MAS) workshop & CME on reduced port surgery 24 Aug 2011 at New Delhi.</li>
                <li>7th Indian Ian Donald Obs Gyn Ultrasound Course on Advances in Obstetrics and Gynaecology Ultrasound & PCPNDT Act in collaboration with (Indian Society for prenatal diagnosis and therapy (ISPAT) from 18th September 2011 at New Delhi.</li>
                <li>She attended AMA-ONCOCON 2011 14th National Conference of AMA and workshop on Management of Common Cancer 08th & 09th Oct-2011.</li>
                <li>IMSCON-2012, 17th Functionary of Indian Menopause Society on 17th to 19th February 2012 at Faridabad.</li>
                <li>Alumni Welfare Association National Level CME on Rheumatology Update on 8th April 2012 at MLN Medical College, Allahabad.</li>
                <li>She attended ABSICON-2012 from 18th to 20th May 2012 at Hyderabad.</li>
                <li>Central Sector Medical Conference/CME-2012 attended on ‘Shock-Evaluation & Management’ organized at Composite Hospital, CRPF, Allahabad (U.P.) on 30th April 2012 as a guest speaker.</li>
                <li>She attended Scientific Convention of “Clinical Practice Guidelines on Menopause Management 2012” on 3rd August 2012 at Hyderabad.</li>
                <li>She attended IMA-CGP 2012 theme “Challenges in Reproductive Health” organized by AMA on 13th May 2012 at Hotel Kanha Shyam, Civil Lines, Allahabad.</li>
                <li>She attended Surgical Endocrinology in Allahabad on 12th August 2012.</li>
                <li>She attended CIDSCON-2012 (Clinical Infectious Disease Society) from 25th to 26th August 2012.</li>
                <li>ISAR North Zone CME on The Endometrium on 19th August 2007 at New Delhi.</li>
                <li>MASTERCLASS IVF on 8th & 9th September 2012 at Mumbai.</li>
                <li>FOGSI Training Course in Operative Endoscopy by The Federation of Obstetric & Gynaecological Societies of India from 10th to 16th September 2007 at Akola.</li>
                <li>Arranged workshop of UPCON-2008 on 20th UP Chapter conference of Obstetricians & Gynaecologists on 5th December 2008 at Allahabad.</li>
                <li>She attended IFSO-2012 (International Federation for the Surgery of Obesity & Metabolic Disorders) from 11th to 15th September 2012 at New Delhi.</li>
                <li>She attended WOOSP-2012 (World Congress on Ovulation Induction & Ovarian Stimulation Protocols) from 12th to 15th September 2012 at Goa.</li>
                <li>She attended Reproductive & Child Health (NARCHI) from 15th to 16th September 2012 at New Delhi.</li>
                <li>She attended UP AMSCON-2012 & 15th AMACON-2012 Recent Advances in Medicine 2012 from 29th to 30th September 2012 at Allahabad.</li>
                <li>She attended NATCON IASO-2012 (Indian Association of Surgical Oncology) 04th to 07th October 2012 at Goa.</li>
                <li>She took active part in “AAROGYAM” UPNCON-2012 U.P. Nursing Home Association Conference from 26th to 28th Oct 2012 at NCZCC Allahabad.</li>
                <li>She attended UPNCON-2012 from 27th to 28th October 2012 at Allahabad.</li>
                <li>She attended Practical Diabetes-2012 organized by Alumni Welfare Association, MLN Medical College, Allahabad on Nov-2012 at Allahabad.</li>
                <li>She attended “Samanvaya - Rajat Jayanti Samaroh-2012” of Smt. Mahadevi Verma on Nov-2012 at Allahabad.</li>
                <li>She attended Beams 9th National Conference 'Just Innovation' from 02nd Nov to 04th Nov 2012 at Mumbai.</li>
                <li>She attended Hospital Management (IIM) from 3rd to 7th December 2012 at Ahmedabad.</li>
                <li>She attended XIIth Annual conference & CME on 16th December 2012 at Mau, U.P.</li>
                <li>She attended 56th All India Congress of Obs & Gynae participated precongress workshop on Advanced Infertility & ART on 16th January 2013 at Mumbai.</li>
                <li>She attended AICOG-2013 56th All India Congress of Obs & Gynae from 18th to 20th January 2013 at Mumbai as Panalist and delivered lecture.</li>
                <li>She attended National Cancer Congress-2013 (Surgical Workshop on Breast Cancer Surgery) from 19th to 20th Jan 2013 at Delhi.</li>
                <li>IMSCON-2013 18th National Conference of Indian Menopause Society on 8th to 10th February 2013 at Bhubaneswar.</li>
                <li>She attended M.S. Ramaiah Advanced Learning Centre Basic Surgical Skills with hands on Cardaver Training on 16th February 2013 at Bangalore.</li>
                <li>She attended Intermedics Training Academy (ITA) Embryology Training & Lab Management from 24th February 2013 to 01st March 2013 at Mumbai.</li>
                <li>SAFOG-2013 9th South Asian Federation of Obstetrics & Gynaecology Conference on 28th February to 3rd March 2013 at Agra.</li>
                <li>FOGSI MSD KEY Programme on Contraception and Cancer Cervix on 16th March 2013 at Allahabad</li>
                <li>ASPIRE INDIA 2013 on 17th to 19th May 2013 at Chennai.</li>
                <li>FOGSI WORLD CONGRESS in Women’s Health Care Workshop on 7th to 9th June 2013 at Bengaluru.</li>
                <li>FOGSI WORLD CONGRESS in Women’s Health Care in USG in Early Pregnancy Workshop on 7th June 2013 at Bengaluru.</li>
                <li>She attended Robert Fisher’s Meeting on 12th June 2013 at New Delhi.</li>
                <li>She attended IMS Zonal Meet Conference from 20th to 21st July 2013 at Jodhpur.</li>
                <li>She attended State Level Refresher Course IMA CGP 2013 on 13th May 2013 at Allahabad.</li>
                <li>She attended UP AMSCON 2013 16th AMACON 2013 Renal Update 2013 on 29th September 2013 at Allahabad.</li>
                <li>She attended 1st Indian Cancer Congress from 20th to 24th November 2013 at Delhi.</li>
                <li>She attended CME on Stem Cell Therapy organized by Alumni Welfare Association MLN Medical College on 24th November 2013.</li>
                <li>She attended UPAPSICON-2014 (22nd Annual Conference of UP Chapter of Association of Plastic Surgeons of India) from 11th & 12th January 2014 at MLN Medical College, Allahabad.</li>
                <li>She attended IAGE MISCON 2014 Annual Conference of Indian Association of Gynaecological Endoscopists (In collaboration with GESI) from 29th August 2014 to 31st August 2014 at AIIMS, New Delhi.</li>
                <li>She attended as Chairperson in workshop & CME 28th to 31st August 2014 at AIIMS, New Delhi.</li>
                <li>She attended GASTROCON-2014 as faculty from 27th to 28th September 2014 at Allahabad.</li>
                <li>She attended UP AMASCON-2014 & 17th AMACON-2014 on 5th October 2014 at AMA, Allahabad.</li>
                <li>She attended UPDACON-2014 (Diabetes) on 1st & 2nd November 2014 at MLN Medical College, Allahabad.</li>
                <li>She attended G-ROS 2014 3rd International Conference & Live Operative Workshop on Advanced Laparoscopy from 7th to 9th November 2014.</li>
                <li>She attended live workshop and Nation level CME on Bariatric Surgery by Alumni Welfare Association of MLN Medical College Allahabad on 16th November 2014.</li>
                <li>She attended FEM Conference 2014 as Panelist at Mumbai from 21st to 22nd November 2014.</li>
                <li>She attended IMA-CGP 2015 at Allahabad on 10th May 2015.</li>
                <li>She attended workshop and scientific program FENIX-2015 Women-Fertility & Beyond:Inception to Xcellence at AIIMS, New Delhi on 28th to 30th August 2015.</li>
                <li>She attended lecture on “Changing faces of cardiac surgery in 21st century” on 30th August 2015 at AMA Allahabad.</li>
                <li>She attended Embryology ISAR-2015 on 4th to 6th Sept 2015 at New Delhi.</li>
                <li>She attended “Vitrolife Scientific Workshop-Time Lapse Embryoscope A new standard of care” on 16th Sept 2015 at ART Centre Research & Referral, New Delhi under Indian Fertility Society.</li>
                <li>She attended FERTIPROTECT-2 2nd Annual Conference Fertility Preservation Society India on 25th to 27th Sept. 2015 at New Delhi.</li>
                <li>She attended Alumni Welfare Association MLN Medical College Allahabad on 11th October 2015 CME on Minimal Invasive Ano Rectal Surgeries.</li>
                <li>She attended Conference, CME & Workshop of Indian Menopause Society from 30th & 31st October 2015 at Kolkata.</li>
                <li>She attended 80th UPINACON-2015 & 18th AMACOM from 7th to 8th November 2015 AMA Allahabad.</li>
                <li>She flagged of Raily on World Diabetes Day on 14th November 2015 sponsored by Dainik Jagran along with DM, SSP, CMO, GM Dainik Jagran. JJH Nursing students, doctors, admin staff took part and attended CME on Diabetes at AMA.</li>
                <li>She attended ASICON-2015 Platinum Jubilee of ASI at Gurgaon from 16th to 20th December 2015.</li>
                <li>She attended MILAN-2015, 5th Batch Golden Jubilee & 30th Batch Silver Jubilee Alumni Welfare Association, MLN Medical College, Allahabad on 27th December 2015.</li>
                <li>She attended Asian Society of Continuing Medical Education - Genesis Redefining ART at Goa from 5th to 7th January 2016.</li>
            </ul>
        </>
    )
}
const InternationalConference = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Internaandana Bansal inside a component</h1>
            <ul className='list-disc '>
                <li>She attended conference in Endoscopic Surgery in BOSTON (USA) in November 1998.</li>
                <li>She attended Dubai in April 1999 on invitation from INFAR INTERNATIONAL at Symposium on Infertility.</li>
                <li>She attended University of Columbia in Aug. 1999 for training and workshop symposium on In Vitro Fertilization, and ICSI.</li>
                <li>She attended SINGAPORE from 1st June 2000 to 5th June 2000 to attend Seventh World Congress of Endoscopic Surgery, Gynecological Symposium Workshop and Eight Annual International Scientific meeting of the Endoscopic and Laparoscopic Surgeons of ASIA.</li>
                <li>She attended conference 12th Course on Assisted Reproductive Techniques in May, 2001 in National University Hospital, Singapore.</li>
                <li>She attended conference in In-Vitro Fertilization in Egypt 2006.</li>
                <li>She attended conference 14 days Indo-German Endoscopy training course in Gynaecological Endoscopic Surgery at Kiel and Giessen, Germany from 14th to 21st May 2006.</li>
                <li>She attended XIX World Congress on Fertility & Sterility, (IFFS 2007) in Durban, South Africa.</li>
                <li>She attended conference in In-Vitro Fertilization in United Arab Emirates (UAE) 2007.</li>
                <li>She attended conference Fertility & Sterility, (IFFS 2007) in Durban, South Africa.</li>
                <li>She attended conference International Medical Health and Medical Tourism, Phuket, Thailand, in October 2008</li>
                <li>She attended conference by European Society of Human Reproduction and Embryology Barcelona, Spain, July 2008.</li>
                <li>She attended conference in In-Vitro Fertilization in Geneva (Switzerland) 2008.</li>
                <li>She attended conference in In-Vitro Fertilization in France 2008.</li>
                <li>She attended conference in European Society of Human Reproduction and Embryology held in Amsterdam, The Netherlands (28 June - 1 July 2009).</li>
                <li>She attended CME Accreditation ESHRE Rome Italy in July 2010 on Reproductive Surgery.</li>
                <li>She attended USA in Nov – 2010 for Specialized training on Laparoscopic surgery.</li>
                <li>She attended conference in 26th Annual Meeting of the European Society of Human Reproduction and Embryology held in Rome in June 2010.</li>
                <li>She attended conference in 39th Global Congress of Minimally Invasive Gynecology held in Las Vegas, Nevada in Nov 2010.</li>
                <li>She attended conference in Infertility & IVF in Dubai, Boston (USA) & Singapore.</li>
                <li>She attended conference in In-Vitro Fertilization in Sweden 2011.</li>
                <li>She attended conference in In-Vitro Fertilization in USA 2011.</li>
                <li>She has attended 6th International Congress of Association of Minimal Access Surgeon of India, Amasicon-2011 May at Singapore.</li>
                <li>She has attended ESHRE conference at Sweden capital Stockholm 3 to 6 July 2011.</li>
                <li>She attended ASRM at USA from 09th to 19th Oct-2011.</li>
                <li>She attended ESHRE-2012 at Istanbul, Turkey from 1st July to 4th July 2012.</li>
                <li>She attended European Society of Human Reproduction & Embryology (ESHRE) Annual Conference from 07th to 10th July 2013 at London (U.K.).</li>
                <li>She has worked as Observer with the Minimally Invasive Therapy Unit, Hampstead, London.</li>
                <li>She attended ESHRE-2014 Annual Meeting on Human Reproduction & Embryology from 29th June 2014 to 2nd July 2014 at Munich, Germany.</li>
                <li>She attended ESHRE-2015 at Portugal, Lisbon on Andrology & Reproductive Surgery from 14th to 17th June 2015.</li>
                <li>She attended AICOG-2016 59th All India Congress of Obstetrics & Gynaecology Laparoscopic Workshop at Agra on 13th to 17th January 2016.</li>
            </ul>
        </>
    )
}
const Workshop = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Workshopndana Bansal inside a component</h1>

            <ul className='list-disc '>
                <li>Dr. Vandana Bansal has organised National Conferences and Workshops in Infertility, Endoscopy and Colour Doppler, 1998.</li>
                <li>She has conducted IECD, conference in Nov. 1998, ENT conference, RCH conference and laparoscopic workshop at Allahabad.</li>
                <li>Laparoscopy Update, 2004 was conducted at Jeevan Jyoti Hospital by Dr. Vandana Bansal.</li>
                <li>Arranged Training of 450 Physicians on HIV/AIDS at Allahabad sponsored by NACO in Mar 2006. It is a unique work done by Dr. Vandana Bansal as social secretary in Cooperation with AMA.</li>
                <li>Arranged Update on Endoscopy and Infertility, 2007.</li>
                <li>Arranged update on Endoscopy and Infertility, 2007.</li>
                <li>Arranged IAGE North Zone Workshop & Symposium “Update on Endoscopy & Infertility” on 20th to 21 October 2007 at Jeevan Jyoti Hospital, Allahabad.</li>
                <li>Arranged workshop of UPCON-2008 on 20th UP Chapter conference of Obstetricians & Gynaecologists on 5th December 2008 at Allahabad.</li>
                <li>Arranged workshop of ENDOFERT 2010 on Endocrinology & Infertility December 2010 at Allahabad.</li>
                <li>Organized live Workshop of Indian Menopause Society held at Ahmedabad through satellite presented at Allahabad audience in August 2010.</li>
                <li>Arranged Laparoscopic workshop, 2011 at Allahabad.</li>
                <li>As social secretary of AMA she invited Kapil Dev, veteran 1983 World cup Winner Captain to distribute prizes to AMA winners in athletes of AMA.</li>
                <li>Thrice Governors of UP, Union Health Minister, Union Human Resource Development Minister, Union Home Minister of state & other dignitaries visited Jeevan Jyoti Hospital and Khelgaon for inaugurations. She was pioneer in this activity.</li>
                <li>Regular free health checkup camps are arranged by Jeevan Jyoti Charitable Trust including month long free camps in Ardha Khumbh & Maha Khumbh at Allahabad in all sectors, where Dr. Vandana Bansal is chairperson.</li>
                <li>Indian Menopause Society EAST ZONAL Conference arranged on 6th & 7th April 2013 at Allahabad by Dr. Vandana Bansal who is chapter secretary.</li>
                <li>She arranged CME arranged on Cancer, Headache and Kidney Transplant on 15th June 2013 at Allahabad in cooperation with Apollo Hospital, New Delhi.</li>
                <li>She is running several projects as NGO, especially Medical Disaster management. AYUSH, JANANI SURAKSHA YOGNA, RSBY etc.</li>
                <li>She organized “Update on Diabetes Management” by Indian Menopause Society on 05th January 2014.</li>
                <li>She organized “World Environment Day” on 5th June 2014 Chief Guest was Shri Badal Chattergee, IAS, Divisional Commissioner, Allahabad Division, Allahabad, Guest of Honour was Shri L.V. Antony Dev Kumar, Inspector General of Police, Allahabad, Special Guest was Smt. Manzil Saini, IPS, SSP, Allahabad, Dr. Padmakar Singh, CMO, Allahabad, Dr. Dipendra Malviya, Dy. CMO & Nodal Officer, Allahabad.</li>
                <li>Indian Menopause Society Allahabad Chapter is organizing IMS CME on 26th June 2014 at Hotel Grand Continental, Civil Lines, Allahabad topic “How to keep your Kidney’s Healthy” Speaker Dr. Kailash N. Singh, Senior Consultant Nephrology & Multiorgan Transplant, Indraprastha Apollo Hospital, New Delhi.</li>
                <li>She organized IUI workshop in Arpit Test Tube Baby Centre, Jeevan Jyoti Hospital, Allahabad on 24th August 2014.</li>
                <li>She organized IMS CME on “Coronary Heart Disease in Menopause” on 12th October 2014 at Allahabad.</li>
                <li>She organized Heritage Walk at Khushrobagh Allahabad in association with the Learning Works (Sanchari) on 10th January 2016.</li>
                <li>She inaugurated Free Health Checkup camp of Jeevan Jyoti Charitable Trust in 20 bedded hospital in Magh Mela Allahabad on 3rd February 2016.</li>
                <li>She organized Cycle Rally 2016 22nd March 2016 at Jeevan Jyoti Public School, Bheerpur, Karchana, Allahabad which the purpose of strengthening the integrity of the society by means of education and awareness and to promote social welfare and to prevail the peace and enrich the harmony.</li>
                <li>She organized Live Surgery Workshop on 09th April 2016 by Dr. Shailesh Puntambekar, Oncosurgeon and Lecture on “Role of Laparoscopic Surgery in Cancer” at MLN Medical College Allahabad by Dr. Shailesh Puntambekar.</li>
                <li>She organized Club 35 Plus & IMS CME on “Anti Aging” on 25th May 2016 at Allahabad.</li>
                <li>She organized Live Surgery Workshop on 13th & 14th June 2016 by World Renowned Hysteroscopy Surgeon Prof. (Dr.) Osama Shauki from Cairo’s Egypt at Vandana Superspeciality Hospital, Allahabad.</li>
                <li>She organized Cycle Rally on 26th July 2016 on Kargil Vijay Diwas at 6 U.P. Girls Battalion NCC Allahabad.</li>
                <li>She organized Blood Donation Camp on 2nd September 2016 at Jeevan Jyoti Hospital, Allahabad.</li>
                <li>She organized World First Aid Day on 10th September 2016 at Jeevan Jyoti Hospital.</li>
            </ul>
        </>
    )
}
const OtherAchievements = () => {
    return (
        <>
            {/* <h1 className='text-2xl font-semibold my-3' className='text-xl '>Other Acheivements na Bansal inside a component</h1> */}

            <p className='my-3'>Dr. Vandana Bansal and her team appeared in Guinness World Record for doing surgery of maximum number of Intracranial cysts removed from a 10 years old girl, on 13 April 2011.</p>

            She was project Director of SIFPSA TBA training project to train 3824 Traditional Birth Attendants in 28 Blocks of Allahabad and Kaushambi,
            Dr. Vandana Bansal played a vital role to run a college of NARCHI where MBBS are trained to become DGO (Diploma in Gynec and Obst.) associated with Reproductive and child Health and family welfare.
            She has started Nursing School and Paramedical Training Centre at Allahabad in Sep. 2005 approved by U.P. Government & Nursing Council of India & UP State Medical Faculty.
            She has established PTU courses in Allahabad in Jeevan Jyoti Institute of Medical Sciences along with ITI courses and ANM training programme courses.
            She has done many Laparoscopic surgeries; one of the highest position in U.P. Surgeons List.
            Her name appeared in WHO’s WHO section in ASIA PACIFIC in Surgeons list.
            Dr. Vandana Bansal has established hospital where CGHS, ECHS, FCI, IFFCO, Railway, BSNL such organization and 35 TPA's are empanelled.
            She has developed association with Apollo Hospital for Telemedicine facilities and medical tourism and Guru Gobind Singh Memorial “Vandana Women’s Superspeciality Hospital”.
            She established in cooperation with Dr. A.K. Bansal Allahabad Medical Association (AMA) Blood Bank one of the top Blood Bank of Allahabad; He has achieved many awards from many respectable organizations and institutions in India & aboard for this activity.
            Dr. Vandana Bansal associated with nine trusts named:
            Jeevan Jyoti Charitable Trust
            New Jeevan Jyoti Charitable Trust
            Society for Health & Hygiene
            Jeevan Jyoti Progressive Society
            Institute of Ethics Society
            Clinical Research Society
            Jeevan Jyoti Charitable Society
            Allahabad Blood Bank Society
            Ascent Foundation Society
            She is running several projects as NGO, especially Medical Disaster management, month long free camps etc. and takes parts in all public private partnership.
            She is running a research centre for research of pharmaceutical medicines.
            She is Medical Director (Gynaecology) of National Sports Academy Khelgaon, Allahabad.
            She is Director of Jeevan Jyoti Hospital, Jyoti Hospital Pvt. Ltd., Arpit Hospital Ltd., Nav Jeevan Pediatrics Pvt. Ltd., Guru Gobind Singh Memorial “Vandana Women’s Superspciality Hospital” & Vice-President of Jeevan Jyoti Charitable Trust.
            She is running Jeevan Jyoti Public School, Allahabad
            She conducted Triveni Mahotsav in 2008 and got certificate of appreciation.
            She got certificate of appreciation FERTIVISION – 2006 FROM Indian Fertility Society for appreciable work in the field of IVF.
            Through trust she serves poor patients by rendering free medical treatments in camps and in hospitals, indoor and outdoor with 20 beds on charity for peoples below poverty line.
            She is CEO Jyoti Hospital Nursing School & Jeevan Jyoti Institute of Paramedical Sciences. His objective is to provide health to the NATION by way of EDUCATION.
            She was awarded by I-Next Achiever’s Award through Mr. Devesh Chaturvedi (IAS) Commissioner of Allahabad on 16th Dec 2012 for being expert in Male Infertility & Impotency and establishing ART centre in Allahabad.
            She was awarded by Red Swastik Society for his exemplary and outstanding contribution in the field of Laparoscopic & General Surgeries and Male & Female Infertility “Bhai Ghannaiya Award-2013” which is given in the memory of legendry historical figure on 12th January 2014 at Mumbai.
            She was recognized as most successful student Gold Medalist in D.Phil in MLN Medical College, Allahabad.
            She was awarded by Dainik Jagran “Gems of Purvanchal” by Hon’ble Minister PWD and irrigation Shri Shivpal Singh Yadav and JPL CMD Shri Mahendra Mohan Gupta CEO & Editor Shri Alok Sawant and associated Editor Smt. Sarmishtha Sharma at Lucknow on 28th February 2014.
        </>
    )
}
const Visits = () => {
    return (
        <>
            <h1 className='text-2xl font-semibold my-3'>Visits vandana Bansal inside a component</h1>
            

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-2">
                    Country Name
                </th>
                <th scope="col" class="px-6 py-2">
                    Year
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    USA
                </th>
                <td class="px-6 py-2">
                    1998
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    UK
                </th>
                <td class="px-6 py-2">
                    1999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    USA
                </th>
                <td class="px-6 py-2">
                    1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Singapore
                </th>
                <td class="px-6 py-2">
                    2000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Bangladesh
                </th>
                <td class="px-6 py-2">
                    2000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Thiland
                </th>
                <td class="px-6 py-2">
                    2000
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Switzerland
                </th>
                <td class="px-6 py-2">
                    2003
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Marutius
                </th>
                <td class="px-6 py-2">
                    2004
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Malaysia
                </th>
                <td class="px-6 py-2">
                    2004
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Thiland
                </th>
                <td class="px-6 py-2">
                    2005
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    USA
                </th>
                <td class="px-6 py-2">
            2005
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Germany
                </th>
                <td class="px-6 py-2">
                    2006
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    UAE
                </th>
                <td class="px-6 py-2">
                    2007
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    South Africa
                </th>
                <td class="px-6 py-2">
                    2007
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Thiland
                </th>
                <td class="px-6 py-2">
                    2008
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Switzerland
                </th>
                <td class="px-6 py-2">
                    2008
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    France
                </th>
                <td class="px-6 py-2">
                    2008
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray- dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Spain
                </th>
                <td class="px-6 py-2">
                    2008
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rome
                </th>
                <td class="px-6 py-2">
                    2010
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    USA
                </th>
                <td class="px-6 py-2">
                    2010
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    SINGAPORE
                </th>
                <td class="px-6 py-2">
                    2011
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Thiland
                </th>
                <td class="px-6 py-2">
                    2011
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Finland
                </th>
                <td class="px-6 py-2">
                    2011
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sweden
                </th>
                <td class="px-6 py-2">
                    2011
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    USA
                </th>
                <td class="px-6 py-2">
                    2011
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Istanbul
                </th>
                <td class="px-6 py-2">
                    2012
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    LONDON
                </th>
                <td class="px-6 py-2">
                    2013
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    GERMANY
                </th>
                <td class="px-6 py-2">
                    2014
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    PORTGUL
                </th>
                <td class="px-6 py-2">
                    2015
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    SPAIN
                </th>
                <td class="px-6 py-2">
                    2015
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    SINGAPORE
                </th>
                <td class="px-6 py-2">
                    2016
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    )
}