import React from 'react'
import "./forecast.css"
import {
    Accordion, AccordionItem, AccordionItemButton,
    AccordionItemHeading, AccordionItemPanel
} from 'react-accessible-accordion'

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forcasteDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek));
    console.log(forcasteDays);
    return (
        <>
            <label className="title">Next 7 Days</label>
            <Accordion allowZeroExpanded>

                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dialy-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="small-icon" />
                                    <lable className="day">{forcasteDays[idx]}</lable>
                                    <label htmlFor="" className="description">{item.weather[0].description}</label>
                                    <lable className="min-max">{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</lable>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-detail-grid">
                            <div className="daily-detail-grid-item">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Wind Speed:</label>
                                    <label>{Math.round(3.6*item.wind.speed)}Km/h</label>
                                </div>
                                <div className="daily-detail-grid-item">
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
};

export default forecast