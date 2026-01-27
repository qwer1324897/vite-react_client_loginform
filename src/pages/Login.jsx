import uiStyles from "../components/ui/Input.module.css";
import { loginRequest } from "../api/auth.js";
import { useRef } from "react";

export default function Login() {

    const homepageIdRef = useRef(null);  // 참조변수(useRef)로 선언된 대상은 객체이다.
    const passwordRef = useRef(null);
    // Ref 객체 자체에는 값을 대입할 수 없으며, 이 객체가 가진 속성 중 current 안에 데이터를 넣을 수 있다.
    
    // 로그인 요청 메서드 정의
    const login = ()=>{

        const payload = {
            // 사용자가 입력한 값
            homepageId: homepageIdRef.current.value,
            password: passwordRef.current.value
        };

        loginRequest(payload);
    }

    return (
        <div className={uiStyles.formContainer}>
            <h2 className={uiStyles.formTitle}>로그인</h2>
            <form>
                <div className={uiStyles.formGroup}>
                    <input type="text" placeholder="아이디 입력" className={uiStyles.inputStyle} ref={homepageIdRef}/>
                </div>
                <div className={uiStyles.formGroup}>
                    <input type="password" placeholder="비밀번호 입력" className={uiStyles.inputStyle} ref={passwordRef}/>
                </div>
                <div className={uiStyles.formGroup}>
                    <button type="button" onClick={login} className={uiStyles.primaryBtn} style={{width: '100%'}}>로그인</button>
                </div>
            </form>
        </div>
    );
}
