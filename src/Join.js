import React, { useEffect, useState } from "react";
import "./Join.css";

const Join = () => {
    // 계정 배열 초기값
    const [accounts, setAccounts] = useState([
      {
        id : "",
        pw : "",
        name : "",
        email : "",
        sex : "",
        age: ""
    }
    ]);

    const[account, setAccount]= useState();

    const [inputs, setInputs] = useState(
        {
          id : "",
          pw : "",
          name : "",
          email : "",
          sex : "",
          age: ""
      }
    
    );

    // 초기값 세팅 - 아이디, 패스워드, 패스워드확인, 이름, 이메일, 성별, 나이(생년월일)
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwRewind, setPwRewind] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");

    // 유효성 검사
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwRewindValid, setPwRewindValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [sexValid, setSexValid] = useState(false);
    const [ageValid, setAgeValid] = useState(false);
    const [isJoin, setIsJoin] = useState(false);

    // 오류메세지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [pwRewindMessage, setPwRewindMessage] = useState("");
    const [nameMessage, setNameMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [ageMessage, setAgeMessage] = useState("");


    // 아이디 동기 처리
    useEffect(()=>{
      const regex = /^[a-zA-z0-9]{4,12}$/
      if(id.length === 0){
        setIdMessage();
      }else{
        if (regex.test(id)) {
          setIdValid(true);
          setIdMessage("사용 가능한 아이디입니다.")
        } else {
          setIdValid(false);
          setIdMessage("사용 불가능한 아이디입니다.")
        }
      }
    },[id])

    // 아이디 제한
    const handleId = (e) => {
        setId(e.target.value);
        const {name, value} = e.target
        setInputs({
          ...inputs,
          [name] : value
        })

        const regex = /^[a-zA-z0-9]{4,12}$/
        if (regex.test(id)) {
          setIdValid(true);
          setIdMessage("사용 가능한 아이디입니다.");
        } else {
          setIdValid(false);
          setIdMessage("사용 불가능한 아이디입니다.");
        }
      };
      
      // 비밀번호 동기 처리
      useEffect(()=>{
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
        if(pw.length === 0){
        setPwMessage();
      }else{
        if (regex.test(pw)) {
          setPwValid(true);
          setPwMessage("사용 가능한 비밀번호입니다.")
        } else {
          setPwValid(false);
          setPwMessage("사용 불가능한 비밀번호입니다.")
        }
      }
      },[pw])


      // 비밀번호 제한
      useEffect(() => {},[]);
      const handlePw = (e) => {
        setPw(e.target.value);
        const {name, value} = e.target
        setInputs({
          ...inputs,
          [name] : value
        })
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
        if (regex.test(pw)) {
          setPwValid(true);
          setPwMessage("사용 가능한 비밀번호입니다.")
        } else {
          setPwValid(false);
          setPwMessage("사용 불가능한 비밀번호입니다.")
        }
      };

      // 비밀번호 재확인 동기 처리
      useEffect(()=>{
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
        if(pwRewind.length === 0){
        setPwRewindMessage();
      }else{
        if (regex.test(pwRewind) && pwRewind === pw) {
          setPwRewindValid(true);
          setPwRewindMessage();
        } else {
          setPwRewindValid(false);
          setPwRewindMessage("비밀번호와 일치하지 않습니다.");
        }
      }
      },[pwRewind])

      // 비밀번호 확인 제한
      const handlePwRewind = (e) => {
        setPwRewind(e.target.value);
        if (pwRewind === pw) {
            setPwRewindValid(true);
            setPwRewindMessage();
        } else {
            setPwRewindValid(false);
            setPwRewindMessage("비밀번호가 일치하지 않습니다");
        }
      };

      // 이름 동기 처리
      useEffect(()=>{
        const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
        if(name.length === 0){
        setNameMessage();
      }else{
        if (regex.test(pw)) {
          setNameValid(true);
        } else {
          setNameValid(false);
        }
      }
      },[name])
    
      // 이름 제한
      const handleName = (e) => {
        setName(e.target.value);
        const {name, value} = e.target
        setInputs({
          ...inputs,
          [name] : value
        })
        if (name==="") {
            setNameValid(false);
            setNameMessage("이름을 기입해주세요.");
        } else {
            setNameValid(true);
          setNameMessage("");
        }
      };

      // 이메일 동기 처리
      useEffect(()=>{
        const regex = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if(email.length === 0){
        setEmailMessage();
      }else{
        if (regex.test(email)) {
          setEmailValid(true);
          setEmailMessage("사용 가능한 이메일입니다.")
        } else {
          setEmailValid(false);
          setEmailMessage("사용 불가능한 이메일입니다.")
        }
      }
      },[email])

      // 이메일 제한
      const handleEmail = (e) => {
        setEmail(e.target.value);
        const {name, value} = e.target
        setInputs({
          ...inputs,
          [name] : value
        })
        const regex = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (regex.test(email)) {
            setEmailValid(true);
            setEmailMessage("사용 가능한 이메일입니다.");
        } else {
            setEmailValid(false);
            setEmailMessage("사용 불가능한 이메일입니다.");
        }
      };

// 이메일 동기 처리
      useEffect(()=>{
        const regex = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if(email.length === 0){
        setEmailMessage();
      }else{
        if (regex.test(email)) {
          setEmailValid(true);
          setEmailMessage("사용 가능한 이메일입니다.")
        } else {
          setEmailValid(false);
          setEmailMessage("사용 불가능한 이메일입니다.")
        }
      }
      },[email])

      // 나이(생년월일) 동기 처리
      useEffect(()=>{
        if(age.length === 0){
          setAgeMessage();
        }else{
        if(age.length === 8){
          setAgeValid(true);
          setAgeMessage();
      }else{
        setAgeValid(false);
        setAgeMessage("생년월일을 확인해주세요.")
        }
      }
      },[age])

      // 나이(생년월일) 제한
      const handleAge = (e) => {
        setAge(e.target.value);
        if (age.length === 8) {
            setAgeValid(true);
            const {name, value} = e.target
            setInputs({
              ...inputs,
              [name] : value
            })
            setAgeMessage();
        } else {
            setAgeValid(false);
            setAgeMessage("생년월일을 확인해주세요.");
        }
      };


      // 계정 배열에 값 insert
    const onCreate = () => {
        if(id === "" || pw ==="" || pwRewind === "" || name === "" || email === "" || age ===""){
            alert("공란을 확인해주세요");
        }else{if(!idValid || !pwValid || !pwRewindValid || !nameValid || !emailValid || !ageValid){
          alert("정확한 정보를 기입해주세요")
         }else{
            account = {
              id,
              pw,
              name,
              email,
              sex,
              age
            }
            setAccounts([...accounts, account])
            setInputs({
              id : "",
              pw : "",
              name : "",
              email : "",
              sex : "",
              age: ""
            })
            alert("성공");
            setIsJoin(false)
          }
        }
    }
    
    const onReset = () =>{
      setId("");
      setIdMessage();
      setPw("");
      setPwMessage();
      setPwRewind("");
      setPwRewindMessage();
      setName("");
      setNameMessage();
      setEmail("");
      setEmailMessage();
      setAge("");
      setAgeMessage();
    }

    return(
        <div className="Join">
            <div className="container">
                  <p>아이디</p>
                <input 
                        id = "id"
                        name = "id"
                        type="text"
                        value={id}
                        placeholder="아이디를 적어주세요"
                        onChange={handleId}
                        />
                        <p style={idValid ? {color:"blue"} : {color:"red"}}
                        >{idMessage}</p>
                  <p>패스워드</p>
                  <input
                            id = "pw"
                            name = "pw"
                            type="password"
                            value={pw}
                            placeholder="영대소문자, 특수기함 포함 8자 이상"
                            onChange={handlePw}
                            />
                            <p style={pwValid ? {color:"blue"} : {color:"red"}}
                            >{pwMessage}</p>
                <p>패스워드 재확인</p>
                <input
                                id = "pwRewind"
                                name = "pwRewind"
                                type="password"
                                value={pwRewind}
                                onChange={handlePwRewind}
                                />
                                <p style={pwRewindValid ? {color:"blue"} : {color:"red"}}
                                >{pwRewindMessage}</p>
                <p>이름</p>
                <input
                        id = "userName"
                        name = "userName"
                        type="text"
                        value={name}
                        placeholder="이름을 적어주세요"
                        onChange={handleName}
                        />
                        <p style={nameValid ? {color:"blue"} : {color:"red"}}
                        >{nameMessage}</p>
                <p>이메일</p>
                <input
                            id = "email"
                            name = "email"
                            type="text"
                            value={email}
                            placeholder="이메일을 적어주세요"
                            onChange={handleEmail}
                            />
                            <p style={emailValid ? {color:"blue"} : {color:"red"}}
                            >{emailMessage}</p>
                <p>성별</p>
                <div>
      <input type="radio" id="sex" name="sex" value="male"
             checked />
      <label for="male">남성</label>
    </div>

    <div>
      <input type="radio" id="sex" name="sex" value="female" />
      <label for="femakle">여성</label>
    </div>
            <p>생년월일</p>
                <input
                            id = "age"
                            name = "age"
                            type="number"
                            value={age}
                            placeholder="ex)20080101"
                            onChange={handleAge}
                            />
                            <p style={ageValid ? {color:"blue"} : {color:"red"}}
                            >{ageMessage}</p>
                            <div className="form-btn">
                <button
                type = "submit"
                onClick={onCreate}
                >생성</button>
                <button
                type= "reset"
                onClick={onReset}
                >초기화</button>
                </div>
            </div>
        </div>
    )
}

export default Join;