import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Top from "../../components/Top/Top";
import profileImg from "../../assets/profile.png";
import facebookImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import githubImg from "../../assets/github.png";
import idImg from "../../assets/id.png";
import genderImg from "../../assets/gender.png";
import emailImg from "../../assets/email.png";
import calendarImg from "../../assets/calendar.png";
import style from "./Profile.module.css";
import Board from "../../components/Board/Board";
const Profile = ({ menus, User, setIsLogin }) => {

  return (
    <div>
      <Sidebar menus={menus} setIsLogin={setIsLogin} />
      <Top User={User} />
      <div className={style.Profile}>
        <Board>
          <div className={style.UserIcon}>
            <ul className={style.ProfileIcon}>
              <li>
                <img className={style.Icon} src={profileImg} />
              </li>
              <li>{User.name}</li>
              <li>
                <button>수정</button>
              </li>
            </ul>
            <ul className={style.Imformation}>
              <li>
                <img className={style.IdIcon} src={idImg} />
                Id : {User.id}
              </li>
              <li>
                <img className={style.EmailIcon} src={emailImg} />
                Email : {User.email}
              </li>
              <li>
                <img className={style.GenderIcon} src={genderImg} />
                Gender : {User.sex}
              </li>
              <li>
                <img className={style.CalendarIcon} src={calendarImg} />
                Birth : {User.age}
              </li>
            </ul>
            <ul className={style.Sns}>
              <li>
                <a href="#">
                  <img className={style.SnsIcon} src={facebookImg} />
                </a> &nbsp;facebook.com
              </li>
              <li>
                <a href="#">
                  <img className={style.SnsIcon} src={instagramImg} />
                </a> &nbsp;instagram.com
              </li>
              <li>
                <a href="#">
                  <img className={style.SnsIcon} src={githubImg} />
                </a> &nbsp;github.com
              </li>
            </ul>
          </div>
          <div className={style.UserImformation}>
          <ul className={style.AboutMe}>
              <li className={style.UserImformationTitle}>
                <h2>About Me</h2>
                <button>수정</button>
              </li>
              <li>
                <p>
                  취미
                </p>
              </li>
              <li>
                <p>
                  특기
                </p>
              </li>
              <li>
                <p>
                  자격증
                </p>
              </li>
            </ul>
            
          </div>
        </Board>
        {/* <div className={style.MyPostList}>
          <div className={style.MyCreatedList}>
            <MyBoardList />
          </div>
          <div className={style.CommentedPostList}>
          // 댓글쓴 글 표시창 추후 추가 예정
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Profile;