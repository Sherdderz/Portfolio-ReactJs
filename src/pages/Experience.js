import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SMA Negeri 100, Jakarta, Indonesia
          </h3>
          <p> Social</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Perbanas Institute, Jakarta, Indonesia
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Informatics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug - Dec 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Programmer - PT HashMicro Solusi Indonesia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>As an Software Programmer intern my jobdesc is create, edit and debugging 
            module using Odoo framework with Python language.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug - Sep 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Enumerator Data Entry - Jakpreneur
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>
            Enter an collected data from surveyor.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Inbound Daily Worker - Shopee Warehouse
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>
            As an daily worker I helped the team to do a sorting of the goods depending on subdistrict.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Game Account Seller - Self-Employed
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jakarta, Indonesia
          </h4>
          <p>
            I'm now an self-employed by selling game's goods and service, my market of 
            selling the goods and service is global and I've sold around 170+ game accounts,
            now I've become an moderator of the website with 170 positive feedbacks.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;