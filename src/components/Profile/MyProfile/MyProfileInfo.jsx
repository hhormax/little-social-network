import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileStatus from "./MyProfileStatus";

const MyProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
        <div>
          <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU"></img>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.name}>{props.login}</div>
        </div>
        <MyProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default MyProfileInfo;