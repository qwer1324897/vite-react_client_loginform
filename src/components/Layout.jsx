// 이 파일의 의미: 페이지만 만들어봐야 웹 페이지의 전체적인 공통 레이아웃을 정해야 하므로
import {Outlet} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return(
        <div>
            <Header/>
            <main>
                <Outlet/> {/*여기 부분만 페이지별로 교체되어 랜더링 될 영역*/}
            </main>
            <Footer/>
        </div>
    );
}