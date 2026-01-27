import uiStyles from "../components/ui/Input.module.css";

export default function Signup() {
    return (
        <div className={uiStyles.formContainer}>
            <h2 className={uiStyles.formTitle}>회원가입</h2>
            <form>
                <div className={uiStyles.formGroup}>
                    <input type="text" placeholder="아이디" className={uiStyles.inputStyle} />
                </div>
                <div className={uiStyles.formGroup}>
                    <input type="password" placeholder="비밀번호" className={uiStyles.inputStyle} />
                </div>
                <div className={uiStyles.formGroup}>
                    <input type="text" placeholder="이름" className={uiStyles.inputStyle} />
                </div>
                <div className={uiStyles.formGroup}>
                    <button type="button" className={uiStyles.primaryBtn} style={{ width: '100%' }}>가입하기</button>
                </div>
            </form>
        </div>
    );
}
