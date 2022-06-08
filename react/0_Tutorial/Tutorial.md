# 왜 리액트인가?

1. 사용자 경험
2. 재사용 컴포넌트(유지보수도 편리하다)
3. 데이터-화면 일치

# 리액트

1. 바뀌는 부분을 'state'로 만든다.
2. 'JSX'문법 사용(JS + XML)

# 바벨

1. 최신 문법이나 실험적인 문법들을 자바스크립트에서 사용할 수 있게 변환해 주는 도구이다.(jsx 사용도 가능하게 해준다.)

# 웹팩(webpack)

1. 여러 개의 자바스크립트 파일은 합쳐서 한 개의 파일로 만들어 준다.
2. npm init으로 package.json파일을 만들어서 관리
3. react, react-dom, webpack, webpack-cli 등을 설치
4. webpack.config.js 파일을 만들고 설정
5. 웹팩 실행 - npx webpack, package.json에 scripts에 추가
6. 바벨을 사용하기 위해 설치 - npm i -D @babel/core @babel/preset-env @babel/preset-react babel/loader
7. @babel/core(기본적인 바벨, 최신문법을 바꿔준다.) @babel/preset-env(설정한 환경에 맞게 바꿔준다.) @babel/preset-react(jsx문법을 바꿔준다.) babel/loader(babel과 webpack을 연결해준다.)
