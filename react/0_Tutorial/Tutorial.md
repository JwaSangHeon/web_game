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
8. plugin들의 모음이 preset이다.

# 웹팩 데브 서버, 핫리로딩

1. npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin (핫 리로딩을 위한 두 개의 package)
2. npm i -D webpack-dev-server (서버)
3. script의 dev를 'webpack serve --env development'로 설정 (webpack-cli 변경 때문에)
4. loader options에 plugins에 'react-refresh/babel',그냥 plugins에 pmmmwh/react-refresh-webpack-plugin의 객체를 만든 후 삽입
5. dev server는 output 및에 devServer을 만든 후, devMiddleware:{ publicPath: output의 publicPath}를 그대로 넣어주고,static: {directory: path.resolve(\_\_dirname)} (이 코드는 index.html의 위치경로를 나타낸다. 만약 src폴더 안에 있다면 (\_\_dirname,'src')), hot:true 설정
6. dev server의 역할 : webpack.config.js에 작성한대로 빌드 결과물을 돌린 후에 , 그것을 publicPath에 결과물을 저장을 해놓는다. 이후 핫리로딩을 통해 변경점을 감지하여 수정 해준다.
7. 리로딩 VS 핫리로딩 : webpack dev server가 변경점을 탐지하면은 새로고침을 시켜주는데, 새로고침되면 기존의 데이터가 전부 날라가버린다. 하지만 핫리로딩은 기존의 데이터를 유지하면서 새로고침한다.

# require VS import

1. require은 node의 모듈 시스템이다. 즉, module.exports=를 통해 파일을 exports하면 다른 곳에서 require을 통해 모듈을 불러 올 수 있다.
2. import 는 import React form 'react'과 같은 형식으로 파일을 불러온다. export default를 사용하여 export 한다.(module.exports= 와 export default는 같진 않지만 호환 가능하다.)
3. export default는 import baseball 과 같이 불러올 수 있고, export const hello와 같은 것은 import {hello} 형식으로 불러온다.
4. 이것 역시 babel이 import 문법을 require로 변경해 주기 때문에 사용가능하다. 하지만 webpack.config.js와 같이 node에서 돌아가는 것은 import 구문을 사용하면 안된다.
