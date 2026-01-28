import { useEffect, useState } from "react";

export default function OAuth2Redirect() {

    const [profile, setProfile] = useState(null);

    // useEffect 동작 시점
    // 1) 컴포넌트가 랜더링 될 때 2) 감시 대상 데이터 변경 시
    useEffect(()=>{
        // sns 로그인 성공 직후 이므로, 서버에는 세션이 존재한다. 따라서 곧바로 사용자 정보를 요청한다.
        fetch("http://localhost:9993/api/me", {
            method:"GET",
            credentials: "include" // 세션ID 에 담겨있으므로 쿠키를 허용시켜야 한다.
        })
        .then(response => {
            if(!response.ok) throw new Error("에러 발생");
            return response.json();
        })
        .then(data => {
            console.log("서버에서 가져온 사용자 데이터는: ", data);
            setProfile(data);
        })
        .catch(error => console.log(error));
    },[]);

    return (
        <div style={{maxWidth: 720, margin:"40px auto", padding:20}}>
            <h2 style={{marginTop:0}}>OAuth2 로그인 처리 결과</h2>

            <div></div>

            {profile &&
            <div style={{display:"flex", gap:16, alignItems:"center"}}>
                <div>
                    <div>프로바이더 명: <b>{profile.provider}</b></div>
                    <div>회원명: <b>{profile.name}</b></div>
                    <div>이메일: <b>{profile.email}</b></div>
                </div>
            </div>
            }
        </div>
    );
}