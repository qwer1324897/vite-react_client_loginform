const url = "http://localhost:9993/api/auth"; // 스프링 api 서버 주소

/*===============================================
 로그인 요청. 파라미터로 받는 payload 는 아이디 비번의 js객체 리터럴 ex) {homepage_id:"Jin",password:"1234"}
=================================================*/
export function loginRequestWithJson(payload) {

    fetch(`${url}/login`, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials: "include", // 비동기 방식에서는 개발자가 요청시 쿠키를 포함하여 전송함을 선언해야 함.(동기방식은 원래 브라우저가 해줌)
        body:JSON.stringify(payload)
    })
    .then(resonse => {
        if(!resonse.ok) throw new Error("로그인 에러");
        return resonse.json(); // Promise 를 반환하면서 동시에 resolve(json 문자열을 파싱한 객체) 호출
    })
    .then(data =>{
        console.log("로그인 결과 - 사용자 정보: ", data);
    })
    .catch(error => console.log(error));
}

/*===============================================
 로그인 요청. JSON 문자열 전송이 아닌 form 방식.
=================================================*/
export function loginRequest(payload) {

    const params = new URLSearchParams();

    params.append("homepageId", payload.homepageId);
    params.append("password", payload.password);

    fetch(`${url}/login`, {
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        credentials:"include",
        body:params.toString()
    })
    .then(resonse => {
        if(!resonse.ok) throw new Error("로그인 에러");
        return resonse.json(); // Promise 를 반환하면서 동시에 resolve(json 문자열을 파싱한 객체) 호출
    })
    .then(data =>{
        console.log("로그인 결과 - 사용자 정보: ", data);
    })
    .catch(error => console.log(error));
}



