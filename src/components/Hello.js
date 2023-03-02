import React from 'react';
function Hello({name, message, isSpecial}){
    return (
    <>
        <div className='hello'>
        {/* 조건부렌더링 */}
        {isSpecial ? <b>*</b> : null }    
        {/* {isSpecial && <b>*</b>} 논리연산자 &&구문도 사용가능 */}
        {name}님 {message}</div>
        <p>재미있는 리액트</p>
    </>
    )
}
//기본값 설정
Hello.defaultProps = {
    name: "이름"
}
export default Hello;