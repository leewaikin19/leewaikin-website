import '../main.css';
import React from 'react';
import * as T from '../template.tsx';
import p1 from "../assets/p1.jpg";
import nus from "../assets/nus.png";

function About(props: React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
    document.title = "About - Lee Wai Kin";

    function scrollTo(elementId: string) {
        document.documentElement.style.scrollBehavior = "smooth";
        document.getElementById(elementId)?.scrollIntoView();
        document.documentElement.style.scrollBehavior = "";
    }
    return (
        <>
            <T.Section>
                <T.Title>
                    About Me
                </T.Title>
                <T.BoxContainer>
                    <T.Box className="flex-col">
                        <T.BoxHeader className='h-[250px]'> <img className="rounded-t-4xl object-cover w-full h-full object-[0_-15px]" src={p1} alt="" /> </T.BoxHeader>
                        <T.BoxContent className="mt-5"> I am currently a Year 2 NUS Computer Science student. </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("whoami")}> More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col">
                        <T.BoxTitle> Education </T.BoxTitle>
                        <T.BoxHeader className="h-[150px]"> <img className="object-cover w-full h-full" src={nus} alt="" /> </T.BoxHeader>
                        <T.BoxContent>
                            <div className="text-3xl mt-3 mb-5">
                                National University of Singapore (NUS)
                            </div>
                            <div className="text-2xl">
                                Bachelor of Computing <br /> (Computer Science)
                            </div>
                        </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("education")}> More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col min-h-10">
                        <T.BoxTitle> Key Achievements </T.BoxTitle>
                        <T.BoxContent>
                            <ul className="list-disc mx-10 text-left flex flex-col gap-5">
                                <li>ASEAN Undergraduate Merit Scholarship</li>
                                <li>NUS Dean's List</li>
                            </ul>
                        </T.BoxContent>
                        <T.Button className="" onClick={() => scrollTo("achievements")}> More... </T.Button>
                    </T.Box>
                    <T.Box className="flex-col min-h-10">
                        <T.BoxTitle> My Skills </T.BoxTitle>
                        <T.BoxContent>
                            <T.Tag> Javascript / Typescript </T.Tag>
                            <T.Tag> ReactJS / Node.js </T.Tag>
                            <T.Tag> HTML / CSS </T.Tag>
                            <T.Tag> C / C++ </T.Tag>
                            <T.Tag> Python </T.Tag>
                            <T.Tag> Java </T.Tag>
                            <T.Tag> Webhosting </T.Tag>
                            <T.Tag> Database </T.Tag>
                            <T.Tag> TensorFlow / PyTorch </T.Tag>
                        </T.BoxContent>
                    </T.Box>
                </T.BoxContainer>
            </T.Section>
            <T.Section id="whoami">
                <T.SectionHeader> Who am I?</T.SectionHeader>
                <T.SectionContent className="">
                    <div className="w-3/4 text-justify">
                        In progress ...
                    </div>
                </T.SectionContent>
            </T.Section>
            <T.Section id="education">
                <T.SectionHeader> Education </T.SectionHeader>
                <T.SectionContent>
                    <T.Timeline>
                        <T.Date>Present</T.Date>
                        <T.Entry> </T.Entry>
                        <T.TimelineLine />
                        <T.Entry>
                            <T.Paragraph>
                                <div>National University of Singapore (NUS)</div>
                                <T.BulletPoint>
                                    Bachelor of Computing (Honours), Computer Science
                                </T.BulletPoint>
                                <T.BulletPoint>
                                    CGPA: 5.0 / 5.0
                                </T.BulletPoint>
                            </T.Paragraph>
                        </T.Entry>
                        <T.Date>2023</T.Date>
                        <T.Entry></T.Entry>
                        <T.TimelineLine />
                        <T.Entry><T.Paragraph>
                            <div>Anglo-Chinese School (Independent)</div>
                            <T.BulletPoint>
                                Diploma of the International Baccalaureate
                            </T.BulletPoint>
                            <T.BulletPoint>
                                Points: 43/45
                            </T.BulletPoint>
                        </T.Paragraph></T.Entry>
                        <T.Date>2017</T.Date>
                    </T.Timeline>

                    <T.ContentDivider />

                    <div className='w-1/2'>
                        <div className="text-3xl mt-10 text-left"> National University of Singapore</div>
                        <div className='text-left'> CGPA: 5.0 / 5.0 (As of AY23/24 Semester 2)</div>

                        <T.Collapsible className=" m-0" Header={<T.CollapsibleHeader className="text-xl">
                            Modules Taken
                        </T.CollapsibleHeader>} Content={<T.CollapsibleContent>
                            <div className="grid grid-cols-5 justify-self-center">
                                <div className="col-span-4 mb-2 text-center">Module</div>
                                <div className="col-span-1">Grade</div>
                                <u className="col-span-5">Computer Science</u>
                                <div className="col-span-4 text-left">CS1101S Programming Methodology</div>
                                <div className="col-span-1">A+</div>
                                <div className="col-span-4 text-left">CS1231S Discrete Structures</div>
                                <div className="col-span-1">A+</div>
                                <div className="col-span-4 text-left">CS2030S	Programming Methodology II</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CS2040S	Data Structures and Algorithms</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CS2100	Computer Organisation</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CS2101 Effective Communication for Computing Professionals</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">CS2103T Software Engineering</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">CS2106	Introduction to Operating Systems</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">CS2109S	Introduction to AI and Machine Learning</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CS3230	Design and Analysis of Algorithms</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CS3263 Foundations of Artificial Intelligence</div>
                                <div className="col-span-1">TBC</div>

                                <div className='col-span-5 p-2' />
                                <u className="col-span-5 ">Math</u>
                                <div className="col-span-4 text-left">MA1521	Calculus for Computing</div>
                                <div className="col-span-1">S</div>
                                <div className="col-span-4 text-left">MA1522	Linear Algebra for Computing</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">ST2334	Probability and Statistics</div>
                                <div className="col-span-1">A</div>

                                <div className='col-span-5 p-2' />
                                <u className="col-span-5">Miscellaneous</u>
                                <div className="col-span-4 text-left">HSI1000 How Science Works, Why Science Works</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">IS1108	Digital Ethics and Data Privacy</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">IS2218 Digital Platforms for Business</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">ES2660	Communicating in the Information Age</div>
                                <div className="col-span-1">S</div>
                                <div className="col-span-4 text-left">GEC1015	Public Health in Action</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">ST1131	Introduction to Statistics and Statistical Computing</div>
                                <div className="col-span-1">S</div>
                                <div className="col-span-4 text-left">GESS1000	Global EC Dimensions of Singapore</div>
                                <div className="col-span-1">S</div>
                                <div className="col-span-4 text-left">CLC2204 Community Development with Youth</div>
                                <div className="col-span-1">TBC</div>
                                <div className="col-span-4 text-left">MUA1166	Introduction to Computing Media in Max</div>
                                <div className="col-span-1">A</div>
                                <div className="col-span-4 text-left">CFA1101A	Performing Arts in Practice (Music) 1</div>
                                <div className="col-span-1">S</div>
                                <br />
                            </div>
                        </T.CollapsibleContent>} />
                    </div>

                    <T.ContentDivider />

                    <div className='w-1/2'>
                        <div className="text-3xl mt-10 text-left"> Anglo-Chinese School (Independent)
                        </div>
                        <div className='text-left'> Points: 43/45 </div>
                        <T.Collapsible className=" m-0" Header={<T.CollapsibleHeader className="text-xl">
                            Subject Combination
                        </T.CollapsibleHeader>} Content={<T.CollapsibleContent>
                            <div className="grid grid-cols-5 justify-self-center">
                                <div className="col-span-4 text-center">Subject</div>
                                <div className="col-span-1">Grade</div>
                                <div className="col-span-4 text-left">English A: Language and Literature (SL)
                                </div>
                                <div className="col-span-1">6</div>
                                <div className="col-span-4 text-left">Chinese B (SL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Economics (SL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Mathematics - AA (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Physics (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Chemistry (HL)
                                </div>
                                <div className="col-span-1">7</div>
                                <div className="col-span-4 text-left">Physics EE
                                </div>
                                <div className="col-span-1">B</div>
                                <div className="col-span-4 text-left">Theory of Knowledge</div>
                                <div className="col-span-1">B</div>
                            </div>
                        </T.CollapsibleContent>} />
                    </div>
                </T.SectionContent>
            </T.Section>
            <T.Section id="achievements">
                <T.SectionHeader> Key Achievements </T.SectionHeader>
                <T.SectionContent>
                    <T.Collapsible
                        Header={<T.CollapsibleHeader>
                            <T.CustomLink href="https://nus.edu.sg/oam/scholarships/scholarships-for-freshmen-singapore-permanent-residents/asean-undergraduate-scholarship" target="_blank">
                                ASEAN Undergraduate Merit Scholarship
                            </T.CustomLink>
                        </T.CollapsibleHeader>}
                        Content={<T.CollapsibleContent>
                            <div className="px-5 pt-5 h-auto text-left" >
                                Recipient of the ASEAN Undergraduate Merit Scholarship from 2023-2027.

                            </div>
                        </T.CollapsibleContent>} />
                    <T.Collapsible
                        Header={<T.CollapsibleHeader>
                            <T.CustomLink href="https://credentials.nus.edu.sg/f5dc0f96-4a70-49f0-bbba-6142b765947a#acc.V5SX1WA4" target="_blank">
                                NUS Dean's List (AY23/24 Semester 2)
                            </T.CustomLink>
                        </T.CollapsibleHeader>}
                        Content={<T.CollapsibleContent>
                            <div className="p-10">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/105927835" alt="" />
                            </div>
                        </T.CollapsibleContent>} />
                    <T.Collapsible
                        Header={<T.CollapsibleHeader>
                            <T.CustomLink href="https://credentials.nus.edu.sg/1a660a26-f305-4f01-956a-c95a71ac230a#acc.kzMparqy" target="_blank">
                                NUS Dean's List (AY24/25 Semester 1)
                            </T.CustomLink>
                        </T.CollapsibleHeader>}
                        Content={<T.CollapsibleContent>
                            <div className="p-10">
                                <img className="m-auto" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/129042888" alt="" />
                            </div>
                        </T.CollapsibleContent>} />
                </T.SectionContent>
            </T.Section>
        </>
    );
}

export default About;