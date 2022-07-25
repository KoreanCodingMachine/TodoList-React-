# 나만의 투두리스트 만들어보기
서버리스한 환경에서 나만의 투두리스트를 만들어 보았다. 


# 구현 기능
1.인풋에 입력하여 투두리스트에 추가하기 기능

2.투두리스트 삭제하기 기능

3.투두리스트 수정하기(버튼 클릭시 완료/취소)

# 사용기술

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

# 트러블 슈팅

1.수정하기 함수를 구현했는데 List component에서 jsx 조건부 3항 연산자를 사용해야한다고 알고는 있었는데 어떻게 적용해야할지 몰라서
꽤 많은 시간을 허비했다. map함수에서 if문을 활용해 checked의 상태에 따라 구현을 했는데 원하는대로 잘 동작한다. 

2.컴포넌트 여러개로 나누는 과정에서 이렇게까지 나눠야 하나 싶기도 했고 작은 토이프로젝트이지만 이렇게까지 컴포넌트를 세분화하여 나눠 본적이 없어서
처음에 살짝 어려웠다. 특히나 과제에서 layoout 컴포넌트를 따로 만들라고 해서 뭐지 싶었지만 구글링 해보니 컴포넌트를 재 사용하기 위해 만든 컴포넌트라고 하여
생산성의 효율을 높이기 위한 컴포넌트라고 한다. 또한 pages 라는 폴더를 만들어서 화면에 어떤식으로 랜더링할지 설정하는 컴포넌트를 만들어서 전체적인 폴더 구조를 새롭게 알게되었다.

3.개선할점은 과제 명세상 컴포넌트 안에 별도의 css 파일을 만들도록 하여서 우선은 이렇게 구현해봤지만 다음 프로젝트때는 css-in-js를 써보고 싶다. (styled-component)
