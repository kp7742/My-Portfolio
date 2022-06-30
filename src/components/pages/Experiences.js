import { CgWorkAlt } from "react-icons/cg";
import { IoSchoolOutline } from "react-icons/io5";
import TitleAnim from "../containers/TitleAnim";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import data from "../../assets/data";

import 'react-vertical-timeline-component/style.min.css';

function Experiences() {
    return (
        <section className="Experiences">
            <div id="experiences" className="mt-10 p-5">
                <TitleAnim title="Experiences" />

                <div className="mt-10">
                    <VerticalTimeline>
                        {data.experiences.map((exp) => {
                            return (
                                exp.isworkcard ? (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date={exp.date}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<CgWorkAlt />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                                        <p>{exp.description}</p>
                                    </VerticalTimelineElement>
                                ) : (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                                        date={exp.date}
                                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                        icon={<IoSchoolOutline />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
                                        <p>{exp.description}</p>
                                    </VerticalTimelineElement>
                                )
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
}
    
export default Experiences;